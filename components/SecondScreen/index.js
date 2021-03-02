import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styles from './styles';
import _StyledButton from '../StyledButton';
import _textResult from '../TextResults';

const SecondPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.circle} />
          <Text style={styles.textLogo}>Logo</Text>

          <Text style={styles.textStyle}>Aplikacja testowa</Text>

          <_textResult
            content={route.params.paramKey}
            txtPreviousV={'Dane pobrane z pierwszego ekranu'}
          />
        </View>
        <_StyledButton
          type="secondary"
          content={'Wróć'}
          onPress={() => navigation.navigate('FirstPage')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecondPage;
