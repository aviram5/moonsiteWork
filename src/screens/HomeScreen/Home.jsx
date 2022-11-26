import React from 'react';
import {View, Text} from 'react-native';
import List from 'src/components/List/List';
import CategoryItem from 'src/components/List/RenderItems/CategoryItem';

const categories = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
];

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#0e0e0e'}}>
      <Text>Home</Text>
      <List RenderItem={CategoryItem} data={categories} numColumns={3} />
    </View>
  );
};

export default Home;
