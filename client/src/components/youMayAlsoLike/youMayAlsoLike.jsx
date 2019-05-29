import React from 'react';
import YouMayAlsoLikeList from './YouMayAlsoLikeList.jsx';
import Style from '../Style/YouMayAlsoLike.scss'
import axios from 'axios';

class YouMayAlsoLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarItems: [],
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      similarItems: this.props.similarItems
    }, () => {
      console.log(this.state, 'from youMayAlsoLike')
    })
  }

  render() {
    console.log(this.props.similarItems)
    return(
      <div className={Style.pdMainContainer}>
        <h3 className={Style.product_detail_title}>You May Also Like</h3>
        <div className={Style.row}>
          <YouMayAlsoLikeList 
                        similarItems={this.props.similarItems}
                        productDetailCurrentIdx={this.props.productDetailCurrentIdx}
                        productDetailTranslateValue={this.props.productDetailTranslateValue}
                        handleSimlarItemsScrollRight={this.props.handleSimlarItemsScrollRight}/>
        </div>
      </div>
    )
  }
}

export default YouMayAlsoLike;
