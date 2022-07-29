import React, { useState, useEffect} from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Form from "./components/Form";
import List from "./components/List";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    
    const [entradas, setEntradas] = useState(0);
    const [saidas, setSaidas] = useState(0);
    const [total, setTotal] = useState(0);

    let lista = [
        {id: '01', descricao: "Salário", valor: "150.000", esaida: true},
        {id: '02', descricao: "Alimentação", valor: "50.000", esaida: true},
        {id: '03', descricao: "Teste", valor: "350.000",esaida: false},
      ];

      const [elementos, setElementos] = useState(lista ? lista : []);

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
        let lista = [...elementos, el];
        setElementos(lista);
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
