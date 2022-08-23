import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconItem from './IconItem';


Icon.loadFont();


const Draft = (props) => {

  const handleMood = (value) =>{
    props.handleChange(value);
  }

    return(
      
      <View style={styles.container} >
        
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
        </View>

        <View style={styles.iconsContainer}>
          <IconItem iconName="emoticon" description="Good" onChange={handleMood} stat={"Good"}/>
          <IconItem iconName="emoticon-neutral" description="Meh" stat={"Meh"} onChange={handleMood}/>
          <IconItem iconName="emoticon-sad" description="Bad" stat={"Bad"} onChange={handleMood}/>
          <IconItem iconName="emoticon-angry" description="Awful" stat={"Awful"} onChange={handleMood}/>
        </View>

      </View>
    )
}


const styles =  StyleSheet.create({
  
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
      alignItems:'center',
      marginBottom: 20,
    },
    title: {
      fontWeight: '900',
      fontSize: 20,
      },    
    });


export default Draft;