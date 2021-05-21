import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../common/Header';

const UserDetail = ({ route }) => {
    const { fname, lname, email, avatar } = route.params;
    return (
        <ScrollView>
            <Header name="User Details" />
            <View>
                <View style={styles.container}>
                    <Image source={{ uri: avatar }} style={styles.img} />
                    <Text style={styles.disp}>{fname} {lname}</Text>
                    <Text>{email}</Text>
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={styles.head}>Heading 1</Text>
                    <Text style={{fontFamily:"cursive"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                    <Text style={styles.head}>Heading 2</Text>
                    <Text style={{fontFamily:"cursive"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                    <Text style={styles.head}>Heading 3</Text>
                    <Text style={{fontFamily:"cursive"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>

                </View>
            </View>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 120,
        borderRadius: 60,
        margin: 20
    },
    disp: {
        color: "green",
        fontSize: 25,
        textDecorationLine:"underline"
    },
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    head: {
        fontSize: 20,
        color: "purple",
        marginTop: 10,
        textDecorationLine:"underline"
    }
})

export default UserDetail;