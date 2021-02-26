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
    marginVertical: 10,
    color: 'lightslategrey',
    padding: 20,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
    borderRadius: 10,
    borderWidth: 1,
  },
  button: {
    width:"100%",
    backgroundColor: "deepskyblue",
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20
},
buttonText: {
    color: "white"
}
});

  export default styles;