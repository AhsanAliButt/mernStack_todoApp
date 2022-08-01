import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../screens/todo/Colors';

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    position: 'relative',
    transition: '0.5s',
    right: -90,
  },
  onPressIconContainer: {
    flexDirection: 'row',
    position: 'relative',
    transition: '0.5s',
    right: 0,
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    backgroundColor: Colors.DARK,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  textTodo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.LIGHT,
    marginLeft: 10,
  },
});

export default styles;
