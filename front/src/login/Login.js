import React, { useState } from 'react';
import { View,
        TextInput,
    StyleSheet,
    Text,
    TouchableOpacity  } from 'react-native';

import FormField from './FormField'

const USER_IMAGE = require('../../images/icon-login.png');
const PASS_IMAGE = require('../../images/icon-key.png');
const CORRECT_PASS = "pass";
const CORRECT_LOGIN = "login"

const validate = (login, password) => {
    console.log(login, password)
    if(login === CORRECT_LOGIN && password === CORRECT_PASS) {
        console.log("login aceito")
        console.log(navigation)

    } else {
        console.log("login e/ou senha errados")
    }
}

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    
    return(
        <View style={styles.login}>
            <FormField 
                image={USER_IMAGE}
                 placeholder={"Nome do usuário"}
                 changeValue={setLogin}>
            </FormField>

            <FormField 
                image={PASS_IMAGE}
                 placeholder={"Senha"}
                 changeValue={setPassword}>
            </FormField>

            <TouchableOpacity 
                style={[styles.border, 
                    styles.buttonText]}
                    onPress={() => validate(login, password)}>
                <Text style={styles.buttonText}>
                    Acessar
                </Text>
            </TouchableOpacity>
        </View>
        
    );
}

export default Login;

const styles = StyleSheet.create({
    login: {
        width:"70%",
        alignSelf:'center',
        marginTop:10,
        marginBottom:10
    },
  border: {
    marginTop:6,
    marginBottom:6,
    borderColor: "#ffffff",
    borderRadius: 6,
    backgroundColor: "#ffffff",
  },
  buttonText: {
      textTransform: 'capitalize',
      backgroundColor: 'orange',
      borderColor: "orange",
      borderWidth: 4,
      borderRadius: 6,
      color:"white",
      fontWeight: 'bold',
      fontSize:20,
      textAlign: "center"
  }
});