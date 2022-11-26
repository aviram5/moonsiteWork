import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CategoryItem = ({itemData: category, itemSize, m}) => {
  const navigation = useNavigation();
  console.log('itemSize: ', itemSize);
  console.log('m: ', m);
  return (
    <TouchableOpacity
      key={category}
      onPress={() => {
        navigation.navigate('Category', {category});
      }}
      style={{
        backgroundColor: '#2d2d2d',
        width: itemSize,
        height: itemSize,
        margin: m,
        borderWidth: 1,
        borderColor: 'rgba(100,100,100,100)',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Text style={{fontSize: 24, fontWeight: '800', color: '#7e7e7e'}}>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CategoryItem;
