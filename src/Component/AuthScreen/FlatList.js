import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Header from '../common/Header';

const FlattList = () => {
    const People = [
        { id: 1, name: "Rahul" },
        { id: 2, name: "Sam" },
        { id: 3, name: "Sonu" },
        { id: 4, name: "Ram" },
        { id: 5, name: "UC" },
        { id: 6, name: "Umesh" },
        { id: 7, name: "Sam" },
        { id: 8, name: "Sonu" },
        { id: 9, name: "Ram" },
        { id: 10, name: "UC" },
        { id: 11, name: "Sam" },
        { id: 12, name: "Sonu" },
        { id: 13, name: "Ram" },
        { id: 14, name: "UC" }
    ]

    const navigation = useNavigation();

    return (
        <>
            <Header />
            <View>
                <FlatList
                    data={People}
                    renderItem={
                        ({ item }) => (

                            <View>
                                <Text style={styles.disp}>{item.id} {item.name}</Text>
                            </View>
                        )}
                />
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    disp: {
        fontSize: 30,
        color: "blue",
        fontWeight: "bold",
        backgroundColor: "pink",
        margin: 10,
        padding: 10,
        borderRadius: 10
    }
})

export default FlattList;