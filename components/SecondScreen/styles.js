import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'silver',
    borderColor: 'blue'
   },
   textLogo: {
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 100,
    fontSize: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
   textStyle: {
    textAlign: 'center',
    fontSize: 32,
    color: 'lightslategrey',
    marginTop:40,
  },
});

export default styles;