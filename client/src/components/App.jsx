import React from 'react';
import Style from './App.scss';
import ProductDetail from './ProductDetail.jsx';
import YouMayAlsoLike from './youMayAlsoLike/YouMayAlsoLike.jsx';
import axios from 'axios';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      data: [],
      selectedProduct: [],
      items: []
    }
    this.handleFetchPD = this.handleFetchPD.bind(this);
    this.handleFindSimilarItems = this.handleFindSimilarItems.bind(this);
  }

  handleFetchPD() {
    let id = 2;
    axios
    .get(`./api/productDetails/${id}`)
    .then(({data}) => {
      this.setState({
        data: data[0],
      });
      this.handleFindSimilarItems();
    })
    .catch(err => console.error(err));
  }  

  handleFindSimilarItems() {
    this.state.data
    // console.log(this.state.targetType, 'here')
    axios
    .get(`/api/youMayAlsoLike/${this.state.data.productType}`)
    .then(({data}) => {
      this.setState({
        items: data,
      }, () => {console.log(this.state.items)})
    })
    .catch(err => console.error(err));
  }

  render() {
    return(
      <div>
        <div className={Style.test}>hi</div>
        <div><ProductDetail data={this.state.data} handleFetchPD={this.handleFetchPD}/></div>
        <div><YouMayAlsoLike items={this.state.items}/></div>
      </div>
    )
  }
}

export default App; 