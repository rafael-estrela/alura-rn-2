import { useMemo, useReducer } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Estrelas from '../../../componentes/Estrelas';

const distanciaEmMetros = (distancia) => `${distancia}m`;

export default function Produtor({ produtor }) {
    const [selecionado, inverterSelecionado] = useReducer((selecionado) => !selecionado, false);
    const distanciaTexto = useMemo(() => distanciaEmMetros(produtor.distancia), [produtor.distancia]);

    return <TouchableOpacity style={estilos.cartao} onPress={inverterSelecionado}>
        <Image style={estilos.imagem} accessibilityLabel={produtor.nome} source={produtor.imagem}/>
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{produtor.nome}</Text>
                <Estrelas quantidade={produtor.estrelas} editavel={selecionado} grande={selecionado}/>
            </View>
            <Text style={estilos.distancia}>{distanciaTexto}</Text>
        </View>
    </TouchableOpacity>;
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        // ANDROID
        elevation: 4,
        // IOS
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginStart: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginStart: 8,
        marginVertical: 16,
        marginEnd: 16
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
        color: '#A3A3A3'
    }
});