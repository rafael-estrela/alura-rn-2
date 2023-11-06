import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({ onPress, desabilitada, preenchida, grande }) {
    const getImagem = () => {
        if (preenchida) return estrela;
        return estrelaCinza;
    };

    const estilos = estilosFuncao(grande);

    return <TouchableOpacity
            onPress={onPress}
            disabled={desabilitada}>
        <Image style={estilos.estrela} source={getImagem()}/>
    </TouchableOpacity>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12
    }
});