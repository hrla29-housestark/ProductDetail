import React from 'react';
import Style from './Description.css';

const Description = (props) => {
  console.log(props.data)
  return(
    <span className={Style.pddMain}>
      <h4>{props.data.productName}</h4>
      <h5>{props.data.descriptionSlogan}</h5>
      <p>{props.data.description}</p>
    </span>
  )
}

export default Description;