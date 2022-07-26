import React from "react";

const Form = () => {
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
                        name="tbTipo"
                    />
                    <label className="form-check-label mx-2" htmlFor="tbTipoSaida">
                        Saida
                    </label>
                </div>
            </div>
            <div className="col-md">
                <div>&nbsp;</div>
              <button type="button" className="btn btn-secondary">Adicionar</button>
            </div>
        </form>
    );
};

export default Form;
