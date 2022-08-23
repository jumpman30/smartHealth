import React, {useState}  from "react";
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';


const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
      };
    
      const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
      };
    
      const cancelOpHandler = () => {
        props.onCancelOp();
        setEnteredGoal('');
      }

    return (

        <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelOpHandler} />
          </View>
        </View>

      </View>
    </Modal>
  );
}; 

export default GoalInput;

const styles =  StyleSheet.create({
      inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    
  },
  button: {
    backgroundColor: 'blanchedalmond',
    width: '40%',
    borderRadius: 50,
  },
 });