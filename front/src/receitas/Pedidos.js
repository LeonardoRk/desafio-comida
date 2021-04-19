import React from 'react';
import {View, Text, ScrollView, Image,
    TouchableOpacity, StyleSheet  } from 'react-native';

import PedidoItem from './PedidoItem'

const getRevenuesList = async () => {
    return(
        <View>
            <View><Text>oi oi item 1</Text></View>
            <View><Text>oi oi item 2</Text></View>
        </View>
        
    );
}

const reve = ["aqui", "ali", "prato 2", "prato 4"];
const revenues = ["aqui", "ali", "prato 2", "prato 4"];


const Pedidos = ({navigation}) => {
    return(

        <View style={styles.revenue}>
            <ScrollView style={styles.scrollView}>
            {reve.map((item, index) => (
                <View key={item}>
                    <PedidoItem 
                        index={index}
                        item={item}
                        navigation={navigation}>
                    </PedidoItem> 
                    <View style={styles.line}></View> 
                </View>
                
            ))}
            
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
 revenue: {
      flex:1
  },
  scrollView: {
  },
  line: {
      width:'95%',
      height:1,
      borderWidth:1,
      alignSelf:'center',
      borderColor:'#cccbbb'
  }
    
 
});

export default Pedidos;