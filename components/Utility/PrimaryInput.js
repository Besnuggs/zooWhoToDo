import React from 'react';
import {TextInput} from 'react-native-paper';

const PrimaryInput = (props) => {
    const {value, label, handleText} = props
    return(
        <TextInput
            onChangeText={handleText}
            // value={value}
            label={label}
        />
    )
}

export default PrimaryInput;