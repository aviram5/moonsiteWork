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
        minHeight: itemSize,
        margin: m,
        borderWidth: 1,
        borderColor: 'rgba(100,100,100,100)',
        flexGrow: 1,
        borderRadius: 10,
        padding: 8,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          color: '#7e7e7e',
          marginVertical: 10,
          textAlign: 'center',
        }}
        ellipsizeMode="tail"
        numberOfLines={2}>
        {itemData.title}
      </Text>
      <AuthorNameWrapper authorName={itemData.author} />
    </TouchableOpacity>
  );
};

export const AuthorNameWrapper = ({authorName}) => {
  return (
    <Text
      style={{
        fontSize: 16,
        fontWeight: '800',
        color: '#7e7e7e',
        textAlign: 'center',
      }}>
      {authorName ? `By ${authorName}` : 'No Author Available'}
    </Text>
  );
};

const styles = StyleSheet.create({});

export default ArticleItem;
