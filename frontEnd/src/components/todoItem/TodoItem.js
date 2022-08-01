import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';
import Colors from '../../screens/todo/Colors';
import styles from './styles';
import useTodoItem from './useTodoItem';

const TodoItem = ({item}) => {
  // console.log('COLORS in TodoItem', Colors);
  const {updateTodo, deleteTodo, completeTodo, showIcons, showIcon} =
    useTodoItem();

  // console.log('ITEM', showIcons);
  // console.log('ITEM', item);

  return (
    <TouchableOpacity onPress={showIcons}>
      <View style={styles.todoContainer}>
        <Text style={styles.textTodo}>{item.title}</Text>
        <View
          style={showIcon ? styles.onPressIconContainer : styles.iconContainer}>
          <TouchableOpacity
            style={{
              marginRight: 5,
            }}
            onPress={() => deleteTodo(item)}>
            <Feather name="trash" size={18} color={'red'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 5,
            }}
            onPress={() => updateTodo(item)}>
            <Feather name="edit" size={18} color={Colors.LIGHT} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => completeTodo(item)}>
            <MaterialIcons name="done" size={20} color={'green'} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
