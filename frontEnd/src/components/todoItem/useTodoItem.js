import {View, Text} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const useTodoItem = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [data, setData] = useState([]);
  const [todos, setTodos] = useState('');

  // console.log('DATA', data);

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

  const showIcons = () => {
    return setShowIcon(!showIcon);
  };

  const addTodo = async () => {
    const data = await fetch('http://192.168.100.21:5001/todos/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: todos,
        completed: false,
      }),
    }).then(res => res.json());

    setTodos([...todos, data]);
    fetchData();
  };
  const updateTodo = () => {
    return console.log('updateTodo');
  };

  const deleteTodo = async item => {
    const id = item._id;
    // console.log('id', id);
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow',
    };

    const data = fetch(
      'http://192.168.100.21:5001/todos/delete/' + id,
      requestOptions,
    ).then(setTodos([...todos, data]), fetchData());
  };

  const completeTodo = item => {
    const id = item._id;
    const completed = item.completed;
    // console.log('COMPLETED', completed);
    var requestOptions = {
      method: 'PUT',
      redirect: 'follow',
    };

    fetch('http://192.168.100.21:5001/todos/complete/' + id, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    fetchData();
  };

  return {
    updateTodo,
    deleteTodo,
    completeTodo,
    showIcons,
    showIcon,
    data,
    setData,
    fetchData,
    todos,
    setTodos,
    addTodo,
  };
};

export default useTodoItem;
