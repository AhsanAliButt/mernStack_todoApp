import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Colors from '../../screens/todo/Colors';

const Todo = () => {
  console.log('Color With me', Colors);
  return (
    <View style={styles.todoContainer}>
      <Text styles={styles.textTodo}>todo</Text>
    </View>
  );
};

export default Todo;
