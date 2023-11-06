import { FlatList, StyleSheet, Text } from "react-native";

import useProdutores from '../../../hooks/useProdutores';

import Produtor from './Produtor';
import Topo from "./Topo";

export default function Produtores() {
    const [titulo, produtores] = useProdutores();

    const Header = () => <>
        < Topo />
        <Text style={estilos.titulo}>{ titulo }</Text>
    </>;

    return <FlatList
        data={ produtores }
        renderItem={({item}) => <Produtor produtor={item} />}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={Header}
    />;
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold'
    }
});