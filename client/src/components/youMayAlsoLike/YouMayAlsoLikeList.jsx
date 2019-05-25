import React from 'react';
import YouMayAlsoLikeListEntry from './YouMayAlsoLikeListEntry.jsx';
import Style from '../Style/YouMayAlsoLikeList.scss';


class YouMayAlsoLikeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProdcuts: this.props.simlarItems,
      currentImg: [],
      limit: 4
    }
  }

  render() {
    console.log(this.state.relatedProdcuts, '!!!')
    return(
      <div className={Style.list_container}>
      <div className={Style.list_wrapper}>
        {this.state.relatedProdcuts.map((item, index) => {
          return <YouMayAlsoLikeListEntry item={item} key={index}/>
        })}
      </div>
      <button>left</button>
      <button>right</button>
    </div>
    )
  }
}


export default YouMayAlsoLikeList; 