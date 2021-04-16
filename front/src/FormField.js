import React from 'react';
import { View,
        TextInput,
    StyleSheet,
    Text,
    TouchableOpacity  } from 'react-native';

const FormField = (props) => {
    const placeholder = props.placeholder;
    const image = props.image;

    return(
        <View>
            <TextInput style={[styles.border]}
                placeholder={placeholder}          
             />
        </View>
    )
}

export default FormField;

const styles = StyleSheet.create({
  border: {
      flex:1,
    marginTop:6,
    marginBottom:6,
    borderColor: "#ffffff",
    borderRadius: 6,
    backgroundColor: "#ffffff",
    
  }
});