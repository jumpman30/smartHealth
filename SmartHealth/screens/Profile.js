import React, {useState,useEffect} from 'react';
import { StyleSheet, View, Button, ScrollView, TextInput, Systrace, SafeAreaView, TouchableOpacity } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text, 
    ToutchableRipple
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();




const Profile = (props) => {



    return(
             
        <SafeAreaView style={styles.container}>
            <View style={styles.infoSection}>
                <View style={styles.innerContainer}>
                    <Avatar.Image size={80}/>
                

                
                <View style={{marginLeft:20}}>
                    <Title style={styles.title}>Francisco</Title>
                    <Caption style={styles.caption}>@Francisco30</Caption>
                </View>
                </View>
            

            </View>

            <View style={styles.userInfo}>

                <View style={styles.row}>

                    <Icon name="cellphone" size={20}/>
                    <Text style={{marginLeft:20}}>918273828</Text>

                </View>

                <View style={styles.row}>

                <Icon name="email" size={20}/>
                <Text style={{marginLeft:20}}>francisco@gmail.com</Text>

                </View>

                <View style={styles.row}>

                <Icon name="map-marker" size={20}/>
                <Text style={{marginLeft:20}}>Portugal</Text>

                </View>

            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={styles.infoBox}>
                    <Title>890</Title>
                    <Caption>Points</Caption>
                </View>

                <View style={styles.infoBox}>
                    <Title>78</Title>
                    <Caption>Days using the App</Caption>
                </View>


            </View>

            <View style={styles.menuWrapper}>

                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon name="heart" size={20}/>
                        <Text style={{marginLeft: 10}}>Favorites</Text>
                    </View>
                 </TouchableOpacity>

                 <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon name="account" size={20}/>
                        <Text style={{marginLeft: 10}}>Support</Text>
                    </View>
                 </TouchableOpacity>

                 <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon name="cog" size={20}/>
                        <Text style={{marginLeft: 10}}>Settings</Text>
                    </View>
                 </TouchableOpacity>

                 <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon name="file-outline" size={20}/>
                        <Text style={{marginLeft: 10}}>FAQS</Text>
                    </View>
                 </TouchableOpacity>

            </View>
         

        </SafeAreaView>
        
    )
}


const styles =  StyleSheet.create({

    container:{

    },
    infoSection:{

    },
    title:{

    },
    caption:{

    },
    innerContainer:{
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 10

    },
    userInfo:{
        marginTop: 15,

    },
    row:{
        flexDirection:'row',
        marginTop: 10,
        marginLeft: 10

    },
    menuWrapper:{
        marginTop:10,

    },
    menuItem:{
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,

    },
    infoBoxWrapper:{
        borderBottomWidth: 1,
        borderTopWidth: 1,
        height: 100,
        flexDirection:'row',
        marginTop: 10

    },
    infoBox:{
        borderRightWidth: 1,
        flex: 1,
        alignItems: "center",
        marginTop: 10,

    }

 
    });


export default Profile;