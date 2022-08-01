import {View, Text} from 'react-native';
import React, {useState} from 'react';

const useTodoItem = () => {
  const [showIcon, setShowIcon] = useState(false);
  const showIcons = () => {
    return setShowIcon(!showIcon);
  };
  const updateTodo = () => {
    return console.log('updateTodo');
  };
  const deleteTodo = item => {
    return console.log('deleteTodo', item);
  };
  const completeTodo = () => {
    return console.log('completeTodo');
  };

  return {updateTodo, deleteTodo, completeTodo, showIcons, showIcon};
};

export default useTodoItem;
