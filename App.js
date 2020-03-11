import React,{useState, useEffect} from 'react';
import {View, 
        Text, 
        StyleSheet, 
        AsyncStorage, 
        TouchableOpacity,
        Animated,
        Alert} from 'react-native';
import {Card} from 'react-native-paper';
import Landing from './components/Views/Landing';
import PrimaryInput from './components/Utility/PrimaryInput';
import PrimaryButton from './components/Utility/PrimaryButton';
import ListTaskLists from './components/Views/ListTaskLists';
import { uuid } from 'uuidv4'

const App = () => {
  const date = new Date();
  // const testList = [
  //   {
  //   name: 'firstList',
  //   tasks: ['this is a task1',
  //   'okay',
  //   'okay1',
  //   'okay2',
  //   'okay3',
  //   'okay4',
  //   ],
  //   id: 1,
  //   dateCreated: date.toDateString()
  //   },
  //   {
  //   name: 'secondList',
  //   tasks: ['this is a task2',
  //   'okay',
  //   'okay1',
  //   'okay2',
  //   'okay3',
  //   'okay4',
  //   ],
  //   id: 2,
  //   dateCreated: date.toDateString()
  //   },
  //   {
  //   name: 'thirdList',
  //   tasks: ['this is a task3',
  //   'okay',
  //   'okay1',
  //   'okay2',
  //   'okay3',
  //   'okay4',
  //   ],
  //   id: 3,
  //   dateCreated: date.toDateString()
  //   }
  // ]


  const useEffect = (() => {
    AsyncStorage.getItem('user')
      .then((response) => JSON.parse(response))
      .then((username) => {
        if(username){
          setUserData({...user, name: username, displayLists: true})
        }
      })


  }, [])


  const setUserName = (name) => {
    setUserData({name});
  }

  async function updateAsyncLists(){

  }

  const createUser = (text) => {
    setUserData({newUser: text})
  }

  const validateUserAndRenderListCreation = () => {
    if(!user.newUser){
      Alert.alert('Error','Please enter your first name to save ToDo lists.', [{text: 'Ok'}]);
    } else {
      setUserData({...user, displayLists: true, name: user.newUser})
    }
  }

  const deleteTaskList = (id) => {
    const toDoLists = user.toDoLists.filter((taskList) => taskList.id !== id);
    setUserData({...user, toDoLists: toDoLists});
    //Need to update AsyncStorage
}

const deleteTaskFromList = (id, taskId) => {
  //index to taskId as that's what is serving as key in displaylist map.
  const toDoLists = user.toDoLists.map((list) => {
    console.log('LISSSTS', list)
    if(list.id === id){
      list.tasks = list.tasks.filter((task, index) => index !== taskId);
    }
    console.log('list:', list)
    return list;
  })
  setUserData({...user, toDoLists: toDoLists})
  //Need to update AsyncStorage
}

  const [user, setUserData] = useState({
    name: '',
    newUser: '',
    toDoLists: [],
    displayLists: false
  });

  // console.log(user.toDoLists)
  return(
    <View
    style={styles.container}
    >
      {
        user.displayLists ? 
          <ListTaskLists
            lists={user.toDoLists}
            name={user.name}
            deleteTaskList={deleteTaskList}
            deleteTaskFromList={deleteTaskFromList}
          />
        : 
        <Landing 
          createUser={createUser}
          newUser={user.newUser}
          validateUserAndRenderListCreation={validateUserAndRenderListCreation}

        /> 
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 1,
    height: '100%',
    width: '100%'
  }
})

export default App;