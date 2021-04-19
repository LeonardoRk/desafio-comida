import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Order = () => {
  return (
    <View style={[styles.order]}>

      <View style={[styles.left]}>
        <Text style={[styles.leftUp]}>
          1 {/*proxima quantidade de pedidos*/}
        </Text>
      <Text style={[styles.leftDown]} >
      Novo pedido</Text>
      </View>

      <View style={styles.verticleLine}></View>
     


      <Text style={[styles.right]} >
      Por favor faça o login para ver o pedido
      e ter acesso à receita com o modo
      de preparo</Text>
    </View>
  
  );
}


const styles = StyleSheet.create({
  borderYellow: {
    borderWidth:3,
    borderColor:"#cdee4d"
  },
  borderGray: {
    borderWidth:5,
    borderColor:"#cccccc"
  },
  order: {
    alignSelf:'center',
    width:'70%',
    height:'30%',
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
    backgroundColor: "#ffffff", 
    marginBottom: 50,
    marginTop: '5%',
  },
  
  left: {
    flex:0.3,
    fontSize: 24,
    alignItems: "center",
    margin:20
  },
  leftUp: {
    flex:1,
    fontSize: 60,
    color:"orange"
  },
  leftDown: {
    flex:1,
    fontSize: 20,
    fontWeight: 'bold',
    color: "orange"
  },
  right: {
    flex:0.6,
    fontSize: 12,
    color: "black",
    alignSelf:"center",
    padding:10,
    fontSize:14,
    fontStyle: 'italic',
  },
  verticleLine: {
    alignSelf:'center',
    height: '80%',
    width: 1,
    backgroundColor: '#909090',
  }
  /* arrow-up: {
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  border-bottom: 5px solid black;
  }, */

  /* arrowDown: {
  width: 0; 
  height: 0; 
  borderLeft: 20px solid transparent;
  borderRight: 20px solid transparent;
  
  border-top: 20px solid #f00;
  }, */

 /*  arrowRight: {
  width: 0; 
  height: 0; 
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;
  
  border-left: 60px solid green;
  } */


});


export default Order;