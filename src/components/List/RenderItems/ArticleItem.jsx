import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ArticleItem = ({itemData, itemSize, m}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={itemData.key}
      onPress={() => {
        navigation.navigate('Article', {article: itemData});
      }}
      style={{
        backgroundColor: '#2d2d2d',
        width: itemSize,
        margin: m,
        borderWidth: 1,
        borderColor: 'rgba(100,100,100,100)',
        height: itemSize,
        flexGrow: 1,
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          color: '#7e7e7e',
          marginVertical: 4,
        }}>
        {itemData.title}
      </Text>
      <Text style={{fontSize: 14, fontWeight: '800', color: '#7e7e7e'}}>
        {itemData.author ? `By ${itemData.author}` : 'No Author'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ArticleItem;
