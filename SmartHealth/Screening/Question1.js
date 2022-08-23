import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import QuizAnswers from '../components/QuizAnswers';
import {useSaveAnswersMutation} from '../services/quiz';


const Question1 = ({navigation, route}) => {

  
  const [quiz, setQuiz] = useState(route.params.quiz)
  const [result, setResult] = useState(-1);
  const [question, setQuestion] = useState(quiz[0])
  const token = route.params.token;
  const email = route.params.email;
  const count = useRef(0);
  const results = useRef(new Array());

  const [saveAnswers, res] = useSaveAnswersMutation();

  const setAnswer = option => {
    setResult(option);
}

const handleBack = () => {

     count.current--;
    setQuestion(quiz[count.current]);

}

const handleFinish = () => {
  //calculating individual scales
  var answers = [...results.current];
  let stress_scale = [0, 5, 7, 10, 11, 13, 17];
  let anxiety_scale = [1, 3, 6, 8, 14, 18, 19];
  let depression_scale = [2, 4, 9, 12, 15, 16, 20];

    var sum_stress = 0;
    var sum_anxiety = 0;
    var sum_depression = 0;
    var sum = 0;

    for (let i = 0; i < answers.length; i++) {
      sum += answers[i];
      if (stress_scale.includes(i)) {
        sum_stress += answers[i];
      } else {
        if (anxiety_scale.includes(i)) {
          sum_anxiety += answers[i];
        } else {
          if (depression_scale.includes(i)) {
            sum_depression += answers[i];
          }
        }
      }

    }

    const data = { email: email, answers: answers, quizCode: 'EADS', resultQuiz: sum};
    saveAnswers(data);
    console.log(answers);    
                                                                
    navigation.navigate('TestScreen', { sum, sum_anxiety, sum_stress, sum_depression, token, email});

  }
  

  const saveAnswer = (flag, replace) => {
    if (count.current == quiz.length - 1) {
      results.current.splice(count.current, 1, result);
      handleFinish();
    }

    if (result != -1 && flag === 0) {
      results.current.splice(count.current, 1, result);
      setResult(-1);
      count.current = count.current + 1;
      setQuestion(quiz[count.current]);
    } else if (result != -1 && flag === 1) {
      results.current.splice(count.current, 1, replace);
      count.current = count.current + 1;
      setQuestion(quiz[count.current]);
    } else {
      alert('Please choose an option');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{question}</Text>
      </View>

      <QuizAnswers
        count={count.current}
        results={results.current}
        onBack={handleBack}
        onSaveAnswer={saveAnswer}
        onSetAnswer={setAnswer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  bannerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnTxt: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
});

export default Question1;
