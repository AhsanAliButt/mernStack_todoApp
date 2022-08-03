import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  VirtualizedList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from './Colors';
import styles from './styles';
import TodoItem from '../../components/todoItem/TodoItem';
import axios from 'axios';
import useTodoItem from '../../components/todoItem/useTodoItem';

const TodoScreen = () => {
  const {data, setData, fetchData, todos, setTodos, addTodo} = useTodoItem();
  // console.log(Colors);
  // console.log('DATA', todos);
  // console.log(data);

  useEffect(() => {
    fetchData();
  }, [data]);

  // render Item
  const renderTodo = ({item}) => {
    return <TodoItem item={item} />;
  };

  // Add Todo in MongoDB

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.DARKALT,
      }}>
      <StatusBar
        style="auto"
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View
        style={{
          margin: 10,
          marginTop: 30,
          marginLeft: 20,
        }}>
        <Text style={styles.textHeader}> Hi Ahsan !</Text>
        <Text style={styles.text}> Welcome to TodoApp !</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your task"
            value={todos}
            onChangeText={setTodos}
          />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              justifyContent: 'center',
              borderRadius: 10,
              padding: 10,
            }}
            onPress={() => addTodo()}>
            <Text style={{color: Colors.LIGHT}}>Add</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
          }}>
          <Text style={styles.text}>Your Tasks</Text>
        </View>

        <View>
          <FlatList data={data} renderItem={renderTodo} scrollEnabled={true} />
        </View>
        {/* <Todo /> */}
      </View>
    </SafeAreaView>
  );
};

export default TodoScreen;
