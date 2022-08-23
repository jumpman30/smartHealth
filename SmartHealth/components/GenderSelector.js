import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const GenderSelector = (props) => {

  const [userOption, setUserOption] = useState('');

  const genders = [
    {value: 'M'}, 
    {value: 'F'},
    {value: 'Prefer Not Say'}
];


  return (
    <View style={styles.container}>
    {genders.map((item) => {
      return (
        <Pressable style={item.value === userOption ? styles.selected : styles.unselected}
        onPress={() => { 
          props.onAddGender(item.value);
          setUserOption(item.value);
         }
        }>
            <Text>{item.value}</Text>
        </Pressable>
      );
    })}
    </View>
 );
};



const styles =  StyleSheet.create({
  
    container: {
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    option: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
    },
    unselected: {
      backgroundColor: 'white',
      margin: 5,
    },
    selected: {
      backgroundColor: 'grey',
      margin: 6,
      padding: 10,
      borderRadius: 10,
    },
});

export default GenderSelector;