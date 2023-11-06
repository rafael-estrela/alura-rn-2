import { useEffect, useState } from 'react';

import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores() {
    const [titulo, setTitulo] = useState('');
    const [produtores, setProdutores] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        retorno.lista.sort((a, b) => a.distancia > b.distancia ? 1 : -1)

        setTitulo(retorno.titulo)
        setProdutores(retorno.lista)
    }, []);

    return [titulo, produtores];
}