import React from 'react';
import YouMayAlsoLikeList from './YouMayAlsoLikeList.jsx';
import Style from '../Style/YouMayAlsoLike.scss'
import axios from 'axios';

class YouMayAlsoLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simlarItems: this.props.items
    }
    
  }

  componentDidMount() {
    this.setState({
      simlarItems: this.props.items
    }, () => console.log(this.state))
  }

  render() {
    console.log(this.state.simlarItems, 'like')
    return(
      <div className={Style.pdMainContainer}>
        <h3 className={Style.product_detail_title}>You May Also Like</h3>
        <div className={Style.row}>
          <YouMayAlsoLikeList simlarItems={this.state.simlarItems}/>
        </div>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default YouMayAlsoLike;
