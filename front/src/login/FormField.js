import React from 'react';
import { View,
        TextInput,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity  } from 'react-native';

const FormField = (props) => {
    const placeholder = props.placeholder;
    const image = props.image;
    const change = props.changeValue;

    return(
        <View style={styles.row}>
            <Image source={image} />
            <TextInput style={[styles.border]}
                placeholder={placeholder}    
                onChangeText={(value) => change(value) }     
             />
        </View>
    )
}

export default FormField;

const styles = StyleSheet.create({
  border: {

  },
  row: {
      flexDirection:"row",
      alignItems:"center",
      backgroundColor: "#ffffff",
      marginBottom:"5%"
  }
});