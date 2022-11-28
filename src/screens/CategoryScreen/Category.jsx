import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useFetchArticlesQuery} from 'src/features/articles/articlesApiSlice';
import ArticleItem from 'src/components/List/RenderItems/ArticleItem';
import List from 'src/components/List/List';
import commonTextStyle from 'src/styles/commonText.style';
import commonStyle from 'src/styles/commonStyle.style';

const Category = () => {
  const {
    params: {category},
  } = useRoute();
  const {data, isLoading, isError} = useFetchArticlesQuery(category);

  if (isLoading) {
    return (
      <View style={commonStyle.centerContainer}>
        <ActivityIndicator size={'large'} color={'#000'} />
      </View>
    );
  }
  if (isError) {
    <View style={commonStyle.centerContainer}>
      <Text style={commonTextStyle.textL}>
        An error has occurred while try to fetch data, please try again later
      </Text>
    </View>;
  }

  return (
    <View style={commonStyle.centerContainer}>
      <Text style={commonTextStyle.textL}>Please select an article</Text>
      <List RenderItem={ArticleItem} data={data} numColumns={2} />
    </View>
  );
};

export default Category;
