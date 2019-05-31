import React from 'react';
import Style from '../Style/YouMayAlsoLikeListEntry.scss';

class YouMayAlsoLikeListListEntry extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      likeStatus: false
    }
    this.handleLikeStatus = this.handleLikeStatus.bind(this);
  }

  handleLikeStatus(e) {
    e.preventDefault();
    this.setState({
      likeStatus: !this.state.likeStatus
    })
  }

  render() {
    return(
      <div className={Style.product_card_container}>
        <div className={Style.product_card }>
          <span className={Style.img_wrap}>
            <img className={Style.img_indi} src={this.props.item.imageUrl}/>
            {!this.state.likeStatus ? 
              <svg className={Style.img_heart} onClick={(e) => this.handleLikeStatus(e)} id="wishlist-inactive" viewBox="0 0 20 24" width="7%" height="100%"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></svg> :
              <svg className={Style.img_heart} onClick={(e) => this.handleLikeStatus(e)} id="wishlist-active" viewBox="0 0 20 24" width="7%" height="100%"><path fill="currentColor" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></svg>
            }
          </span>
          
          <div className={Style.prodcut_card_detail_container}>
            <div className={Style.product_card_subClasses}>{this.props.item.subClasses}</div>
              <div className={Style.product_card_detail_main}>
                <div className={Style.product_card_product_name}>{this.props.item.productName}</div>
                  <span>${this.props.item.price}</span>
                </div>
                <div className={Style.stars}>
                  <div className={Style.emptyStars}></div>
                  <div className={Style.fullStars}></div>
                </div>
              </div>
        </div>
      </div>
    )
  }
}

export default YouMayAlsoLikeListListEntry;