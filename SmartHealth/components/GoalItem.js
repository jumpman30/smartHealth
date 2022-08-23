import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();

const GoalItem = props => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckBox
      style={styles.item}
      title={props.title}
      checked={checked}
      checkedColor="blue"
      onPress={() => setChecked(!checked)}
      onLongPress={() => props.onDelete(props.id)}
      containerStyle={styles.item}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 50,
    backgroundColor: 'khaki',
    width: '90%',
  },
});

export default GoalItem;
