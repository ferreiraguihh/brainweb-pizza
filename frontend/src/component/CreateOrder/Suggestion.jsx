import React from 'react';
import Pizza from './Pizza';

function Suggestion({onClick, pizza}) {
  return (
    <div className="container-confirm-order suggestion-pizza" onClick={onClick}>
        Promoção - Pizza do dia
        <span style={{fontSize: 15}}>Receba {pizza.points} pontos</span>
        <Pizza value={pizza} type={false}/>
    </div>
    );
}

export default Suggestion;