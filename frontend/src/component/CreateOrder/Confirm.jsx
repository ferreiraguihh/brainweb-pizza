import React from 'react';
import Pizza from './Pizza';

function Confirm({pizza, isPizzaDaySelect}) {
    return (
        <div className={`container-confirm-order ${isPizzaDaySelect? 'backgroundDay': ''}`}>
                <div style={{fontSize: 25}}>Pizza{isPizzaDaySelect && 'do dia' }</div>
                <Pizza value={pizza} type={true}/>
                {isPizzaDaySelect && <span>Você ganhou {pizza.points} pontos</span>}

        </div>
    );
}

export default Confirm;