import React, {useState, useContext, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, RefreshControl, SafeAreaView } from 'react-native';
import {ApplicationProvider, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Slider from '@react-native-community/slider';




const Note = ({navigation, route}) => {

    const [rating, setRating]=useState(3);

    const handleRatingEmoji = () =>{

        if(rating === 1){
            return '😡'
        }
        else if(rating === 2){
            return '😫'
        }
        else if(rating === 3){
            return '😕'
        }
        else if(rating === 4){
            return '🙂'
        }
        else if(rating === 5){
            return '😁'
        }
    }


      return(
        <View style={styles.container}>
            <Text style={{fontSize: 60}}>{handleRatingEmoji()}</Text>
           <Slider style={styles.slider}
            minimumValue={1}
            maximumValue={5}
            step={1}
            onValueChange={setRating}
           />
        </View>


    )
}
  
  
  const styles =  StyleSheet.create({
    
    container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
        
    }, 
    slider: {
        width: 200,
        height: 50
    }
});
  
  
  export default Note; 
