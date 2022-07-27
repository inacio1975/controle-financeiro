import React from "react";
import CardItem from "./Card";

const Cards = () => {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
        <div className="col">
          <CardItem label="Entrada" value="150.000" />
        </div>
        <div className="col">
          <CardItem label="Saída" value="50.000" />
        </div>
        <div className="col pe-0">
          <CardItem label="Total" value="100.000" />
        </div>
      </div>
    );
};

export default Cards;
