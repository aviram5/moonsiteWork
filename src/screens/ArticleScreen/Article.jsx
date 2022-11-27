import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addFavorite, removeFavorite} from 'src/features/user/userSlice';
const Article = () => {
  const {
    params: {article},
  } = useRoute();

  useEffect(() => {
    console.log('data: ', article);
  });
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article</Text>
      {article.image && (
        <Image
          style={{width: '100%', height: '50%'}}
          source={{
            uri: article.image,
          }}
        />
      )}
      <TouchableOpacity
        onPress={() => dispatch(addFavorite(article))}
        style={{borderWidth: 1, borderRadius: 10}}>
        <Text>Add To Favorits</Text>
      </TouchableOpacity>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>{article.title}</Text>
        <Text>{article.description}</Text>
        <Text>By {article.author}</Text>
      </View>
    </View>
  );
};

export default Article;
