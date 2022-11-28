import React from 'react';
import {Text} from 'react-native';
import commonTextStyle from 'src/styles/commonText.style';

const AuthorName = ({authorName}) => {
  return (
    <Text
      style={commonTextStyle.centeredText(commonTextStyle.textXS)}
      ellipsizeMode="tail"
      numberOfLines={2}>
      {authorName ? `By ${authorName}` : 'No Author Available'}
    </Text>
  );
};

export default AuthorName;
