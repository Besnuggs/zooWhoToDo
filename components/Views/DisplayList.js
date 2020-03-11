import React from 'react';
import {View, 
        Text,
        StyleSheet} from 'react-native';
import {List, Colors} from 'react-native-paper';

const DisplayList = (props) => {
    const {listName, listId, listToDisplay} = props

const renderTasks = () => {
    listToDisplay.map((task,index) => {
        return(
            <List.Item
                key={index}
                title={task}
                style={styles.listItem}
                left={props => <List.Icon 
                    icon="book" 
                    color={Colors.green900}
                    >
                    </List.Icon>
         }
                right={props => <TouchableOpacity
                                    onPress={() => deleteTaskList(index)}
                                >
                                    <List.Icon 
                                    icon="delete" 
                                    color={Colors.red900}
                                    >
                                    </List.Icon>
                                </TouchableOpacity>
            />
                
            
        )
    })
}

    return(
        <List.Section>
            <List.Subheader>{name}</List.Subheader>

        </List.Section>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: 300
    }
})

export default DisplayList;