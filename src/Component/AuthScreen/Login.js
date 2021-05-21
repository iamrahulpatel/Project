import React, { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, z, View, Image, TextInput, onChangeText, text, Button, ImageBackground, TouchableOpacity, fontFamily } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const img = { uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }
const imgLogo = { uri: 'https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png' }

const Login = () => {
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  const [myemail, setMyEmail] = useState("");
  const [mypass, setMyPass] = useState("");


  const readData = async () => {
    try {
      const data = await AsyncStorage.getItem('anyKey');
      //updating the state and passing the data
      let userData = JSON.parse(data);
      setMyEmail(userData.mail);
      setMyPass(userData.pass);

    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    readData();
  }, [])


  const validateForm = () => {

    if (!(email || pass)) {
      alert("All fields are required.")
      return false;
    }

    if (!email) {
      alert("Email is empty.")
      return false;
    }
    else if (!(emailReg.test(email))) {
      alert("Email is incorrect.")
      return false;
    }

    if (!pass) {
      alert("Password is empty.")
      return false;
    }
    else if (!(passReg.test(pass))) {
      alert("Password is incorrect.")
      return false;
    }

    if(email != myemail){
      alert("Email not matched")
      return
    }
    else if(pass != mypass){
      alert("Password not matched")
      return
    }
    else{
      alert("Login Successfully")
    }

  }


  const navigation = useNavigation();
  const PressHandler = () => { navigation.navigate('Signup') }
  //  const PressMe = ()=> {navigation.navigate('Home',{email,pass})}

  return (

    <ImageBackground source={img} style={styles.backImg}>

      <View style={styles.logoContainer}>
        <Image source={imgLogo} style={styles.logo} />
      </View>

      <View style={styles.formContainer} >
        <TextInput style={styles.inp} onChangeText={(email) => { setEmail(email) }} placeholder="Enter your Email" />


        <TextInput style={styles.inp} onChangeText={(pass) => { setPass(pass) }} secureTextEntry={true} placeholder="Enter your Password" />


        <TouchableOpacity style={styles.button} onPress={validateForm}>
          <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.linkContainer} onPress={PressHandler}>
        <Text style={styles.link}>SignUp</Text>
      </TouchableOpacity>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  backImg: {
    flex: 1
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  logoContainer:{
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 5
  },
  formContainer:{
    backgroundColor: "white", 
    borderRadius: 10, 
    margin: 20, 
    padding: 20 
  },
  inp: {
    height: 50,
    color: "#4E4AAD",
    fontSize: 16,
    backgroundColor: "#0EB2BF",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    fontWeight: "bold"
  },
  button: {
    width: "60%",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#4E4AAD",
    marginLeft: 50
  },
linkContainer:{
  alignItems: "center", 
  justifyContent: "center"
},
  link: {
    color: "white",
    fontSize: 30,
    textDecorationLine: 'underline'

  }
});

export default Login;