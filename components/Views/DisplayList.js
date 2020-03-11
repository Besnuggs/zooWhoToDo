import React, {useState, useEffect} from 'react';
import {View, 
        Text,
        StyleSheet,
        TouchableOpacity
        } from 'react-native';
import {List, Colors} from 'react-native-paper';

const DisplayList = (props) => {
    const {listName, listId, listToDisplay, deleteTaskFromList, back} = props;


useEffect(() => {
    console.log(listToDisplay)
}, [listToDisplay])

const renderTasks = () => {
    return listToDisplay.map((task,index) => {
        return(
            <List.Item
                key={index}
                title={task}
                style={styles.listItem}
                left={props => <List.Icon 
                    icon="pencil" 
                    color={Colors.green900}
                    >
                    </List.Icon>
                }
                right={props => <TouchableOpacity
                                    onPress={() => deleteTaskFromList(listId, index)}
                                >
                                    <List.Icon 
                                    icon="delete" 
                                    color={Colors.red900}
                                    >
                                    </List.Icon>
                                </TouchableOpacity>
                       }
            />
                
            
        )
    })
}

    return(
        <List.Section>
            <TouchableOpacity
                onPress={back}
            >
                <Text>
                Back
                </Text>
            </TouchableOpacity>
            <List.Subheader>{listName}</List.Subheader>
            {renderTasks()}
        </List.Section>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: 300
    }
})

export default DisplayList;