import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const _textResult = (props) => {

    const { content, txtPreviousV } = props;
    return (
      
      <View style={styles.container}>
              <Text style={styles.textResult}>
          {txtPreviousV} {content}
          </Text>
      </View>
    );
  };
  export default _textResult;