import React, {useState,useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, Systrace, Alert } from 'react-native';
import {AuthContext} from '../store/auth-context';
import {test} from '../services/auth';



const Testi = (props) => {

    const authContext = useContext(AuthContext);


    async function handlePress(){
        try{
             console.log(authContext.token)
             const token = authContext.token;
             const response = await test(token);
             console.log(response);
      
          } catch(error){
            
            console.log(error);
            Alert.alert('Wrong credentials');

          }
        }

    return(
             
        <View >
         <Text>Test</Text>
         <Button title="Press me bitch" onPress={handlePress}></Button>

        </View>
        
    )
}


const styles =  StyleSheet.create({
 
    });


export default Testi;