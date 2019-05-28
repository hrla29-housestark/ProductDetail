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
    console.log(this.state.relatedProdcuts)
    return(
      <div className={Style.list_container}>
      <div className={Style.list_wrapper}>
      <div className={Style.right_arrow}>
        <svg className={Style.arrow_icon} viewBox="0 0 10 24" width="5%" height="5%"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M2 5.5L8.5 12 2 18.5"></path></svg>
      </div>
        {this.props.simlarItems.map((item, index) => {
          return <YouMayAlsoLikeListEntry item={item} key={index}/>
        })}
        <span>
        </span>
      </div>
      <button>left</button>
      <button>right</button>
      <div>
          <ul className={Style.li_indicator_wrapper}>
            <li className={Style.li_indicator_item}>
              <span className={Style.li_indicator_dot}></span>
            </li>
            <li className={Style.li_indicator_item}>
              <span className={Style.li_indicator_dot}></span>
            </li>
            <li className={Style.li_indicator_item}>
              <span className={Style.li_indicator_dot}></span>
            </li>
            <li className={Style.li_indicator_item}>
              <span className={Style.li_indicator_dot_selected}></span>
            </li>
          </ul>
        </div>
    </div>
    )
  }
}


export default YouMayAlsoLikeList; 