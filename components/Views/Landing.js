import React from 'react';
import {StyleSheet} from 'react-native'
import {Card, Headline, Title, Paragraph} from 'react-native-paper';
import PrimaryButton from '../Utility/PrimaryButton';
import PrimaryInput from '../Utility/PrimaryInput';

const Landing = (props) => {
    const {createUser, newUser, validateUserAndRenderListCreation} = props

    return(
        <Card
            style={styles.mainLandingContainer}
        >
            <Headline>ZooWho ToDo</Headline>
            <Title>Let's get started!</Title>
            <PrimaryInput
                label='First name'
                value={newUser}
                handleText={createUser}
                style={styles.input}
            />
            
            <PrimaryButton 
                label="Create Your First ToDo List."
                handlePress={validateUserAndRenderListCreation}
            />
      </Card>
    )
}

const styles = StyleSheet.create({
    mainLandingContainer: {
        width: '75%',
        justifyContent: 'center',
        // alignItems: 'flex-start',
        margin: 'auto',
        display: 'flex'
    },
    input: {
        height: 35
    }
})

export default Landing