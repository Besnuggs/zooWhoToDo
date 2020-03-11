import React, {useState, useEffect} from 'react';
import {
        View, 
        Text,
        StyleSheet,
        TouchableOpacity
        } from 'react-native';
import {List, Colors} from 'react-native-paper';
import DisplayList from './DisplayList';
import PrimaryButton from '../Utility/PrimaryButton'
import CreateOrEditList from './CreateList';

const ListTaskLists = (props) => {
    const {name, lists, deleteTaskList, deleteTaskFromList} = props;

    useEffect(() => {  
        if(listData.displayList){
            const listToDisplay = lists.filter((list) => list.id === listData.listId)[0].tasks
            setListData({...listData, listToDisplay})
        }   
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
    
    const back = () => {
        setListData({...listData, displayList: false, listToDisplay: [], listName: '', listId: null})
    }

    const displaySelectedList = (id) => {
        const listToDisplay = lists.filter((list) => list.id === id)[0],
            listName = listToDisplay.name,
            listId = listToDisplay.id;
        setListData({...listData, displayList: true, listToDisplay: listToDisplay.tasks, listName, listId});
    }

    const createList = () => {
        
    }

    const [listData, setListData] = useState({displayList: false, listToDisplay: [], listName: '', listId: null, creatingOrEditingList: false})

    return(
        <View>
        {listData.displayList ? 
            <DisplayList 
                listToDisplay={listData.listToDisplay}
                listName={listData.listName}
                listId={listData.listId}
                deleteTaskFromList={deleteTaskFromList}
                back={back}
            />
            :
            <List.Section>
                {
                listData.creatingList ?
                    <CreateOrEditList 
                        
                    />
                :
                    <List.Subheader>{name}'s ToDo List</List.Subheader>
                    listData.listToDisplay.length === 0 ?
                        <PrimaryButton
                            handlePress={createList}
                            label="Create a ToDo List!"
                        />
                    : 
                        renderUsersLists()
                
                }
                
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