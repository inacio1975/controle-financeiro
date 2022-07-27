import React from "react";
import CardItem from "./Card";

const Cards = ({ entradas, saidas, total}) => {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
        <div className="col">
          <CardItem label="Entrada" value={entradas} />
        </div>
        <div className="col">
          <CardItem label="Saída" value={saidas} />
        </div>
        <div className="col pe-0">
          <CardItem label="Total" value={total} />
        </div>
      </div>
    );
};

export default Cards;
