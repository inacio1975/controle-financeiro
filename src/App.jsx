import React, { useState, useEffect} from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Form from "./components/Form";
import List from "./components/List";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [elementos, setElementos] = useState([]);

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
    };

    return (
        <div className="bg">
            <Header />
            <main >
                <div className="container">
                    <Cards />
                    <Form addElemento={ addElemento }/>
                    <List elementos={ elementos } setElementos={ setElementos } />
                </div>
            </main>
        </div>
    );
};

export default App;
