import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from './Colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Todo from '../../components/ultis/todo';
import axios from 'axios';

const TodoScreen = () => {
  console.log(Colors);
  const [data, setData] = useState([]);
  const [todos, setTodos] = useState('');
  const [showIcon, setShowIcon] = useState(false);
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

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
    setShowIcon(!showIcon);
  };

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
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => showIcons()}>
              <View style={styles.todoContainer}>
                <Text style={styles.textTodo}>{item.title}</Text>
                <View
                  style={[
                    styles.iconContainer,
                    {
                      display: showIcon ? 'flex' : 'none',
                    },
                  ]}>
                  <TouchableOpacity
                    style={{
                      marginRight: 5,
                    }}>
                    <Feather name="trash" size={18} color={'red'} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      marginRight: 5,
                    }}>
                    <Feather name="edit" size={18} color={Colors.LIGHT} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcons name="done" size={20} color={'green'} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        {/* <Todo /> */}
      </View>
    </SafeAreaView>
  );
};

export default TodoScreen;
