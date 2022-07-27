import React, { useState} from "react";

const Form = ({ addElemento }) => {
    const [elemento, setElemento] = useState({});

    const newElement = (e) => {
        e.preventDefault();
        addElemento(elemento);
    };

    const handleDescricaoChange = (e) => {
        const descricao = e.target.value;
        const element = {...elemento, descricao: descricao};
        setElemento(element);
    };

    const handleValorChange = (e) => {
        const valor = e.target.value;
        const element = {...elemento, valor: valor};
        setElemento(element);
    };

    const handleTipoChange = (e) => {
        const tipo = e.target.value;
        const element = {...elemento, tipo: tipo};
        setElemento(element);
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
