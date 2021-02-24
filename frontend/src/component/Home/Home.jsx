import React from 'react';

import './Home.css'

import { useHistory } from "react-router-dom";

const Home = () => {
    let history = useHistory();
    
    const OrderClick = () => {
        history.push('order')
    }

    return (
        <div className="container-home">
            <div className="container-info-home">
                <h1 className="font-mobile">Olá, seja bem-vindo a pizzaria Brainweb!</h1>
                <button onClick={OrderClick}>Faça seu Pedido aqui</button>
            </div>
        </div>
    );
}

export default Home;