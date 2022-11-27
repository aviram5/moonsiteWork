import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from 'src/features/user/userSlice';
import {AuthorNameWrapper} from 'src/components/List/RenderItems/ArticleItem';

//IsFavorite bug!!!!!!!!!!!!!1

const Article = () => {
  const {
    params: {article},
  } = useRoute();
  const userState = useSelector(state => state.user);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log('invoke');
    for (let i = 0; i < userState.favorites.length; i++) {
      if (userState.favorites[i].key === article.key) {
        console.log('true1');
        setIsFavorite(true);
      } else {
        console.log('false1');

        setIsFavorite(false);
      }
    }
  }, [userState]);

  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          if (isFavorite) {
            dispatch(removeFavorite(article));
          } else {
            dispatch(addFavorite(article));
          }
        }}
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          top: '85%',
          marginBottom: '5%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10%',
          width: '50%',
          borderWidth: 1,
          borderRadius: 10,
          zIndex: 100,
          // flex: 1,
        }}>
        <Text>{isFavorite ? 'Remove From Favorites' : 'Add To Favorits'}</Text>
      </TouchableOpacity>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '800',
            color: '#7e7e7e',
            textAlign: 'center',
            marginBottom: 8,
          }}>
          {article.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '800',
            color: '#7e7e7e',
            textAlign: 'center',
            marginBottom: 8,
          }}>
          {article.description}
        </Text>
        <AuthorNameWrapper authorName={article.author} />
      </View>
      {article.image && (
        <Image
          style={{width: '90%', borderRadius: 10, flex: 3}}
          source={{
            uri: article.image,
          }}
        />
      )}
    </ScrollView>
  );
};

export default Article;
