import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import QuizTitle from '../components/QuizTitle';
import { useGetQuizByCodeQuery } from '../services/quiz';
import { useGetUserByIdQuery } from '../services/user';
import {AuthContext} from '../store/auth-context';



const QuizInitScreen =  ({navigation, route}) => {

  const {data, error, isSuccess} = useGetQuizByCodeQuery('EADS');
  const quiz = [];
  const authContext = useContext(AuthContext);



  if(isSuccess){
    //console.log(data);
    data.rows.forEach(element => quiz.push(element.question));
  }


  
  const handleStartQuestionnaire = () => {
    if(isSuccess){
      navigation.navigate('Question1', {quiz: quiz, token: route.params.token, email: route.params.email})
    }
  }


  return (


    
    <View style={styles.container}>
      
          <QuizTitle/>
         <View style={styles.bannerContainer}>
              <Image 
              source={require('../surveyImage.png')}
              style={styles.banner}
              resizeMode='contain'
               />
           </View>
           <TouchableOpacity 
           style={styles.btn}
           onPress={handleStartQuestionnaire}>
             <Text style={styles.btnText}>Start</Text>
           </TouchableOpacity>

        </View>
      
  );

}

const styles =  StyleSheet.create({
  
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#1e90ff',
      flexDirection: 'column',
      alignContent: 'space-between',
      justifyContent: 'space-between',
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
    btn: {
      width: '90%',
      backgroundColor: '#1A759F',
      padding: 20,
      borderRadius: 16,
      alignItems: 'center',
      marginBottom: 40,
    },
    btnText: {
      fontSize: 24,
      fontWeight: '600',
      color: 'white',
    }
  });

export default QuizInitScreen;