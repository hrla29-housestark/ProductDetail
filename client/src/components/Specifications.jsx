import React from 'react';
import Style from './Specifications.scss';

const Specifications = (props) => {
  return(
    <div>
      <div>
        <ul>
          {props.data.specification.map((items, index) => {
            return <li key={index} className={Style.specificationsLi}>{items}</li>
          })}
        </ul>
        <img src="" alt=""/>
      </div>
    </div>
  )
};

export default Specifications;