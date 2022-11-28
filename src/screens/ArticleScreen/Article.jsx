import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from 'src/features/user/userSlice';
import commonTextStyle from 'src/styles/commonText.style';
import AuthorName from 'src/components/AuthorName/AuthorName';

const Article = () => {
  const {currentArticle} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (currentArticle.isFavorite) {
      dispatch(removeFavorite());
    } else {
      dispatch(addFavorite());
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center'}}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text
            style={[
              commonTextStyle.centeredText(commonTextStyle.textXS),
              styles.title,
            ]}>
            {currentArticle.title}
          </Text>
          <Text
            style={[
              commonTextStyle.centeredText(commonTextStyle.textXS),
              styles.description,
            ]}>
            {currentArticle.description}
          </Text>
          <AuthorName authorName={currentArticle.author} />
        </View>
        {currentArticle.image && (
          <Image
            style={styles.image}
            source={{
              uri: currentArticle.image,
            }}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleFavorite}
          style={styles.favoriteButton}>
          <Text>
            {currentArticle.isFavorite
              ? 'Remove From Favorites'
              : 'Add To Favorits'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
    padding: 10,
  },
  description: {
    marginBottom: 8,
  },
  image: {width: '90%', borderRadius: 10, flex: 3},
  favoriteButton: {
    backgroundColor: '#fff',
    marginVertical: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    width: '50%',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Article;
