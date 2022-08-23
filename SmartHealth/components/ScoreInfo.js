import React, {useState}  from "react";
import {View, Text, TouchableWithoutFeedback, StyleSheet, Button, Modal} from 'react-native';


const ScoreInfo = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');
    
    const cancelHandler = () =>{
        props.OnCancelOp();
    }
    

    return (
    <Modal visible={props.visible} animationType="fade" presentationStyle="pageSheet">

        <View style={styles.scoreContainer}> 
            <Text style={styles.score}>
                Stress rate: {props.stress} {"\n"}
                Anxiety rate: {props.anxiety} {"\n"}
                Depression rate: {props.depression} {"\n"}
            </Text>
        </View>

        <Text> 
            Explanatory message about the diagnostic {"\n"}
            Full Medical Disclaimer
        </Text>

      <View style={styles.buttonContainer}>
      <Button title="Back" onPress={cancelHandler} ></Button>
      </View>
    </Modal>

  );
}; 

export default ScoreInfo;

const styles =  StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'cadetblue',
        width: '40%',
        borderRadius: 50,
        alignItems: 'center',
        alignContent: 'center',
        margin: 40,
        justifyContent: 'center'
      },
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