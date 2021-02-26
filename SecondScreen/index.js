import React from 'react';
import {SafeAreaView, 
  View, 
  Text, 
  TouchableOpacity} from 'react-native';
import styles from './styles';

const SecondPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <View style={styles.circle}/>
      <Text style={styles.textLogo}>Logo</Text>

      <Text style={styles.textStyle}>
          Aplikacja testowa
        </Text>

        <Text style={styles.textResult}>
        Dane pobrane z pierwszego ekranu poniżej {route.params.paramKey}
        </Text>
      </View>

      <TouchableOpacity   
      onPress={() =>
            navigation.navigate('FirstPage')}
              style={styles.button}>
    <Text style={styles.buttonText}>Wróć</Text>
</TouchableOpacity>
    </SafeAreaView>
  );
};

export default SecondPage;