import {StyleSheet} from 'react-native';

const baseTextStyle = {
  fontWeight: '800',
  color: '#7e7e7e',
};

const commonTextStyle = StyleSheet.create({
  centeredText: commonTextStyle => ({
    ...commonTextStyle,
    textAlign: 'center',
  }),
  textXS: {
    ...baseTextStyle,
    fontSize: 16,
  },
  textS: {
    ...baseTextStyle,
    fontSize: 18,
  },
  textM: {
    ...baseTextStyle,
    fontSize: 22,
  },
  textL: {
    ...baseTextStyle,
    fontSize: 24,
  },
});

export default commonTextStyle;
