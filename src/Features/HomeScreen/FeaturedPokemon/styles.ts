import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  simpleContainer: { width: '100%', height: 220 },
  innerContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    paddingRight: 5,
    flexDirection: 'row',
  },
  imageContainer: {
    position: 'absolute',
    width: '100%',
    top: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  imageStyle: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
});
