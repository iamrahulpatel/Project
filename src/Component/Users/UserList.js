import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../common/Header';

const UserList = () => {
    const navigation = useNavigation();

    const userList = [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        },
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ]

    const renderItemFunc = ({ item, index }) => (
        <TouchableOpacity style={{ flexDirection: "row", margin: 10 }}
            onPress={() => {
                navigation.navigate('UserDetail',
                    {
                        fname: item.first_name,
                        lname: item.last_name,
                        email: item.email,
                        avatar: item.avatar

                    })
            }} >
            <Image source={{ uri: item.avatar }} style={styles.img} />
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={styles.disp}>{item.first_name} {item.last_name}</Text>
                <Text>{item.email}</Text>
            </View>
        </TouchableOpacity>
    )


    return (
        <View style={{ flex: 1 }}>
            < Header name="Users" />
            <FlatList
                data={userList}
                renderItem={renderItemFunc}
            />
        </View>

    );
}
const styles = StyleSheet.create({
    disp: {
        fontSize: 18,
        color: "blue"
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30
    }
})

export default UserList;