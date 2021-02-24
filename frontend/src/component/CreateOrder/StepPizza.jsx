import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';

function InfoPizza(props) {
    const{data, changeValueInput, values} = props
  
    return (
    <>
    {data?.map(info =>(
      <div className="container-input-check" key={info.id}>
      <div className="container-info-input-check">
          <p>{info.title}</p>
          <span>{info.subtitle} {info?.price ? `R$${info.price}`: ''}</span>
      </div>
      <Checkbox
        value={info.id}
        checked={(values.includes(info.id))}
        onChange={(e)=> {
          changeValueInput(info.id, e.target.checked)
        }}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
  </div>
    ))}
    </>
    );
}

export default InfoPizza;