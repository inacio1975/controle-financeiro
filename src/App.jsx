import React, { useState, useEffect} from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Form from "./components/Form";
import List from "./components/List";

import { getRegistros, newRegistro } from './api/registros';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    
    const [entradas, setEntradas] = useState(0);
    const [saidas, setSaidas] = useState(0);
    const [total, setTotal] = useState(0);

    const [elementos, setElementos] = useState([]);

    getRegistros(setElementos);


    useEffect(() => {
      const todasSaidas = elementos
        .filter((item) => item.esaida).map((item) => Number(item.valor.replace(".", "")));

        const todasEntradas = elementos
        .filter((item) => !item.esaida).map((item) => Number(item.valor.replace(".", "")));

        const sumSaidas = todasSaidas.reduce((sum, valor) => sum + valor, 0).toFixed(2);
        const sumEntradas = todasEntradas.reduce((sum, valor) => sum + valor, 0).toFixed(2);
        
        const _total = sumEntradas - sumSaidas;

        setEntradas(sumEntradas);
        setSaidas(sumSaidas);
        setTotal(_total);

    }, [elementos]);

    const addElemento = (el) => {
        newRegistro(el, setElementos);
    };

    return (
        <div className="bg">
            <Header />
            <main >
                <div className="container">
                    <Cards entradas={ entradas } saidas={ saidas } total={ total }/>
                    <Form addElemento={ addElemento }/>
                    <List elementos={ elementos } setElementos={ setElementos } />
                </div>
            </main>
        </div>
    );
};

export default App;
