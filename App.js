import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from "react";

// This import loads the firebase namespace.
import firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCc49lwE6R49Q2Gsd6U6L_iOZjD5t5-TO8",
  authDomain: "dapok-c79b1.firebaseapp.com",
  projectId: "dapok-c79b1",
  storageBucket: "dapok-c79b1.appspot.com",
  messagingSenderId: "215181674593",
  appId: "1:215181674593:web:78d31fd3deca80150cc220"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'


const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen 
              name ="Landing" 
              component = {LandingScreen} 
              options={{headerShown:false}}/>
              
          <Stack.Screen 
              name ="Register" 
              component = {RegisterScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}


