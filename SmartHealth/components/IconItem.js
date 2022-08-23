import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


Icon.loadFont();


const IconItem = (props) => {

    const [status, setStatus] = useState(false);
    const [btnColor, setBtnColor] = useState('paleturquoise')

    const handlePress = () => {
        setStatus(!status);

        if(status){
            setBtnColor("green");
        }
        else{
            setBtnColor("paleturquoise");
        }
        props.onChange(props.stat);
    };

    return(
     <View style={styles.container}> 
     
        <View backgroundColor={btnColor} style={styles.iconButton}>
            <Icon 
            name={props.iconName} 
            size={50}
            color="lightsteelblue"
            onPress={handlePress}
            />
        </View>
        <Text style={styles.description}>{props.description}</Text>
    </View>  
    )
}


const styles =  StyleSheet.create({
  
    iconButton: {
        borderRadius: 10,
        
          },
    description: {
        margin: 5,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
     }      
});


export default IconItem;