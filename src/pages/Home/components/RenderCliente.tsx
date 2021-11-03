import React from 'react';
import { TouchableOpacity, Text, StatusBar, View } from 'react-native';
import { Cliente } from '../type/Cliente';
import { useNavigation } from "@react-navigation/native";

type Props = {
    cliente: Cliente;
}

const RenderCliente = ({ cliente } : Props) => {
    

    
return (
    <View style={{backgroundColor:'#5E82A3'}}>
        <TouchableOpacity style={{
            backgroundColor: '#6370B2',
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
            justifyContent: 'center',
            
        }}  >
        <Text style={{ fontSize: 15,
                            justifyContent: 'center',}}>Nome do cliente:</Text>
        <Text style={{ fontSize: 18,
                            justifyContent: 'center',}}>{cliente.nome}</Text>
        <Text style={{ fontSize: 15,
                            justifyContent: 'center',}}>Telefone:</Text>
        <Text style={{ fontSize: 18,
                            justifyContent: 'center',}}>{cliente.telefone}</Text>
        </TouchableOpacity>
    </View>
  )
};

export default RenderCliente;