import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../common/Header';

const Home = ({ route, navigation }) => {

  const { name, email, mobile } = route.params;

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.f1}>Welcome {JSON.stringify(name)}</Text>
        <Text style={styles.f1}>You have been registered successfully </Text>
        <Text style={styles.f1}>{JSON.stringify(email)}</Text>
        <Text style={styles.f1}>{JSON.stringify(mobile)}</Text>
        <TouchableOpacity style={{ marginTop: 50 }} onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",

  },
  f1: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold"

  }
});
export default Home;