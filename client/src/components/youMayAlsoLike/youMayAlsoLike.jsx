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
    // this.handleFindSimilarItems = this.handleFindSimilarItems.bind(this);
    // this.handleupdate = this.handleupdate.bind(this);
  }

  // componentDidMount() {
  //   this.handleupdate();

  // }

  // handleupdate() {
  //   this.setState({
  //     simlarItems: this.props.items
  //   })
  // }

  // handleFindSimilarItems() {
  //   console.log(this.state, 'hiiiii');
  //   axios
  //   .get(`/api/youMayAlsoLike/${this.state.data.productType}`)
  //   .then(({data}) => {
  //     this.setState({
  //       items: data,
  //     })
  //   })
  //   .catch(err => console.error(err));
  // }

  render() {
    console.log(this.props.similarItems)
    return(
      <div className={Style.pdMainContainer}>
        <h3 className={Style.product_detail_title}>You May Also Like</h3>
        <div className={Style.row}>
          <YouMayAlsoLikeList simlarItems={this.props.simlarItems}/>
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
