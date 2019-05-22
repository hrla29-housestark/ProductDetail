import React from 'react';

class ListEntry extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <img src={this.props.item.imageUrl} alt=""/>
        <div>
          <div>{this.props.item.subClasses}</div>
          <div>{this.props.item.productName}</div>
          <div>
            <span>${this.props.item.price}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ListEntry;