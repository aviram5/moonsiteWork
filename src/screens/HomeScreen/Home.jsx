import React from 'react';
import {View, Text} from 'react-native';
import CategoryList from './CategoryList/CategoryList';
const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#0e0e0e'}}>
      <Text>Home</Text>
      <CategoryList />
    </View>
  );
};

export default Home;
