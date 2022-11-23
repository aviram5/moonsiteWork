import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const categories = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
];

const CategoryList = () => {
  return (
    <FlatList
      data={categories}
      renderItem={category => {
        return (
          <TouchableOpacity key={category} style={styles.item}>
            <Text>{category}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {},
});

export default CategoryList;
