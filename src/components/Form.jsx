import React, { useState} from "react";

const Form = ({ addElemento }) => {
    const [desc, setDesc] = useState("");
    const [valor, setValor] = useState("");
    const [esaida, setEsaida] = useState(false);

    const generateId = () => Math.round(Math.random() * 1000);

    const newElement = (e) => {
        e.preventDefault();
        if(!desc || !valor){
            alert("Descrição e valor é obrigatório");
            return;
        }else if(valor < 1){
            alert("Valor tem que ser poitivo");
            return;
        }

        const elemento = {
            id: generateId(),
            descricao: desc,
            valor: valor,
            esaida: esaida,
        };
        addElemento(elemento);
        setDesc("");
        setValor("");
    };

    const handleDescricaoChange = (e) => {
        const descricao = e.target.value;
        setDesc(descricao);
        console.log(desc);
    };

    const handleValorChange = (e) => {
        const valor = e.target.value;
        setValor(valor);
    };

    const handleTipoChange = (e) => {
        const tipo = e.target.value;
        setEsaida(tipo==="saida");
    };

    return (
        <form className="row g-3 bg-white mt-5 pb-4">
            <div className="col-md-6">
                <div className="row m-0">
                    <div className="col-md">
                        <label htmlFor="inputDescricao" className="form-label">
                            Descrição
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputDescricao"
                            onChange={handleDescricaoChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputDescricao" className="form-label">
                            Valor
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputValor"
                            onChange={handleValorChange}
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
              <div>&nbsp;</div>
                <div className="form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="tbTipoEntrada"
                        name="tbTipo"
                        value="entrada"
                        onChange={handleTipoChange}
                        
                    />
                    <label className="form-check-label mx-2" htmlFor="tbTipoEntrada">
                        Entrada
                    </label>
                </div>
                <div className="form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="tbTipoSaida"
                        value="saida"
                        name="tbTipo"
                        onChange={handleTipoChange}
                    />
                    <label className="form-check-label mx-2" htmlFor="tbTipoSaida">
                        Saida
                    </label>
                </div>
            </div>
            <div className="col-md">
                <div>&nbsp;</div>
              <button type="button" className="btn btn-secondary" onClick={newElement}>Adicionar</button>
            </div>
        </form>
    );
};

export default Form;
