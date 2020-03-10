import React,{useState, useEffect} from 'react';
import {View, 
        Text, 
        StyleSheet, 
        AsyncStorage, 
        TouchableOpacity,
        Animated} from 'react-native';

const App = () => {

const useEffect = (() => {
  AsyncStorage.getItem('user').then((response) => JSON.parse(response))

}, [])


const setUserName = (name) => {
  setUserData({name});
}

const setLists = (lists) => {

}

const [user, setUserData] = useState({
  name: '', 
  toDoLists: []
});

  return(
    <View>
      
      {
        user.name ? 
        <Text>
          {`Welcome back, ${user.name}`}
        </Text> 
        : 
        <View>
          <Text>Let's get started!</Text> 
          <TouchableOpacity>
            <Text>
             Create Your ToDo.
            </Text>
          </TouchableOpacity>
        </View>
      }
    
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    
  },
  logo: {

  },
  displayText: {

  }
})

export default App;