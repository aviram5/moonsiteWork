import React, {useEffect, useState, useId} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useFetchArticlesQuery} from 'src/features/articles/articlesApiSlice';
import {randomUUID} from 'crypto';
import CategoryItem from 'src/components/List/RenderItems/CategoryItem';

const Category = () => {
  const [listWidth, setListWidth] = useState(0);
  const {
    params: {category},
  } = useRoute();
  const {data, isLoading, isError} = useFetchArticlesQuery(category);
  useEffect(() => {
    console.log('dada', data);
  });

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={'#000'} />
      </View>
    );
  }
  if (isError) {
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>
        An error has aqure while try to fetch data please try again later
      </Text>
    </View>;
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        // contentContainerStyle={{flex: 1}}
        // columnWrapperStyle={{flex: 1}}
        data={data}
        numColumns={2}
        renderItem={({item}) => <CategoryItem {...item} />}
        // renderItem={({item}) => {
        //   return (
        //     <TouchableOpacity
        //       // onPress={() => {
        //       //   navigation.navigate('Category', {category});
        //       // }}
        //       style={{
        //         backgroundColor: '#2d2d2d',
        //         width: '45%',
        //         margin: '2.5%',
        //         borderWidth: 1,
        //         borderColor: 'rgba(100,100,100,100)',
        //         height: 200,
        //         // height: listWidth / 2,
        //         flexGrow: 1,
        //         borderRadius: 10,
        //       }}>
        //       <Text
        //         style={{
        //           fontSize: 18,
        //           fontWeight: '800',
        //           color: '#7e7e7e',
        //           marginVertical: 4,
        //         }}>
        //         {item.title}
        //       </Text>
        //       <Text style={{fontSize: 14, fontWeight: '800', color: '#7e7e7e'}}>
        //         {item.author ? `By ${item.author}` : 'No Author'}
        //       </Text>
        //     </TouchableOpacity>
        //   );
        // }}
      />
      {/* <ScrollView
        onLayout={e => {
          const {width} = e.nativeEvent.layout;
          setListWidth(width);
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {data.data.map(articel => {
          return (
            <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate('Category', {category});
              // }}
              key={`${Math.random() * Math.random()}`}
              style={{
                backgroundColor: '#2d2d2d',
                width: '45%',
                margin: '2.5%',
                borderWidth: 1,
                borderColor: 'rgba(100,100,100,100)',
                height: listWidth / 2,
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 24, fontWeight: '800', color: '#7e7e7e'}}>
                {articel.source}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

export default Category;
