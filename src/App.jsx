import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Form from "./components/Form";
import List from "./components/List";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <div className="bg">
            <Header />
            <main >
                <div className="container">
                    <Cards />
                    <Form />
                    <List />
                </div>
            </main>
        </div>
    );
};

export default App;
