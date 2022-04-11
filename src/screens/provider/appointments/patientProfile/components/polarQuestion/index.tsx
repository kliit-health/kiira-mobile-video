import React from 'react';
import { TextInput, View } from 'react-native';
import PolarButton from '~/components/polarButton';
import styles from './style';
 

const PolarQuestion = ({ progress }) => (
    <View>
        <View style={styles.buttonContainer}>
            <PolarButton
                variant="yes"
                selected={progress.yes}
                onPress={() => toggleSelection('yes')}
                styles={{}}  
            />
            <PolarButton
                variant="no"
                selected={progress.no}
                onPress={() => toggleSelection('no')}
                styles={{}}  
            />
        </View>
        {progress.textPrompt ? (
            <TextInput
                style={styles.input}
                multiline
                placeholder={progress.textPrompt}
                placeholderTextColor="black"
            />
        ) : (
            <View style={styles.blank} />
        )}
    </View>
);

export default PolarQuestion;
