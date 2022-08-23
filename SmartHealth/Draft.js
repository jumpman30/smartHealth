import React, {useState, useContext, Alert} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Systrace } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconItem from './components/IconItem';
import MoodEntry from './components/MoodEntry';
import SocialEntry from './components/SocialEntry';
import SleepEntry from './components/SleepEntry';
import HealthEntry from './components/HealthEntry';
import {useSaveMoodMutation} from './services/mood';
import {AuthContext} from './store/auth-context';
import {test} from './services/auth';


Icon.loadFont();

const Draft = ({navigation}) => {

  
  const [saveMood, result] = useSaveMoodMutation();
  const [mood, setMood] = useState("");
  const [social,setSocial] = useState("");
  const [sleep,setSleep] = useState("");
  const [health, setHealth] = useState("");
  const [note, setNote] = useState("");
  const authContext = useContext(AuthContext);



  const handleMoodChange = (value) => {
    setMood(value);
  }

  const handleSocialChange = (value) => {
    setSocial(value);
  }

  const handleSleepChange = (value) => {
    setSleep(value);
  }

  const handleHealthChange = (value) => {
    setHealth(value);
  }

  const handleNoteChange = (text) => {
    setNote(text);
  }

  const handleSubmit = () => {

    const data = {social: social, health: health, mood: mood, sleep: sleep, note: note, email: authContext.email}
    console.log(data);
    saveMood(data);
    navigation.goBack();
  }

  async function handlePress(){

    try{

         const token = authContext.token;
         const response = await test(token);
         console.log(response.auth);
         //console.log(response.message);

  
      } catch(error){
        
        Alert.alert('Network failure');

      }
    }


    return(
      <ScrollView>
      <View>
        
        <MoodEntry title="Mood" handleChange={handleMoodChange}></MoodEntry>
        <SocialEntry title="Social" handleChange={handleSocialChange}></SocialEntry>
        <SleepEntry title="Sleep"  handleChange={handleSleepChange}></SleepEntry>
        <HealthEntry title="Health" handleChange={handleHealthChange}></HealthEntry>

        <View style={styles.noteContainer}>
            <Icon name='message-bulleted' size={40}></Icon>
            <Text style={styles.title}>Note</Text>
        </View>

        <TextInput style={styles.input}
          placeholder='Add Note'
          multiline = {true}
          onChangeText={text => handleNoteChange(text)}
          value={note}
        >
        </TextInput>

        <TouchableOpacity 
          style={styles.userBtn}
          onPress={handleSubmit}
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
    height: 140,
    margin: 5,
    fontSize: 20,
    alignContent: 'flex-start',
   borderRadius: 20,
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
    textAlign: 'center',
  },
    });


export default Draft;