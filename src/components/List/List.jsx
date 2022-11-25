import React from 'react';
import {FlatList} from 'react-native';

const List = ({data, numColumns = 1, RenderItem}) => {
  return (
    <FlatList
      data={data}
      numColumns={numColumns}
      keyExtractor={item => item.key}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate('Category', {category});
            // }}
            style={{
              backgroundColor: '#2d2d2d',
              width: '45%',
              margin: '2.5%',
              borderWidth: 1,
              borderColor: 'rgba(100,100,100,100)',
              height: 200,
              // height: listWidth / 2,
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
              {item.title}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '800', color: '#7e7e7e'}}>
              {item.author ? `By ${item.author}` : 'No Author'}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default List;
