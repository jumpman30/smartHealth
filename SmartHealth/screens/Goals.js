import React, {useState} from 'react';
import { Button,View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';
import ImgGoal from '../images/goal2.jpg'
import { useAnimatedGestureHandler } from 'react-native-reanimated';



const Goals = ({navigation}) => {

  navigation.getParent().setOptions({
    headerShown: false,
  })

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };


  return (
    <ImageBackground source={ImgGoal} resizeMode="cover" style={styles.image}>

    <View style={styles.btnContainer}>
      <View style={styles.button}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      </View >
    </View>

      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelOp={() => setIsAddMode(false)} />
      
      <View style={styles.goalContainer}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>

    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blanchedalmond',
    width: '40%',
    borderRadius: 50,
  },
  btnContainer: {
    flex:1,
    alignItems: 'center',
    marginTop: 20,
  },
goalContainer: {
  flex: 8,
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  },
});

export default Goals;