import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
  const [listWidth, setListWidth] = useState(0);
  const navigation = useNavigation();
  return (
    <ScrollView
      onLayout={e => {
        const {width} = e.nativeEvent.layout;
        setListWidth(width);
      }}
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {categories.map(category => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Category', {category});
            }}
            key={category}
            style={{
              width: '45%',
              margin: '2.5%',
              borderWidth: 1,
              height: listWidth / 2,
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 24, fontWeight: '800'}}>{category}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '50%',
    borderWidth: 1,
    height: 200,
    flexGrow: 1,
  },
});

export default CategoryList;
