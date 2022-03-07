import React, { Component, useState } from 'react'
import { 
    View,
    Text,  
    Button, 
    TextInput,
    StyleSheet,
    TouchableOpacity
}
from 'react-native'
import firebase from "firebase/app";
import { createUserWithEmailAndPassword } from 'firebase/auth';

var logo = require("../../assets/dapok.png");

export class Register extends Component {
    //constructor first function to be called whenever a component is created
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            address: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    //bind sign up with the variables
    onSignUp(){
        const { email, password, name, username, address } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }
  render() {
    return (
        <View style={{flex: 1, justifyContent: "center" }}>
            <Text style={styles.regis}>Register</Text>
            <Text style={styles.text1}>Name</Text>
            <TextInput style={[styles.placeholder, { borderWidth: 3, borderColor: "#BABABA" }]}
                placeholder = "name"
                onChangeText = {(name) => this.setState({ name })}/>
            <Text style={styles.text1}>Email</Text>
            <TextInput style={[styles.placeholder, { borderWidth: 3, borderColor: "#BABABA" }]}
                placeholder = "email"
                onChangeText = {(email) => this.setState({ email })}/>
            <Text style={styles.text1}>Username</Text>
            <TextInput style={[styles.placeholder, { borderWidth: 3, borderColor: "#BABABA" }]} 
                placeholder = "username"
                onChangeText = {(username) => this.setState({ username })}/>
            <Text style={styles.text1}>Password</Text>
            <TextInput style={[styles.placeholder, { borderWidth: 3, borderColor: "#BABABA" }]}
                placeholder = "password"
                secureTextEntry = {true}
                onChangeText = {(password) => this.setState({ password })}/>
            <Text style={styles.text1}>Address</Text>
            <TextInput style={[styles.placeholder, { borderWidth: 3, borderColor: "#BABABA" }]}
                placeholder = "address"
                onChangeText = {(address) => this.setState({ address })}/>
            
            <TouchableOpacity
                style={[styles.button, { backgroundColor: "#215A88" }]}
                onPress={() => navigation.navigate("Login")}>
                <Text style={[styles.text]}>Register</Text>
            </TouchableOpacity>
        </View>
    )
  }
}
export default Register

const styles = StyleSheet.create({
button: {
    alignSelf: "center",
    borderRadius: 20,
    padding: 13,
    margin: 60,
    width: "80%",   
    },
text: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "SemiBold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    },
text1: {
    left: 50,
    fontSize: 13,
    fontWeight: "SemiBold",
    lineHeight: 15,
    letterSpacing: 0.25,
    color: "#4D4D4D",

    },
placeholder: {
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    margin: 10 ,
    width: "90%",
    },
image: {
    alignSelf: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    },
logoContainer: {
    position: "relative",
    alignSelf: "center",
    top: -30,
    },
header: {
    alignSelf: "center",
    },
subHeader: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    bottom: -60,
    paddingLeft: 20,
    paddingRight: 20,
    },
textSubHead: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    margin: 15,
    bottom: 10,
    },
regis: {
    left: 50,
    fontSize: 25,
    lineHeight: 21,
    fontWeight: "Bold",
    letterSpacing: 0.25,
    color: "#215A88",
    margin: 15,
    bottom: 10,
    },
});

