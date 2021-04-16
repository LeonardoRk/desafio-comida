/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet, 
  Dimensions,
  TextInput,
  ImageBackground
} from 'react-native';

import Order from './Order';
import Login from './Login';

const BACKGROUND_IMAGE = require('../images/img-bg-login.jpg');
const LOGO_IMAGE = require('../images/logo-coco-bambu.png');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const App: () => Node = () => {
  return (
    <View style={styles.app}>
        <ImageBackground 
          source={BACKGROUND_IMAGE} 
          style={[styles.background ]} >
          
          <Order ></Order>
         <Image style={styles.image} source={LOGO_IMAGE}  />
         <Login></Login>
          

        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex:1,
    borderWidth:1,
    borderColor:"#cccccc"
  },
  background: {
    flex: 1,
    resizeMode: "stretch",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "10%",
    alignItems: "center",
    borderWidth:1,
    borderColor:"#bbb444"
  },
  image: {
    flex:1,
    resizeMode: "contain",
  }

/*   arrow-up: {
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  border-bottom: 5px solid black;
  },

  arrowDown: {
  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  
  border-top: 20px solid #f00;
  },

  arrowRight: {
  width: 0; 
  height: 0; 
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;
  
  border-left: 60px solid green;
  } */


});

export default App;