import React, {useState, useEffect}  from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QuizAnswers from '../components/QuizAnswers';

const QuizScreen2 = ({route,navigation}) => {

  const [result, setResult] = useState(0);
  const [results, setResults] = useState([]);
  
  
  const setAnswer = (option) => {
    setResult(option);
    setResults(route.params.results);

}

const saveAnswer = () => {

  results[2] = result;
  console.log(results);

}

    return(
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>
                2. Not being able to stop or control worrying
                </Text>
            </View>

            <QuizAnswers onSetAnswer={setAnswer} />


            <View style={styles.btnContainer}>
            <TouchableOpacity 
            style={styles.btn}
            onPress={() => navigation.navigate('ResultScreen')}>
                    <Text style={styles.btnTxt}>Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.btn}
             onPress={saveAnswer} >
                    <Text style={styles.btnTxt}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btn}
            onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.btnTxt}>End</Text>
            </TouchableOpacity>

            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
  
    answerContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start', 
        marginVertical: 16,
        flex: 1,
      },
      optionBtn:{
          paddingVertical: 12,
          marginVertical: 6,
          backgroundColor: '#34A0A4',
          paddingHorizontal: 12,
          borderRadius: 12,
          width: '100%',
      },
      container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
      },
      questionContainer: {
        marginVertical: 16,
      },
      banner: {
        height: 300,
        width: 300,
      },
      btnContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
          paddingVertical: 16,
     },
      bannerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      btn: {
        backgroundColor: '#1A759F',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 50,
      },
      btnTxt: {
        fontSize: 24,
        fontWeight: '500',
        color: 'white',
      },
      question: {
          fontSize: 28,
        },
        option: {
            fontSize: 20,
            fontWeight: '700',
            color: 'white',
        }
    });

export default QuizScreen2;