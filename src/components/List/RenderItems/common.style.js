import {StyleSheet} from 'react-native';

const commonListItemStyle = StyleSheet.create({
  itemContainer: (itemSize, m) => ({
    backgroundColor: '#2d2d2d',
    width: itemSize,
    minHeight: itemSize,
    margin: m,
    borderWidth: 1,
    borderColor: 'rgba(100,100,100,100)',
    flexGrow: 1,
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowRadius: 10,
  }),
});

export default commonListItemStyle;
