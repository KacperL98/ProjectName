import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const _StyledButton = (props) => {

  const { content, onPress, type } = props;

  const backgroundColor = type === 'primary' ? '#00bfff' : '#00bfff';
  const textColor = type === 'primary' ? '#FFFFFF' : '#FFFFFF';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}>
        <Text style={[styles.buttonText, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default _StyledButton;
