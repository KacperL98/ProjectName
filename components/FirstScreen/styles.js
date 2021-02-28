import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  circle: {
   width: 200,
   height: 200,
   borderRadius: 100,
   marginLeft: 60,
   backgroundColor: 'silver',
   borderColor: 'blue'
  },
  textLogo: {
    fontWeight: 'bold',
    color: 'white',
    bottom: 120,
    fontSize: 32,
    marginLeft: 120,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 32,
    marginVertical: 5,
    color: 'lightslategrey',
    marginBottom:30,
  },
  inputStyle: {
    width: 250,
    height: 44,
    padding: 10,
    backgroundColor: '#DBDBD6',
    borderRadius: 10,
    borderWidth: 1,
    margin:15,
    marginLeft:30,
  },
});

  export default styles;