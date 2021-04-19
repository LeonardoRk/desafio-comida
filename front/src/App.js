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
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './login/LoginPage';
import ListaPedidos from './receitas/ListaPedidos';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <SafeAreaView 
        style={[styles.app]}>
                <NavigationContainer>
                  <Stack.Navigator 
                    screenOptions={{
                      headerShown: false
                    }}
                    initialRouteName="Últimos (todos) pedidos">
                    {/* <Stack.Screen
                      name="Home"
                      component={HomeScreen}
                      options={{ title: 'Welcome' }}
                    /> */}
                    
                    <Stack.Screen 
                      name="Login" component={LoginPage}
                       />
                    <Stack.Screen 
                      name="Últimos (todos) pedidos"
                      /* options={{ headerTitle: () => <Nav></Nav>  }} */
                      component={ListaPedidos} 
                      
                      />

                  
                  </Stack.Navigator>
                </NavigationContainer>
             
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    flex:1
  },
  background: {
    width:'100%',
    height:'100%',
  },
  scroll: {
    width:'100%',
    height:'100%'
  },
  image: {
    resizeMode: "contain",
    alignSelf: 'center'
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