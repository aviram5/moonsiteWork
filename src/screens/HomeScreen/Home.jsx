import React from 'react';
import {View, Text} from 'react-native';
import CategoryList from './CategoryList/CategoryList';
const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Home</Text>
      <CategoryList />
    </View>
  );
};

export default Home;
