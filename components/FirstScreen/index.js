import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput, KeyboardAvoidingView, ScrollView
  
} from 'react-native';
import styles from './styles';
import _StyledButton from '../StyledButton'

const FirstPage = ({navigation}) => {
  const [userName, setUserName] = useState('');

  return (
    <KeyboardAvoidingView
    style={{flex:1}}
  >
<SafeAreaView style={styles.container} >
      <ScrollView >
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

        <_StyledButton
          type="primary"
          content={"Przejdź dalej"}
          onPress={() =>
            navigation.navigate('SecondPage', {
              paramKey: userName})}
        />
      </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default FirstPage;