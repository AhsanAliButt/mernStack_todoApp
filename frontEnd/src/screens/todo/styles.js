import {StyleSheet} from 'react-native';
import React from 'react';
import Colors from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  textHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
    fontFamily: 'Roboto-Medium',
    marginBottom: 20,
  },
  textInput: {
    width: '85%',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    color: Colors.LIGHTALT,
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
  iconContainer: {
    flexDirection: 'row',
    position: 'relative',
    transition: 'all 0.5s ease',
  },
});

export default styles;
