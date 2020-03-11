import React from 'react';
import {View, Text} from 'react-native';
import {List, Colors} from 'react-native-paper';

const DisplayList = (props) => {
    const {name} = props
    return(
        <List.Section>
            <List.Subheader>{name}</List.Subheader>

        </List.Section>
    )
}

export default DisplayList;