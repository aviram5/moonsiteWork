import React, {useEffect, useState, useId} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useFetchArticlesQuery} from 'src/features/articles/articlesApiSlice';

import ArticleItem from 'src/components/List/RenderItems/ArticleItem';
import List from 'src/components/List/List';

const Category = () => {
  const {
    params: {category},
  } = useRoute();
  const {data, isLoading, isError} = useFetchArticlesQuery(category);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={'#000'} />
      </View>
    );
  }
  if (isError) {
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>
        An error has aqure while try to fetch data please try again later
      </Text>
    </View>;
  }

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 24, fontWeight: '800', alignSelf: 'center'}}>
        Please select an article
      </Text>
      <List RenderItem={ArticleItem} data={data} numColumns={2} />
    </View>
  );
};

export default Category;
