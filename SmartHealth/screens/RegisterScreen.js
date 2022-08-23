import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import GenderSelector from '../components/GenderSelector';
import {useRegisterUserMutation } from '../services/user';
import {createUser} from '../services/auth';



const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);



  const addGenderHandler = genderTitle => {
    setGender(genderTitle);
  };

  const userData={first_name: name, last_name: lastName, age: age, gender: gender, email: email, password: password}


  async function signUpHandler(){

    const userData={first_name: name, last_name: lastName, age: age, gender: gender, email: email, password: password}
     setIsLoading(true);
    try{

      const token = await createUser(userData);
      navigation.navigate('QuizInitScreen', {token: token, email: email});

    } catch(error){
        Alert.alert('Network fail', 'Please try again');
        setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={setName}
        value={name}></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={setLastName}
        value={lastName}></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={setAge}
        value={age}></TextInput>

      <GenderSelector onAddGender={addGenderHandler} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={onChangeEmail}
        value={email}></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry></TextInput>

      <TouchableOpacity style={styles.btn} onPress={signUpHandler}>
        <Text style={styles.btnTxt}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  btn: {
    backgroundColor: 'gold',
    padding: 20,
    width: '45%',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontFamily: 'NotoSerif-Bold',
    fontSize: 20,
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  userBtn: {
    backgroundColor: '#FFD700',
    padding: 15,
    width: '45%',
  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  countryPicker: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    height: 60,
  },
});

export default RegisterScreen;
