import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Systrace } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconItem from './components/IconItem';
import MoodEntry from './components/MoodEntry';
import SocialEntry from './components/SocialEntry';
import SleepEntry from './components/SleepEntry';
import HealthEntry from './components/HealthEntry';


Icon.loadFont();


const DailyJournal = ({navigation}) => {


    return(
      <ScrollView>
      <View>
        
        <MoodEntry title="Mood"></MoodEntry>
        <SocialEntry title="Social"></SocialEntry>
        <SleepEntry title="Sleep"></SleepEntry>
        <HealthEntry title="Health"></HealthEntry>

        <View style={styles.noteContainer}>
            <Icon name='message-bulleted' size={40}></Icon>
            <Text style={styles.title}>Note</Text>
        </View>

        <TextInput style={styles.input} placeholder='Add Note'></TextInput>

        <TouchableOpacity 
          style={styles.userBtn}
          onPress={() => navigation.navigate('MainScreen')}
         >
           <Text style={styles.btnTxt}>
             submit
            </Text>
          </TouchableOpacity>


      </View>
      </ScrollView>
    )
}


const styles =  StyleSheet.create({
  
    container: {
      flexDirection: 'column',
      },  
    noteContainer: {
      flexDirection: 'row',
      margin: 20,
      alignContent: 'center',
      justifyContent: 'flex-start',
      alignItems: 'center',
      },
    title: {
      marginLeft: 10,
      fontSize: 25,
  },
  input: {
    backgroundColor: "grey",
    flex: 1,
    height: 70,
    margin: 5,
    fontSize: 20,
    alignContent: 'flex-start',
   borderRadius: 50,
   paddingHorizontal: 10,
  },
  userBtn: {
    backgroundColor: "dodgerblue",
    padding: 15,
    width: "45%",
    borderRadius: 60,
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center'
  },
    });


export default DailyJournal;