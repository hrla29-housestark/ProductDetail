import React from 'react';
import Style from './ProductDetail.scss';
import Description from './Description.jsx';
import Specifications from './Specifications.jsx';

import axios from 'axios';

class ProductDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      views: 'description',
      data: []
    };
    this.changeView = this.changeView.bind(this);
    this.renderViews = this.renderViews.bind(this);
    this.setStyle = this.setStyle.bind(this);
    // this.handleFetchPD = this.handleFetchPD.bind(this);
  }

  componentDidMount() {
    this.props.handleFetchPD();
  }

  // handleFetchPD() {
  //   let id = 2;
  //   axios
  //   .get(`./api/productDetails/${id}`)
  //   .then(({data}) => {
  //     this.props.handleSelectedProduct(data);
  //     this.setState({
  //       data: data[0]
  //     }, () => {console.log(data)});
  //   })
  // }  

  changeView(option) {
    this.setState({
      views: option
    });
  }

  renderViews() {
    if (this.state.views === 'description') {
      return <Description data={this.props.data}/>;
    } else if (this.state.views === 'specifications') {
      return <Specifications data={this.props.data}/>
    }
  }

  setStyle(options, Active, nonActive) {
    return this.state.views === options ? Active : nonActive
  }
 
  render() {
    return(
      <div className={Style.pdMain}>
        <div>PRODUCT DETAILS</div>
          <ul>
            <li className={this.setStyle('description', Style.pdLiActive, Style.pdLi)} 
                onClick={() => {this.changeView('description')}}>
              <button className={this.setStyle('description', Style.pdBtnActive, Style.pdBtn)}>DESCRIPTION</button>
            </li>
            <li className={this.setStyle('specifications', Style.pdLiActive, Style.pdLi)}  
                onClick={() => {this.changeView('specifications')}}>
              <button className={this.setStyle('specifications', Style.pdBtnActive, Style.pdBtn)}>SPECIFICATION</button>
            </li>
          </ul>
          <div>
            {this.renderViews()}
          </div>
      </div>
    )
  }
}

export default ProductDetail;