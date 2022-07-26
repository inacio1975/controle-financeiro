import React from "react";
import { FcDown, FcUp } from 'react-icons/fc';
import { BsTrash } from 'react-icons/bs';

const List = () => {
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
                <tr>
                    <th >Salário</th>
                    <td >150.000</td>
                    <td ><FcUp /></td>
                    <td ><BsTrash/></td>
                </tr>
                <tr>
                    <th >Alimentação</th>
                    <td >50.000</td>
                    <td ><FcDown /></td>
                    <td ><BsTrash/></td>
                </tr>
                <tr>
                    <th >Teste</th>
                    <td >150.000</td>
                    <td ><FcDown /></td>
                    <td ><BsTrash/></td>
                </tr>
            </tbody>
        </table>
    );
};

export default List;
