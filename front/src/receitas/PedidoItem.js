import React from 'react';
import {View, Image, Text, 
    TouchableOpacity, StyleSheet} from 'react-native';

const LOGO_IMAGE = require('../../images/prato-arroz-marisco-peq.jpg');


const PedidoItem = (props) => {
    const index = props.index;
    const item = props.item;
    return(

        <View key={index} style={styles.revenueSide}>
            <View style={styles.left}>
                <Image source={LOGO_IMAGE} />
                <View style={styles.revenueResume}>
                    <Text style={styles.title}>
                    aqui o título tem escrito nome</Text>
                    <Text>Hello, {item} from {index}!
                        fjsdlkfa lkijasdlklendo o livro do leo
                        fj lakj 
                        iejfalkj foiasjd lkjwie ofj al 
                        jaoifj wefla
                        sdkfjq iowjelfkasj 
                        dfoiaj okwejlf isdjf alkj ewoifj 
                        aoweijfaweifjawoe
                        flja sw</Text>
                </View>
            </View>
            
            <TouchableOpacity 
                style={[styles.position]}
                    >
                <Text style={styles.buttonText}>
                    Ver receita
                </Text>
            </TouchableOpacity>
            
        </View>
    );
}


const styles = StyleSheet.create({
 revenue: {
      flex:1
  },
  scrollView: {
  },
 
  title: {
      fontWeight:'bold',
      marginBottom: 30
  },
  revenueResume: {
      marginLeft:15
  },
  revenueSide: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      margin:15
  },
  left: {
      flex:0.7,
      flexDirection:'row',
      alignItems:'center'
  },
  position: {
      width:100,
      height:100,
      borderRadius:50,
      backgroundColor:"orange",
      justifyContent:'center',
      alignItems:'center'
      
  },
  buttonText: {
      textAlign: 'center',
      color:"white",
      fontSize:24,
      fontWeight:'bold',
  },
  line: {

  }
});


export default PedidoItem;