import React from 'react';
import Style from './Style/Specifications.scss';

class Specifications extends React.Component{
  constructor(props) {
    super(props);
  } 
  render() {
    let storageLen = this.props.data.specification.length;
    let middle = Math.ceil(this.props.data.specification.length/2)
    let storage1 = this.props.data.specification.slice(0, middle)
    let storage2 = this.props.data.specification.slice(middle, storageLen)
    
    return(
      <div>
        <div className={Style.row}>
          <div>
            <ul className={Style.col}>
              {storage1.map((items, index) => {
                return <li key={index} className={Style.item}>{items}</li>
              })}
            </ul>
          </div>
          <div>
            <ul className={Style.col}>
            {storage2.map((items, index) => {
                return <li key={index} className={Style.item}>{items}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default Specifications;