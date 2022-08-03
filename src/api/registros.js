import axios from "axios";

export const getRegistros = async (setElementos) =>{
    await axios.get('http://localhost/controlefinanceiro/registros/').then(function(response){
        const {elementos} = response.data;
        
        setElementos(elementos);
    });
};

export const newRegistro = async (elemento, setElementos) =>{
    elemento.esaida = elemento.esaida ? 1 : 0;
    await axios.post('http://localhost/controlefinanceiro/registros/create/', elemento).then(function(response){
        const tt = response.data;
        
        getRegistros(setElementos);

        console.log(tt);
    });
};