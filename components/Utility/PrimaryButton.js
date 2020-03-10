import React from 'react';
import { Button } from 'react-native-paper';

const PrimaryButton = (props) => {
    const {handlePress, label} = props;

    return(
        <Button
            raised
            onPress={handlePress}
        >
            {label}
        </Button>
    )
}

export default PrimaryButton