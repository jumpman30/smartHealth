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

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  

const Journal = ({navigation}) => {

    const dispatch = useDispatch();
    const authContext = useContext(AuthContext);
    const [refreshing, setRefreshing] = useState(false);
    const notes = useSelector(selectJournal);


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(setJournal(authContext.email));
        wait(2000).then(() => {
            setRefreshing(false)});
      }, [])
      
      useEffect(() => {
       dispatch(setJournal(authContext.email));
    }, [dispatch])

    const handleDeleteNote = (index) => {

        const data = {email: authContext.email, note: notes[index], index: index};
       dispatch(deleteNote(data));

    }
    

      return(
        
        <View style={styles.container} >

        <View style={styles.headingContainer}>

            <Text style={styles.heading}>Journal...</Text>

            <View style={{flexDirection: 'row'}}>

                <TouchableOpacity style={[styles.button, {marginLeft: 40}]} 
                onPress={()=> navigation.navigate('DeleteNoteScreen')}
                >
                <Icon 
                    name='delete-empty'
                    size={50}
                    color="lightsteelblue"
                />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {marginLeft: 40}]} onPress={() => navigation.navigate("AddNoteScreen")}>
                <Icon 
                    name='plus'
                    size={50}
                    color="lightsteelblue"
                />
                </TouchableOpacity>


            </View>

        </View>

        <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{fontWeight: '700', fontSize: 18, color: 'blue'}}>
                Total:
            </Text>

        </View>

        <View style={styles.divider}></View>

        <View style={styles.searchContainer}>

            <TextInput placeholder='Search' placeholderTextColor='blue' style={[styles.input, {borderWidth:3}]}/>

            <TouchableOpacity style={[styles.searchButton, {width: 50}]}>
                <Icon 
                    name='magnify-plus-outline'
                    size={40}
                    color="lightsteelblue"
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Clear</Text>
            </TouchableOpacity>

            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
            >

                {notes.length === 0 ?

                <View style={styles.emptyNoteContainer}>
                    <Text style={styles.emptyNoteContainer}>There is not a Journal yet! Add one now!</Text>
                </View>
                :
                
                notes.map((item, index) => 

                    <View style={styles.item} key={index}>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                        <View style={styles.note}>
                            <Text style={styles.index}>{index + 1}</Text>
                            <Text style={styles.text}>{item.note}</Text>
                        </View>

                        <TouchableOpacity onPress={() => handleDeleteNote(index)}>
                            <Text style={styles.delete}>X</Text>
                        </TouchableOpacity>

                        </View>

                        <View style={styles.dateContainer}>
                            <Text>Date:{item.date}</Text>


                            <TouchableOpacity onPress={() => navigation.navigate("NoteScreen",{note: item.note})}>
                                <Text>View</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                ) }
            
            </ScrollView>

        </View>
      )
  }
  
  
  const styles =  StyleSheet.create({
    
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
  
  
  export default Journal; 
