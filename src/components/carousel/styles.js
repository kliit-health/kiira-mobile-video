import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pageIndicatorStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 5,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  activePageIndicatorStyle: {
    position: 'absolute',
    backgroundColor: '#ffc81f',
  },
  pageIndicatorContainerStyle: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    bottom: 10,
  },
});

export default styles;
