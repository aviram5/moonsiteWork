import React from 'react';
import {View, Text} from 'react-native';
import List from 'src/components/List/List';
import CategoryItem from 'src/components/List/RenderItems/CategoryItem';
import commonTextStyle from 'src/styles/commonText.style';
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
    <View style={{flex: 1}}>
      <Text style={commonTextStyle.centeredText(commonTextStyle.textL)}>
        Please select a category
      </Text>
      <List RenderItem={CategoryItem} data={categories} numColumns={2} />
    </View>
  );
};

export default Home;
