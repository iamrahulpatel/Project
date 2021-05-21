import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const img = { uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }
const imgLogo = { uri: 'https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png' }


const Signup = () => {

  // assigning states
  const [email, setEmail] = useState("rahul@gmail.com");
  const [name, setName] = useState("Rahul Patel");
  const [mobile, setMobile] = useState("1234567890");
  const [pass, setPass] = useState("Jai@123");
  const [cpass, setCpass] = useState("Jai@123");

  const navigation = useNavigation();
  const PressHandler = () => { navigation.navigate('Login') }
  // const PressMe = () => { navigation.navigate('Home', { name, email, mobile }) }
  const PressMe = () => { navigation.navigate('AppDrawer', { screen: 'Home', params: { name, email, mobile } }) }
  const goToProfile = () => { navigation.navigate('AppDrawer', { screen: 'Profile', params: { name, email, mobile } }) }


  const validateNavigateForm = () => {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    const nameReg = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    const mobileReg = /^[1-9]{1}[0-9]{9}$/;

    if (!(email && name && mobile && pass && cpass)) {
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

    if (!name) {
      alert("Name is empty.")
      return false;
    }
    else if (!(nameReg.test(name))) {
      alert("Name is incorrect.")
      return false;
    }

    if (!mobile) {
      alert("Number is empty.")
      return false;
    }
    else if (!(mobileReg.test(mobile))) {
      alert("Number is incorrect.")
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

    if (!cpass) {
      alert("Field is empty.")
      return false;
    }
    else if (cpass != pass) {
      alert("Password not matching");
      return false;
    }

    else {
      saveData();
      navigation.navigate('AppDrawer', { screen: 'Profile' });
    }
  }

  const saveData = async () => {
    let myobj = {
      mail: email,
      name: name,
      num: mobile,
      pass: pass
    }
    try {
      const val = JSON.stringify(myobj);
      //this 'val' value is set for the key 'anyKey'
      await AsyncStorage.setItem('anyKey', val);
    }
    //handling the errors
    catch (e) {
      console.log(e);
    }
    console.log(email, name, mobile, pass);
  }

  return (

    <ImageBackground source={img} style={styles.backImg}>

      <View style={styles.logoContainer}>
        <Image source={imgLogo} style={styles.logo} />
      </View>

      <View style={styles.formContainer} >
        <TextInput value={email} style={styles.inp} onChangeText={(email) => { setEmail(email) }} placeholder="Enter your email" />
        <TextInput value={name} style={styles.inp} onChangeText={(name) => { setName(name) }} placeholder="Enter your Name" />
        <TextInput value={mobile} style={styles.inp} onChangeText={(mobile) => { setMobile(mobile) }} keyboardType={'number-pad'} placeholder="Mobile No" />
        <TextInput value={pass} style={styles.inp} onChangeText={(pass) => { setPass(pass) }} secureTextEntry={true} placeholder="Password" />
        <TextInput value={cpass} style={styles.inp} onChangeText={(cpass) => { setCpass(cpass) }} secureTextEntry={true} placeholder="Confirm Password" />
        {/* <TouchableOpacity style={styles.button} onPress={() => { validateForm() && PressMe() }}> */}
        <TouchableOpacity style={styles.button} onPress={validateNavigateForm}>
          <Text style={{ color: "white", fontSize: 20 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.linkContainer} onPress={PressHandler}>
        <Text style={styles.link}>LogIn</Text>
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

export default Signup;
