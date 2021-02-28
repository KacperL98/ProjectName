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
    padding: 5,
  },
  button: {
    width:300,
    backgroundColor: "deepskyblue",
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 300,
    marginLeft: 60,
},
buttonText: {
    color: "white"
}
});

export default styles;