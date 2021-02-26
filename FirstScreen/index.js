import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput, TouchableOpacity
} from 'react-native';
import styles from './styles';

const FirstPage = ({navigation}) => {
  const [userName, setUserName] = useState('AboutReact');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
       <View style={styles.circle}/>
       <Text style={styles.textLogo}>Logo</Text>

        <Text style={styles.textStyle}>
          Aplikacja testowa
        </Text>

        <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Podaj dane...'}
          style={styles.inputStyle}
        />

        <TouchableOpacity 
          onPress={() =>
            navigation.navigate('SecondPage', {
              paramKey: userName})}
              style={styles.button}>
    <Text style={styles.buttonText}>Przejdź dalej</Text>
</TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default FirstPage;