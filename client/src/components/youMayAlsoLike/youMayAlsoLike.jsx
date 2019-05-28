import React from 'react';
import YouMayAlsoLikeList from './YouMayAlsoLikeList.jsx';
import Style from '../Style/YouMayAlsoLike.scss'
import axios from 'axios';

class YouMayAlsoLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simlarItems: this.props.items,
      data: this.props.data
    }
  }
  componentDidMount() {
    this.setState({
      simlarItems: this.props.items
    }, () => {
      console.log(this.state, 'List')
    })
  }
  render() {
    console.log(this.props.simlarItems, 'also list');
    return(
      <div className={Style.pdMainContainer}>
        <h3 className={Style.product_detail_title}>You May Also Like</h3>
        <div className={Style.row}>
          <YouMayAlsoLikeList simlarItems={this.props.simlarItems}/>
        </div>
      </div>
    )
  }
}

export default YouMayAlsoLike;
