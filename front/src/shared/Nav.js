import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet, 
  Dimensions,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const BIRD_NAV = require('../../images/logo-coco-bambu-mini.png');
const SEARCH_NAV = require('../../images/icon-busca.png');
//const BIRD_NAV = require('../../images/logo-coco-bambu-mini.png');

const Nav = () => {
  return(
    <View style={aStyle.background}>
      <Image source={BIRD_NAV} />
      <View style={aStyle.searchBackground}>
        <TextInput style={aStyle.font}
                placeholder="Buscar receita..."   
                   
             />
        <Image style={aStyle.endBar} source={SEARCH_NAV} />
      </View>
    </View>
  );
}

const aStyle = StyleSheet.create({
  background: {
    backgroundColor:'#3a403c',
    flexDirection:'row',
    alignItems:'center',
    padding:15,
    flexWrap: 'wrap'
    
  },
  searchBackground: {
      marginLeft:15,
      backgroundColor:'#fff',
      flexDirection:'row',      
      alignItems:'center',
      flexGrow: 2,
      justifyContent: 'space-between'
  },
  font: {
      color:'#000',
      fontSize:20
  },
  endBar: {

  }

});

export default Nav;