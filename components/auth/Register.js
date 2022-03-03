import React, { Component } from 'react'
import { 
    View, 
    Button, 
    TextInput
}
from 'react-native'

import firebase from "firebase/app";

import { createUserWithEmailAndPassword } from 'firebase/auth';

export class Register extends Component {
    //constructor first function to be called whenever a component is created
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    //bind sign up with the variables
    onSignUp(){

        const { email, password, name } = this.state;

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
        <View>

            <TextInput
                placeholder = "name"
                onChangeText = {(name) => this.setState({ name })}
           />

            <TextInput
                placeholder = "email"
                onChangeText = {(email) => this.setState({ email })}
           />

            <TextInput
                placeholder = "password"
                secureTextEntry = {true}
                onChangeText = {(password) => this.setState({ password })}
           />

           <Button 
                onPress={() => this.onSignUp()}
                title = "Sign Up"
            />

        </View>
    )
  }
}

export default Register