import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setCurrentArticle} from 'src/features/user/userSlice';
import commonListItemStyle from './common.style';
import commonTextStyle from 'src/styles/commonText.style';
import AuthorName from 'src/components/AuthorName/AuthorName';

const ArticleItem = ({itemData, itemSize, m}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      key={itemData.key}
      onPress={() => {
        dispatch(setCurrentArticle(itemData));
        navigation.navigate('Article');
      }}
      style={[
        commonListItemStyle.itemContainer(itemSize, m),
        {
          padding: 8,
        },
      ]}>
      <Text
        style={[
          commonTextStyle.centeredText(commonTextStyle.textS),
          {
            marginVertical: 10,
          },
        ]}
        ellipsizeMode="tail"
        numberOfLines={2}>
        {itemData.title}
      </Text>
      <AuthorName authorName={itemData.author} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ArticleItem;
