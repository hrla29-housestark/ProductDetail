import React from 'react';
import Style from './Description.css';

const Description = (props) => {
  console.log(props.data)
  return(
    <div className={Style.row}>
      <span className={Style.pddMain}>
        <h4>{props.data.productName}</h4>
        <h5>{props.data.descriptionSlogan}</h5>
        <p>{props.data.description}</p>
      </span>
      <span className={Style.imageContainer}>
        <img className={Style.image} src="https://assets.adidas.com/images/w_600,f_auto,q_auto/8f8956b358934856b278a7fa00ed39ed_9366/Superstar_Shoes_White_C77124.jpg" alt="superstar shoes"/>
      </span>
    </div>
  )
}

export default Description; 