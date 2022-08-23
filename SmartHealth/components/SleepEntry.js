import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconItem from './IconItem';

Icon.loadFont();

const SleepEntry = props => {
  const handleSleep = value => {
    props.handleChange(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>

      <View style={styles.iconsContainer}>
        <IconItem
          iconName="power-sleep"
          description="Good"
          onChange={handleSleep}
          stat={'Good'}
        />
        <IconItem
          iconName="chat-sleep-outline"
          description="Medium"
          onChange={handleSleep}
          stat={'Medium'}
        />
        <IconItem
          iconName="sleep-off"
          description="Bad"
          onChange={handleSleep}
          stat={'Bad'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  container: {
    backgroundColor: 'grey',
    fexDirection: 'column',
    marginTop: 10,
    borderRadius: 40,
    margin: 10,
    borderColor: 'black',
    padding: 20,
    borderWidth: 5,
  },
  titleContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontWeight: '900',
    fontSize: 20,
  },
});

export default SleepEntry;
