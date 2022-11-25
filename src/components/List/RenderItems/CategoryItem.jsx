import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryItem = props => {
  console.log(props);
  return (
    <TouchableOpacity
      key={props.key}
      onPress={() => {
        navigation.navigate('Category', {category});
      }}
      style={{
        backgroundColor: '#2d2d2d',
        width: '45%',
        margin: '2.5%',
        borderWidth: 1,
        borderColor: 'rgba(100,100,100,100)',
        // height: listWidth / 2,
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

export default CategoryItem;
