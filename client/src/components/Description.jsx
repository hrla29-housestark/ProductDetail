import React from 'react';
import Style from './Description.scss';

const Description = (props) => {
  // console.log(props.data)
  return(
    <div className={Style.row}>
      <span className={Style.pddMain}>
        <h4>{props.data.productName}</h4>
        <h5>{props.data.descriptionSlogan}</h5>
        <p>{props.data.description}</p>
      </span>
      <span className={Style.imageContainer}>
        <img className={Style.image} src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/d285610e30664900b857a7fa00ed0201_9366/Superstar_Shoes_White_C77124_01_standard.jpg" alt="superstar shoes"/>
      </span>
    </div>
  )
}

export default Description; 