import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ImageBackground } from 'react-native';
import Forest from '../forest.jpg';
import Write from '../write.jpg';

const MainScreen = ({navigation}) => {

  navigation.getParent().getParent().setOptions({
    headerShown: true ,
  })

  navigation.setOptions({
    headerShown: false,
  })

  return (
    
    <View style={styles.container}>
        
            <ImageBackground source={Write} resizeMode="cover" style={styles.image}>
            <TouchableOpacity onPress={() => navigation.navigate('DraftScreen')}>
                    <Text style={styles.text} >Daily Journal</Text>
                </TouchableOpacity>
            </ImageBackground>
            <ImageBackground source={Forest} resizeMode="cover" style={styles.image}>
                <TouchableOpacity onPress={() => navigation.navigate('GoalScreen')}>
                    <Text style={styles.text} >Goals</Text>
                </TouchableOpacity>
            </ImageBackground>


    </View>
      
  );

}

const styles =  StyleSheet.create({
  
  container: {
      flex: 1,
      flexDirection: 'column',
    },
    touchBtn: {
        padding: 20,
    },
    image: {
        flex: 1,
        justifyContent: "center",
      },
      text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      },
 });

export default MainScreen;