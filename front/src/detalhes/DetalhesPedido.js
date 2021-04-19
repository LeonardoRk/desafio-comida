import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground} from 'react-native';

const DetalhesPedido = ({route}) => {
    const backgroundImage = route.params.backgroundImage;
    console.log(backgroundImage)
    return(
        <ScrollView>
            <Image source={backgroundImage}>
            </Image>
            <Text>Detalhes do pedido</Text>
        </ScrollView>
    );
}

export default DetalhesPedido;