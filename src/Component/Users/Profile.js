import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Alert, Pressable, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useEffect } from 'react';
import Header from '../common/Header';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import { Avatar } from 'react-native-elements';

const Profile = () => {

    //  const { name, email, mobile } = route.params;
    // const [uData, setUData] = useState(null);
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState("https://avatars.githubusercontent.com/u/31513262?s=400&u=5e925e2a43bb4a21e42922aae0626b9a593a5077&v=4");
    const [editMode, setEditMode] = useState(false);

    //testing
    const [openButton, setOpenButton] = useState(false);
    const validateEditedData = () => {
        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const nameReg = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
        const mobileReg = /^[1-9]{1}[0-9]{9}$/;

        if (!(email && name && mobile)) {
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
        else {
            saveData();//firse async me overide kr rha h
            editedData();//states ko save kr rha h
        }
    }

    const saveData = async () => {
        let myobj = {
            mail: email,
            name: name,
            num: mobile,
            img: image
        }
        try {
            const val = JSON.stringify(myobj);
            await AsyncStorage.setItem('anyKey', val);
        }
        catch (e) {
            console.log(e);
        }
        console.log("Changed data Saved");
    }

    //details states
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [pass, setPass] = useState();

    //edited user data state
    // const [editData, setEditData] = useState(null);

    const readData = async () => {
        try {
            const data = await AsyncStorage.getItem('anyKey');
            //updating the state and passing the data
            let userData = JSON.parse(data);
            setEmail(userData.mail);
            setName(userData.name);
            setMobile(userData.num);
            setPass(userData.pass);
            // if (userData.img) {
            //     setImage(userData.img);
            // }
            
        }
        catch (e) {
            console.log(e);
        }
        // console.log("Data Fetched");
    }

    //saving the edited data
    const editedData = async () => {
        let myobj = {
            mail: email,
            name: name,
            num: mobile,
            pass: pass, //checking
        }
        try {
            const val = JSON.stringify(myobj);
            await AsyncStorage.setItem('anyKey', val);
            //testing validation
        }
        catch (e) {
            console.log(e);
        }
        finally {
            readData();
            setEditMode(!editMode);
        }
        console.log("Edited Data Saved");
        console.log(name ,email, mobile, pass)
    }

    // This hook let us perform the data fetching through async storage
    useEffect(() => {
        if (!editMode) {
            readData();
        }
    }, [editMode])

    const openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setImage(image.path);
            setModal(false);
        }).catch(err => {
            console.log(err);
        });

    }

    const openGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setModal(false);
            setImage(image.path);
        }).catch(err => {
            console.log(err);
        });
    }

    const updateEdit = () => {
        setEditMode(!editMode);
    }

    return (
        <>
            <Header name="Profile" showBack={false} leftIcon={
                <TouchableOpacity
                    onPress={updateEdit}>
                    {!editMode ? <Icon name="user-edit" type="FontAwesome5" style={styles.licon} /> : null}
                </TouchableOpacity>
            } />

            <View style={styles.container}>

                <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row" }}>

                    <Image source={{ uri: image }}
                        style={{ height: 150, width: 150, borderRadius: 75, borderWidth: 2, borderColor: "#0EB2BF", marginTop: 5, zIndex: 0 }}
                    />
                    {/* <Avatar activeOpacity={0.2} style={{ height: 150, width: 150, borderRadius: 75, borderWidth: 5, borderColor: "#0EB2BF" }} rounded title="RP" size="xlarge" /> */}

                    {editMode ?
                        <TouchableOpacity
                            style={{ position: "relative", bottom: -25, right: 17 }}
                            onPress={() => { setModal(true) && setOpenButton(!openButton) }}
                        >
                            <Icon name="camera" type="FontAwesome5" style={styles.cameraicon} />
                        </TouchableOpacity>
                        : null}

                </View>

                <TextInput style={styles.inp} editable={editMode} onChangeText={(name) => { setName(name) }} value={name} />
                <TextInput style={styles.inp} editable={editMode} onChangeText={(email) => { setEmail(email) }} value={email} />
                <TextInput style={styles.inp} editable={editMode} onChangeText={(mobile) => { setMobile(mobile) }} value={mobile} keyboardType={'number-pad'} />


                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modal}
                >
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 10, marginTop: 100 }}>
                        <View style={styles.modalView}>
                            <Pressable onPress={() => openCamera()} style={styles.btn2}>
                                <Text style={styles.btnColor}>Open Camera   </Text>
                                <Icon name="camera" type="FontAwesome" style={styles.btnicon} />
                            </Pressable>
                            <Pressable onPress={() => openGallery()} style={styles.btn2}>
                                <Text style={styles.btnColor}>Open Gallery   </Text>
                                <Icon name="image" type="FontAwesome" style={styles.btnicon} />
                            </Pressable>
                            <Pressable onPress={() => setModal(false)} style={styles.cancelbtn}>
                                <Text style={styles.btnColor}>Cancel            </Text>
                                <Icon name="cancel" type="MaterialIcons" style={styles.btnicon} />
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <View>
                    {editMode
                        ?
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={validateEditedData}>
                                <Text style={styles.btnColor}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cancelbtn}
                                onPress={updateEdit}>
                                <Text style={styles.btnColor}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        : null}
                </View>

            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    btn: {
        // borderWidth: 2,
        padding: 15,
        marginTop: 5,
        borderRadius: 15,
        // borderColor:"#7da6d2",
        backgroundColor: "#0EB2BF",
        justifyContent: "center",
        alignItems: "center",

    },
    btn2: {
        padding: 15,
        marginTop: 5,
        borderRadius: 15,
        backgroundColor: "#0EB2BF",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    btnColor: {
        color: "#fff",
        fontSize: 16,
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
    modalView: {
        margin: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 70,
        borderWidth: 2,
        borderColor: "#1bc4aa"
    },
    cancelbtn: {
        padding: 15,
        marginTop: 5,
        borderRadius: 15,
        backgroundColor: "#E21717",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

    },
    btnicon: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        justifyContent: "space-between"
    },
    licon: {
        color: "#fff"
    },
    cameraicon: {
        color: "#0EB2BF"
    }
});

export default Profile;