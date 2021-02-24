import React from 'react';

// import { Container } from './styles';
import iconPizza from '../../img/pizzaCalabresa.jpg'
import { useSelector } from 'react-redux'

function Pizza({ value, type }) {
    const { pasta, size, filling, edge} = useSelector((state) => state);

    const pizzaPasta = pasta.find(p => p.id === value.pasta[0]);
    
    const pizzaSize = size?.find(p => p.id === value.size[0]);
    const pizzaEdge = edge.find(p => p.id === value.edge[0]);

    const fillings = value.filling.map(f => filling.find(cf => cf.id === f))

    const newPrice = pizzaSize?.price + pizzaEdge?.price

    return (
        <div className="container-info-confirm-order">
            <div className="container-pizza-info">
                <div>
                    <p>Tamanho:</p>
                    <span>{pizzaSize?.title}</span>
                </div>
                <div>
                    <p>Massa:</p>
                    <span>{pizzaPasta?.title}</span>
                </div>
                {type &&<div>
                    <p>Recheio:</p>
                    <div className="container-fillings-title">

                    {fillings?.map(rc => (
                        <span key={rc.id}>{rc?.title + ', '}</span>
                    ))}
                    </div>
                </div>}
                <div>
                    <p>Borda:</p>
                    <span>{pizzaEdge?.title}</span>
                </div>
                <div>
                    <p>Valor:</p>
                    <span>R${newPrice}</span>
                </div>

            </div>
            <img src={iconPizza} style={{ width: 90 }} />

        </div>
    )
}

export default Pizza;