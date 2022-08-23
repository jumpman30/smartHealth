import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const QuizTitle = () => {

    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>
                Screening
            </Text>
        </View>
    );
}

const Styles = StyleSheet.create({

    title:{
        fontSize: 36,
        fontWeight: '600',
    },
    container: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default QuizTitle;