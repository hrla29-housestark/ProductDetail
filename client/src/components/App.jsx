import React from 'react';
import Style from './Style/App.scss';
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

  componentDidMount() {
    this.handleFetchPD();
    // this.handleFindSimilarItems();
  }

  handleFetchPD() {
    let id = 2;
    axios
    .get(`./api/productDetails/${id}`)
    .then(({data}) => {
      this.setState({
        data: data[0],
      }, () => { this.handleFindSimilarItems() });
    })
    .catch(err => console.error(err));
  }  

  handleFindSimilarItems() {
    axios
    .get(`/api/youMayAlsoLike/${this.state.data.productType}`)
    .then(({data}) => {
      this.setState({
        items: data,
      })
    })
    .catch(err => console.error(err));
  }

  render() {
    return(
      <div>
        <div className={Style.container}><ProductDetail data={this.state.data} handleFetchPD={this.handleFetchPD}/></div>
        <div><YouMayAlsoLike items={this.state.items}/></div>
      </div>
    )
  }
}

export default App; 