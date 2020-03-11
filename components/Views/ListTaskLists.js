import React,{useState, useEffect} from 'react';
import {
        View, 
        Text,
        StyleSheet,
        TouchableOpacity
        } from 'react-native';
import {List, Colors} from 'react-native-paper';
import DisplayList from './DisplayList';

const ListTaskLists = (props) => {
    const {name, lists, deleteTaskList} = props;

    useEffect(() => {
        setListData({...listData, listToDisplay: lists})
    }, [lists])

    const renderUsersLists = () => {
       return lists.map((list) => {
            return (
                <List.Item
                    key={list.id}
                    title={list.name}
                    style={styles.listItem}
                    onPress={() => displaySelectedList(list.id)}
                    left={props => <List.Icon 
                                    icon="book" 
                                    color={Colors.green900}
                                    >
                                    </List.Icon>
                         }
                    right={props => <TouchableOpacity
                                        onPress={() => deleteTaskList(list.id)}
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
    

    const displaySelectedList = (id) => {
        const listToDisplay = lists.filter((list) => list.id === id)[0],
            listName = listToDisplay.name;
        setListData({...listData, displayList: true, listToDisplay: listToDisplay.tasks, listName});
    }

    const deleteTaskFromList = (id) => {
        const listToDisplay
    }

    const [listData, setListData] = useState({displayList: false, listToDisplay: [], listName})

    return(
        <View>
        {displayList ? 
            <DisplayList 
                listToDisplay={listData.listToDisplay}
                listName={listData.listName}
            />
            :
            <List.Section>
                <List.Subheader>{name}'s ToDo List</List.Subheader>
                {renderUsersLists()}
            </List.Section>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    listItem: {
        width: 300,
        borderColor: 'black'
    }
})

export default ListTaskLists;