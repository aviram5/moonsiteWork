import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import commonListItemStyle from './common.style';

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
      <Text style={{fontSize: 24, fontWeight: '800', color: '#7e7e7e'}}>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CategoryItem;
