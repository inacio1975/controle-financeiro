import React from "react";
import { Card } from "react-bootstrap";

const CardItem = ({ label, value }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Subtitle className="mb-5 text-muted">
                    {label}
                </Card.Subtitle>
                <Card.Title>{value} AOA</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default CardItem;