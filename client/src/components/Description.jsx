import React from 'react';
import Style from './Style/Description.scss';

const Description = (props) => {
  return(
    <div className={Style.row}>
      <div className={Style.product_details}>
        <div className={Style.product_details_heading}>{props.data.productName}</div>
        <h5 className={Style.product_details_ad}>{props.data.descriptionSlogan}</h5>
        <p className={Style.product_details_descriptions}>{props.data.description}</p>
      </div>
      <span className={Style.product_details}>
        <img className={Style.image} src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/d285610e30664900b857a7fa00ed0201_9366/Superstar_Shoes_White_C77124_01_standard.jpg" alt="superstar shoes"/>
      </span>
    </div>
  )
}

export default Description; 