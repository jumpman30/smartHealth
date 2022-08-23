import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Keyboard } from 'react-native';
import {ApplicationProvider, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'native-base';
Icon.loadFont();


const DeleteNote = () => {


      return(
        
        <ScrollView>
        
                <View style={styles.container}>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

                        <TouchableOpacity style={styles.emptyButton}>

                            <Text>Undo All</Text>

                        </TouchableOpacity>

                        <Text style={{fontWeight: '700', fontSize: 18, color: 'grey'}}>
                            Total:
                        </Text>

                        <TouchableOpacity style={styles.emptyButton}>

                            <Text>Empty</Text>

                        </TouchableOpacity>

                    </View>


                    <View style={styles.divider}>

                    </View>

                 
                </View>

        </ScrollView>
      )
  }
  
  
  const styles =  StyleSheet.create({

        emptyButton: {
            backgroundColor: 'grey',
            width: '25%',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: 35,
            marginBottom: 5
        },
        container: {
            paddingTop: 10,
            paddingHorizontal: 20,
            marginBottom: 70,
            opacity: 0.9
        }, 
        heading: {
            fontSize: 25,
            fontWeight: '700',
            color: 'blue'
        },
        divider:{
            width: '100%',
            height: 2,
            backgroundColor: 'blue',
            marginTop: 5,
            marginBottom: 5
        },
        dateContainer: {
            marginTop: 10, 
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
        },
        emptyNoteText:{
            fontWeight: 600,
            color: 'grey',
            fontSize: 15,
        },
        searchButtonText: {
            color: 'white',
            fontWeight: '700',
            fontSize: 12
        },
        searchButton:{
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            borderRadius:5,
            height: 40,
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 8
        },
        input:{
            height: 40,
            paddingHorizontal: 20,
            width:'65%',
            fontSize: 19,
            color:'black',
            fontWeight: '600',
            opacity: 0.8,
            shadowColor: 'grey',
            shadowOpacity: 0.4,
            shadowOffset: {width:0, height:4},
            shadowRadius: 8,
            elevation: 5,
            backgroundColor: 'white',
            borderColor: 'blue',
            borderWidth: 2,
            borderRadius: 5
        },
        delete:{
            color: 'blue',
            fontWeight: '700',
            fontSize: 15
        },
        text: {
            fontWeight: '700',
            fontSize: 17,
            alignSelf: 'center'
        },
        note:{
            flexDirection:'row',
            width: '75%'
        },
        scrollView:{
            marginBottom: 70
        },
        buttonText:{
            color: 'white',
            fontSize: 32,
            fontWeight: 800
        },
        button:{
            backgroundColor: 'grey',
            width: 50,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            height: 50
        },
        headingContainer:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        emptyNoteContainer:{
            alignItems: 'center',
            marginTop: 240
        },
        index:{
            fontSize:20,
            fontWeight: '800'
        },
        item:{
             marginBottom: 20,
             padding: 15,
             color: 'black',
             opacity: 0.8,
             marginTop: 10,
             shadowColor: 'blue',
             shadowOffset:{width: 0, height:4},
             shadowOpacity: 0.5,
             shadowRadius: 8,
             elevation: 5,
             backgroundColor: 'white',
             borderColor: 'grey',
             borderWidth: 2,
            borderRadius: 5,
            borderLeftWidth: 15
        }
    });
  
  
  export default DeleteNote; 
