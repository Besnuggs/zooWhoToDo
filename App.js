import React,{useState, useEffect} from 'react';
import {View, 
        Text, 
        StyleSheet, 
        AsyncStorage, 
        TouchableOpacity,
        Animated,
        Alert} from 'react-native';
import PrimaryInput from './components/Utility/PrimaryInput';
import PrimaryButton from './components/Utility/PrimaryButton';

const App = () => {

const useEffect = (() => {
  AsyncStorage.getItem('user').then((response) => JSON.parse(response))

}, [])


const setUserName = (name) => {
  setUserData({name});
}

const setLists = (lists) => {

}

const createUser = (text) => {
  setUserData({newUser: text})
}

const validateUserAndRouteToListCreation = () => {
  if(!user.newUser){
    Alert.alert('Error','Please enter your first name to save ToDo lists.', [{text: 'Ok'}]);
  } else {

  }
}

const [user, setUserData] = useState({
  name: '',
  newUser: '',
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
          <PrimaryInput
            label='First name'
            value={user.newUser}
            handleText={createUser}
            name='newUser'
          />
         
            <PrimaryButton 
              label="Create Your First ToDo List."
              handlePress={validateUserAndRouteToListCreation}
            />
          
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