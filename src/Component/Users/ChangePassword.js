import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../common/Header';


const ChangePassword = () => {
    const [pass, setPass] = useState();
    const [oldpass, setOldpass] = useState();//old password
    const [newPass, setNewpass] = useState();//new password
    const [conNewpass, setConNewpass] = useState();//confirm new password


    //reading data from async
    const readData = () => {
        try {
            AsyncStorage.getItem('anyKey').then((res) => {
                let prevpass = JSON.parse(res);
                setPass(prevpass.pass);
                console.log(prevpass.pass);
            });
        }
        catch (e) {
            console.log(e);
        }
    }

    //updating new password in async
    const updateNewPassword = async () => {

        try {
            let data = await AsyncStorage.getItem('anyKey');
            let parsedata = JSON.parse(data);
            parsedata.pass = newPass;
            // console.log(JSON.stringify(parsedata));
            await AsyncStorage.setItem('anyKey', JSON.stringify(parsedata));
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        readData();
    }, [])


    const validatePassword = () => {
        const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;

        if (!oldpass) {
            alert("Old Password is empty.")
            return false;
        }
        else if (!(passReg.test(oldpass))) {
            alert("Old Password is Invalid.")
            return false;
        }

        if (!newPass) {
            alert("New Password is empty.")
            return false;
        }
        else if (!(passReg.test(newPass))) {
            alert("New Password is Invalid.")
            return false;
        }


        if (!conNewpass) {
            alert("Confirm Password is empty.")
            return false;
        }
        else if (!(passReg.test(conNewpass))) {
            alert("Confirm New Password is Invalid.")
            return false;
        }

        if (!(pass === oldpass)) {
            alert("Old Password doesn't match with Previous password")
            return;
        }
        else if (!(newPass === conNewpass)) {
            alert("New Password doesn't match")
            return;
        }
        else if ((oldpass === newPass)) {
            alert("Same as old password")
            return;
        }

        else {
            // readData();
            updateNewPassword();
            alert("Password Changed Successfully....")
        }
    }

    return (
        <View>
            <Header name="Change Password" />
            <View style={{ backgroundColor: "white", borderRadius: 10, margin: 20, padding: 20 }} >

                <Text>Old Password</Text>
                <TextInput style={styles.inp} onChangeText={(e) => { setOldpass(e) }} placeholder="Old Password" />
                <Text>New Password</Text>
                <TextInput style={styles.inp} onChangeText={(e) => { setNewpass(e) }} placeholder="New Password" />
                <Text>Confirm New Password</Text>
                <TextInput style={styles.inp} onChangeText={(e) => { setConNewpass(e) }} placeholder="Confirm New Password" />

                <TouchableOpacity style={styles.button} onPress={validatePassword}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>Change Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    inp: {
        height: 50,
        color: "#4E4AAD",
        fontSize: 16,
        backgroundColor: "#0EB2BF",
        padding: 10,
        borderRadius: 10,
        margin: 5,
        fontWeight: "bold",
    },
    button: {
        margin: 70,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        backgroundColor: "#00aa00",
    },
});
export default ChangePassword;