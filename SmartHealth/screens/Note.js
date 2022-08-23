import React, {useState, useContext, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import {ApplicationProvider, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {useGetJournalQuery} from '../services/journal';
import {AuthContext} from '../store/auth-context';
import {getJournal} from '../services/journal';
import {selectJournal} from '../store/journalSlice';
import { useSelector, useDispatch} from 'react-redux';
import {setJournal, deleteNote} from '../store/journalSlice';


Icon.loadFont();


const Note = ({navigation, route}) => {


      return(
        

        <View style={{padding: 20, justifyContent: 'space-around'}}>

        <View style={[styles.input]}>
            <Text>{route.params.note}</Text>
        </View>

    </View>

    )
}
  
  
  const styles =  StyleSheet.create({
    
    container: {
        paddingHorizontal: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
        
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
        padding: 20,
        paddingTop: 20,
        width:'100%',
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
        borderRadius: 5,
        height: 300,
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
        fontWeight: '700'
    },
    button:{
        backgroundColor: 'grey',
        width: '40%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        alignSelf: 'flex-end',
        marginTop: 20,
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
  
  
  export default Note; 
