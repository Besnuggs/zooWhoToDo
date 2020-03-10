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
            <Card.Title
                style={styles.title}
                title="ZooWho ToDo App" 
                subtitle="Let's get started!"
            >
            </Card.Title>

            <Card.Cover source={{ uri: 'https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }} />

            <Card.Actions
                style={styles.actions}
            >
                <PrimaryInput
                    label='Enter Your First Name.'
                    value={newUser}
                    handleText={createUser}
                    style={styles.input}
                />
                
                <PrimaryButton 
                    label="Create Your First ToDo List."
                    handlePress={validateUserAndRenderListCreation}
                    
                />
             </Card.Actions>
      </Card>
    )
}

const styles = StyleSheet.create({
    mainLandingContainer: {
        width: '85%',
        justifyContent: 'center',
        margin: 'auto',
        display: 'flex',
        height: '90%',
        backgroundColor: '#000'
    },
    actions: {
        display: 'flex',
        alignItems: 'center'
    }
    // button: {
    //     borderColor: '#000'
    // }
})

export default Landing