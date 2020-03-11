import React,{useState} from 'react';
import {View, 
        Text,
        StyleSheet
        } from 'react-native';
import {List, Colors} from 'react-native-paper';

const ListTaskLists = (props) => {
    const {name, lists} = props

    const renderUsersLists = () => {
       return lists.map((list) => {
           console.log(list)
            return (
                <List.Item
                    key={list.id}
                    title={list.name}
                    style={styles.listItem}
                    onPress={() => displaySelectedList(list.id)}
                    left={props => <List.Icon icon="delete"></List.Icon>}
                    right={props => <List.Icon icon="delete" color={Colors.red900}></List.Icon>}
                />  
            )
        })
    }

    const displaySelectedList = (uuid) => {
        const listToDisplay = lists.filter((list) => list.uuid === uuid).tasks;
        setListData({displayList: true, listToDisplay});
        console.log(listToDisplay);
    }

    const [listData, setListData] = useState({displayList: false, listToDisplay: []})

    return(
        <List.Section>
            <List.Subheader>{name}'s ToDo List</List.Subheader>
            {renderUsersLists()}
        </List.Section>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    listItem: {
        width: 300
    }
})

export default ListTaskLists;