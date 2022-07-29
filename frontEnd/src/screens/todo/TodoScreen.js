import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  useColorScheme,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Colors from './Colors';
import styles from './styles';
import Todo from '../../components/ultis/todo';
import axios from 'axios';

const TodoScreen = () => {
  console.log(Colors);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    axios.get(url).then(res => {
      console.log('res', res);
    });
  }, []);
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
          <TextInput style={styles.textInput} placeholder="Enter your task" />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              justifyContent: 'center',
              borderRadius: 10,
              padding: 10,
            }}>
            <Text style={{color: Colors.LIGHT}}>Add</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
          }}>
          <Text style={styles.text}>Your Tasks</Text>
        </View>
        <View style={styles.todoContainer}>
          <Text style={styles.textTodo}>Task 1</Text>
        </View>
        <Todo />
      </View>
    </SafeAreaView>
  );
};

export default TodoScreen;
