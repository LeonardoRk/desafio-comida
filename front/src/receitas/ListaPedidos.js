import React, {useEffect} from 'react';
import { View , StyleSheet,
     Text, ScrollView, Image,
    TextInput, TouchableOpacity} from 'react-native';



import Nav from '../shared/Nav'
import Pedidos from './Pedidos'

console.log(Nav);
const getRevenuesAPI =  async () => { 
    try{
       /*  let response = await fetch('http://localhost:3000/revenues');
        let json = await response.json();
        console.log(json);
        return json */
    }catch(error) {
        console.error("meu erro");
        new Error('erro de json');
    }
};

const ListaPedidos = ({navigation}) => {

    useEffect(async() => {
        //let revenues = getRevenues();
        console.log("ihuu")})
    
    return(
        <View style={styles.app1}>
            <Nav></Nav>
            <Pedidos navigation={navigation}></Pedidos>
        </View>
    )
}


const styles = StyleSheet.create({
  app1: {
      flex:1
  },
  scroll: {
    width:'100%',
    height:'100%'
  }
});


export default ListaPedidos;