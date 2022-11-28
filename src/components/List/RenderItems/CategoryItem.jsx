import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import commonListItemStyle from './common.style';
import commonTextStyle from 'src/styles/commonText.style';

const CategoryItem = ({itemData: category, itemSize, m}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      key={category}
      onPress={() => {
        navigation.navigate('Category', {category});
      }}
      style={[
        commonListItemStyle.itemContainer(itemSize, m),
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <Text style={commonTextStyle.textL}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CategoryItem;
