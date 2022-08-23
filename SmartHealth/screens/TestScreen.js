import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, Systrace } from 'react-native';
import ScoreInfo from '../components/ScoreInfo';
import {AuthContext} from '../store/auth-context';



const TestScreen = ({navigation,route}) => {

  const [isAddMode, setIsAddMode] = useState(false);
  const authContext = useContext(AuthContext);
  console.log("email: " + route.params.email);



    return(
             
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>
            Overall Score: {route.params.sum} 
          </Text>

        <View style={styles.button}>
          <Button title="More about your score" 
          onPress={() => setIsAddMode(true)} 
          />
        </View >  


        <ScoreInfo visible={isAddMode} 
        OnCancelOp={() => setIsAddMode(false)} 
        stress={route.params.sum_stress}
        anxiety={route.params.sum_anxiety}
        depression={route.params.sum_depression}
        />

        <View style={styles.button}>
          <Button title="Accept" 
          onPress={() => authContext.authenticate(route.params.token, route.params.email)} 
          />
        </View > 

        </View>
        
    )
}


const styles =  StyleSheet.create({
  scoreContainer: {
    backgroundColor: "cornflowerblue",
    borderRadius: 50,
    margin: 30,
    alignItems: 'center',
  },
  score: {
      padding: 10,
      fontWeight: '700'
  }
    });


export default TestScreen;