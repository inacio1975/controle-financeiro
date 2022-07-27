import React, { useState, useEffect} from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Form from "./components/Form";
import List from "./components/List";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [elementos, setElementos] = useState([]);
    const [entradas, setEntradas] = useState(0);
    const [saidas, setSaidas] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
      let lista = [
        {id: '01', descricao: "Salário", valor: "150.000", tipo: "saida"},
        {id: '02', descricao: "Alimentação", valor: "50.000", tipo: "saida"},
        {id: '03', descricao: "Teste", valor: "350.000", tipo: "entrada"},
      ];

      setElementos(lista);
    }, []);

    const addElemento = (el) => {
        let lista = [...elementos];
        el.id = lista.length + 1;
        lista.push(el);
        setElementos(lista);

        setEntradas(sumEntradas());
        setTotal(entradas - saidas);
    };

    const sumEntradas = () => {
        let lista = [...elementos];

        let sum = 0;
        lista.forEach((el) => {
            if(el.tipo == "entrada"){
                sum += Number(el.valor); 
            }
        });

        return sum;
    };

    const sumSaida = () => {
        let lista = [...elementos];

        let sum = 0;
        lista.forEach((el) => {
            if(el.tipo == "saida"){
                sum += Number(el.valor); 
            }
        });

        setSaidas(sum);
        setTotal(entradas - saidas);
    };

    return (
        <div className="bg">
            <Header />
            <main >
                <div className="container">
                    <Cards entradas={ entradas } saidas={ saidas } total={ total }/>
                    <Form addElemento={ addElemento }/>
                    <List elementos={ elementos } setElementos={ setElementos } sumSaida={ sumSaida } />
                </div>
            </main>
        </div>
    );
};

export default App;
