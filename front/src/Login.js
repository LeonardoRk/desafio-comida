import React from 'react';
import { View,
        TextInput,
    StyleSheet,
    Text,
    TouchableOpacity  } from 'react-native';

import FormField from './FormField'

const USER_IMAGE = require('../images/icon-login.png');
const PASS_IMAGE = require('../images/icon-key.png');


const Login = () => {
    return(
        <View style={styles.login}>
            <FormField 
                image={USER_IMAGE}
                 placeholder={"Nome do usuário"}>
            </FormField>

            <FormField 
                image={PASS_IMAGE}
                 placeholder={"Senha"}>
            </FormField>

            <TouchableOpacity style={[styles.border, styles.buttonText]}>
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
        flex:0.4,
        width:"70%",
        marginTop:20,
    },
  border: {
    flex:1,
    marginTop:6,
    marginBottom:6,
    borderColor: "#ffffff",
    borderRadius: 6,
    backgroundColor: "#ffffff",
  },
  buttonText: {
      flex:1,
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