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

const App = () => {

const useEffect = (() => {
  AsyncStorage.getItem('user')
    .then((response) => JSON.parse(response))
    .then((user) => {
      if(user){
        setUserData({name: user})
      }
    })


}, [])


const setUserName = (name) => {
  setUserData({name});
}

const setLists = (lists) => {

}

const createUser = (text) => {
  setUserData({newUser: text})
}

const validateUserAndRenderListCreation = () => {
  if(!user.newUser){
    Alert.alert('Error','Please enter your first name to save ToDo lists.', [{text: 'Ok'}]);
  } else {
    setUserData({displayLists: true, name: user.newUser})
  }
}

const [user, setUserData] = useState({
  name: '',
  newUser: '',
  toDoLists: [],
  displayLists: false
});

  return(
    <View
    style={styles.container}
    >
      {
        user.name ? 
        <Text>
          {`Welcome back, ${user.name}`}
        </Text> 
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
    backgroundColor: '#fff',
    // flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 100
  },
  logo: {

  },
  displayText: {

  }
})

export default App;