import 'react-native-gesture-handler';
import * as React from 'react';
import Login from '../AuthScreen/Login'
import Signup from '../AuthScreen/Signup';
import Home from '../Home/Home';
import Header from '../common/Header';
import FlatList from '../AuthScreen/FlatList';
import UserList from '../Users/UserList';
import UserDetail from '../Users/UserDetail';
import Profile from '../Users/Profile';
import ChangePassword from '../Users/ChangePassword';
import Responsive from "../Responsive/Responsive";

import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
//const SiStack = createStackNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={Signup}>
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      <Drawer.Screen name="Login" component={Login} />
      {/* <Drawer.Screen name="Header" component={Header} /> */}
      {/* <Drawer.Screen name="FlatList" component={FlatList} /> */}
      <Drawer.Screen name="Profile" component={Profile} />
      {/* <Drawer.Screen name="AppTab" component={AppTab} /> */}
      <Drawer.Screen name="UserList" component={UserList} />
      <Drawer.Screen name="UserDetail" component={UserDetail} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Responsive" component={Responsive} />

    </Drawer.Navigator>
  );
}

const AppTab = () => {
  return (
    <Tab.Navigator initialRouteName={Login}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  );
}

// const SignStack = () => {
//   return (
//     <SiStack.Navigator initialRouteName={Signup}>
//       <SiStack.Screen name="Signup" component={Signup} />
//     </SiStack.Navigator>
//   );
// }

const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Signup}>
        <Stack.Screen name="Signup" component={Signup} />
        {/* <Stack.Screen name="AppTab" component={AppTab} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="SignStack" component={SignStack} /> */}

        <Stack.Screen name="AppDrawer">
          {(props) => <AppDrawer {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default AppNavigation;
