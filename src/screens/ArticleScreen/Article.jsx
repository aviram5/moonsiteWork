import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from 'src/features/user/userSlice';
import {AuthorNameWrapper} from 'src/components/List/RenderItems/ArticleItem';

const Article = () => {
  const {favorites, currentArticle} = useSelector(state => state.user);

  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center'}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '800',
              color: '#7e7e7e',
              textAlign: 'center',
              marginBottom: 8,
            }}>
            {currentArticle.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '800',
              color: '#7e7e7e',
              textAlign: 'center',
              marginBottom: 8,
            }}>
            {currentArticle.description}
          </Text>
          <AuthorNameWrapper authorName={currentArticle.author} />
        </View>
        {currentArticle.image && (
          <Image
            style={{width: '90%', borderRadius: 10, flex: 3}}
            source={{
              uri: currentArticle.image,
            }}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            if (currentArticle.isFavorite) {
              dispatch(removeFavorite());
            } else {
              dispatch(addFavorite());
            }
          }}
          style={{
            backgroundColor: '#fff',
            marginVertical: '3%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10%',
            width: '50%',
            borderWidth: 1,
            borderRadius: 10,
          }}>
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

export default Article;
