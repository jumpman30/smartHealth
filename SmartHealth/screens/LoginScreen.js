import React, {useState, useContext} from 'react';
import{
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {login} from '../services/auth';
import {AuthContext} from '../store/auth-context';


const LoginScreen = ({navigation}) => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);



  async function handleLogin(){

    const userData = {email: email, password: password}
    setIsLoading(true);
    
    try{
      
      const token = await login(userData);
      authContext.authenticate(token, email);

    } catch(error){

        Alert.alert('Wrong credentials');
        setIsLoading(false);

    }
  }

    return (
      <View style={styles.container}>

      <Text style={styles.welcome}>SmartHealth</Text>

      <TextInput
        style={styles.input}
        placeholder='email'
        onChangeText={setEmail}
        value ={email}
        ></TextInput>

        <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry
        onChangeText={setPassword}
        value ={password}
        ></TextInput>

        <View style={styles.btnContainer}>

          <TouchableOpacity 
          style={styles.userBtn}
          onPress={handleLogin}
         >
           <Text style={styles.btnTxt}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.userBtn}
          onPress={() => navigation.navigate("RegisterScreen")}
            >
            <Text style={styles.btnTxt}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
       );
    }




const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: "#fff",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontFamily: "NotoSerif-Bold",
    fontSize: 20
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10
   },
   userBtn: {
     backgroundColor: "#FFD700",
     padding: 15,
     width: "45%"
   },
   btnTxt: {
     fontSize: 18,
     textAlign: 'center'
   },
   btnContainer: {
     flexDirection: "row",
     justifyContent: "space-between",
     width: "90%"
   },

});
    

export default LoginScreen;