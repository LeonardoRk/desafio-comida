import React from 'react';
import { View , Text, ScrollView, StyleSheet, Image,
    TouchableOpacity, InputText} from 'react-native';

const ICON_BUSCA = require('../../images/icon-busca.png');


const Busca = () => {
    return(
        <View>
            <Image source={ICON_BUSCA}></Image>
        </View>        
    );
}

export default Busca;