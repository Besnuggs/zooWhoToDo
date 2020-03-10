import React,{useState} from 'react';
import {View, 
        Text,
        StyleSheet
        } from 'react-native';
import {List} from 'react-native-paper';

const ListTaskLists = (props) => {
    const {name, lists} = props
    console.log(lists, props, 'list task results')

    const renderUsersLists = () => {
        console.log(lists)
        lists.map((list) => {
            <List.Item
                onPress={() => displaySelectedList(list.uuid)}
            >
                {list.name}
            </List.Item>
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
            {renderUsersLists}
        </List.Section>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default ListTaskLists;