import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from './Colors';
import styles from './styles';
import TodoItem from '../../components/todoItem/TodoItem';
import axios from 'axios';

const TodoScreen = () => {
  // console.log(Colors);
  const [data, setData] = useState([]);
  const [todos, setTodos] = useState('');
  console.log('DATA', todos);
  // console.log(data);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    axios
      .get('http://192.168.100.21:5001/todos')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log('ERROR', err);
      });
  };
  // render Item
  const renderTodo = ({item}) => {
    return <TodoItem item={item} />;
  };

  // Add Todo in MongoDB
  // const addTodo = () => {
  //   axios
  //     .post('http://192.168.100.21:5001/todos/new').
  //     .then(res => {
  //       console.log(res)
  //       setTodos(
  //         [...todos, data]
  //       )
  //       console.log('RESPONSE', res);
  //       fetchData();
  //     })
  //     .catch(err => {
  //       console.log('ERROR', err);
  //     });
  // };

  const addTodo = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      title: todos,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://192.168.100.21:5001/todos/new', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  // const addTodo = async () => {
  //   const data = await fetch('http://192.168.100.21:5001/todos/new', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       title: {todos},
  //       completed: false,
  //     }),
  //   }).then(res => res.json());

  //   setTodos([...todos, data]);
  // };

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
        <FlatList data={data} renderItem={renderTodo} />
        {/* <Todo /> */}
      </View>
    </SafeAreaView>
  );
};

export default TodoScreen;
