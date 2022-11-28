import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

const List = ({data, numColumns = 1, RenderItem}) => {
  const [listWidth, setListWidth] = useState(0);
  const marginValue = 0.025;

  return (
    <FlatList
      onLayout={e => {
        const {width} = e.nativeEvent.layout;
        setListWidth(width);
      }}
      data={data}
      numColumns={numColumns}
      renderItem={({item}) => {
        return (
          <RenderItem
            itemData={item}
            itemSize={Math.floor(
              listWidth / numColumns - listWidth * marginValue - 10,
            )}
            m={Math.floor(listWidth * marginValue)}
          />
        );
      }}
    />
  );
};

export default List;
