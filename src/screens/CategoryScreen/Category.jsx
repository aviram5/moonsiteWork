import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useFetchArticlesQuery} from 'src/features/articles/articlesApiSlice';
const Category = () => {
  const {
    params: {category},
  } = useRoute();
  const {data, isFetching, isError} = useFetchArticlesQuery(category);
  useEffect(() => {
    console.log('dada', data);
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>Hi</Text>
    </View>
  );
};

export default Category;
