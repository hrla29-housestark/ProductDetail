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
      similarItems: [], 
      imageSet: 0,
      productDetailCurrentIdx: 0,
      productDetailTranslateValue: 0
    }
    this.handleFetchPD = this.handleFetchPD.bind(this);
    // this.handleFindSimilarItems = this.handleFindSimilarItems.bind(this);
    this.handleSimlarItemsScrollRight = this.handleSimlarItemsScrollRight.bind(this);
  }

  componentDidMount() {
    this.handleFetchPD();

  }

  handleFetchPD() {
    let id = 2;
    axios
    .get(`./api/productDetails/${id}`)
    .then(({data}) => {
      this.setState({
        data: data[0],
        similarItems: data[0].similarItems, 
        imageSet: data[0].similarItems.length/4
      }, () => {
        console.log(this.state);
      });
      // this.handleFindSimilarItems();
    })
    .catch(err => console.error(err));
  }  

  // handleFindSimilarItems() {
  //   axios
  //   .get(`/api/youMayAlsoLike/${this.state.data.productType}`)
  //   .then(({data}) => {
  //     this.setState({
  //       similarItems: data,
  //     })
  //   })
  //   .catch(err => console.error(err));
  // }

  handleSimlarItemsScrollRight() {
    this.setState(prevState => ({
      productDetailCurrentIdx: prevState.productDetailCurrentIdx + 1
    }))
  }



  render() {
    return(
      <div>
        <div className={Style.container}><ProductDetail data={this.state.data} handleFetchPD={this.handleFetchPD}/></div>
        <div><YouMayAlsoLike 
              similarItems={this.state.similarItems}
              imageSet={this.state.imageSet}
              productDetailCurrentIdx={this.state.productDetailCurrentIdx}
              productDetailTranslateValue={this.state.productDetailTranslateValue}
              handleSimlarItemsScrollRight={this.state.handleSimlarItemsScrollRight}
              /></div>
      </div>
    )
  }
}

export default App; 