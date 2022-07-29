import {StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../screens/todo/Colors';

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    backgroundColor: Colors.DARK,
    borderRadius: 10,
    marginBottom: 10,
  },
  textTodo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.LIGHT,
    marginLeft: 10,
  },
});

export default styles;
