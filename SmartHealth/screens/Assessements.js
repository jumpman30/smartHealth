import React, {useState, useEffect, useRef}  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import {addResult, selectDesignation, selectResult, setResults} from '../store/assessementSlice';
import {ScreeningQuestions} from '../Constants';


const Assessements = (props) => {

    const textAnswers = ['Not at all', 'Several Days', 'More than half the days', 'Nearly Every Day']

    const items = (questions, results) => {

        let data = [];
        for(let i=0; i<questions.length; i++){
            data=[...data, {question: questions[i], answer: results[i] }]
        }
    
     return data;
    }

    const renderDataItem = (itemData) => {

        const textAnswer = textAnswers[itemData.item.answer];
        return(
            <View style={styles.dataContainer}>
            <View>
                <Text>{itemData.item.question}</Text>
                <Text>{textAnswer}</Text>
            </View>
            </View>
        )
    }
    

    const title = useSelector(selectDesignation);
    const result = useSelector(selectResult);
    const quiz = ScreeningQuestions;
    const data = items(quiz, result);

    console.log(data);
   

    return(
        
        <FlatList
         data={data} 
         renderItem={renderDataItem}
         />
    );
}

const styles =  StyleSheet.create({
        dataContainer: {
            margin: 10,
        }
    });

export default Assessements;