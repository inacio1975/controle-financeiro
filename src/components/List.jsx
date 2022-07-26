import React from "react";
import { FcDown, FcUp } from 'react-icons/fc';
import { BsTrash } from 'react-icons/bs';

const List = ({ elementos, setElementos }) => {

    const deleteItem = (id) => {
        const lista = [...elementos];
        let index = lista.indexOf((el) => el.id === id);
        lista.splice(index, 1);

        setElementos(lista);
    };
    return (
        <table className="table table-bordered bg-white mt-5">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                { !elementos.length ? (<tr><td colSpan={4}>Adicione um elemento</td></tr>) : (
                    elementos.map((element, index) => (
                        <tr key={index}>
                            <th >{element.descricao}</th>
                            <td >{element.valor}</td>
                            <td >{ !element.esaida ? <FcUp /> : <FcDown />}</td>
                            <td style={{ cursor: "pointer" }} onClick={()=> deleteItem(element.id)}><BsTrash /></td>
                        </tr>
                        ))
                ) }
            </tbody>
        </table>
    );
};

export default List;
