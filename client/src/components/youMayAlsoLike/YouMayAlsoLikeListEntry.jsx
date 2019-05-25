import React from 'react';
import Style from '../Style/YouMayAlsoLikeListEntry.scss';

class YouMayAlsoLikeListListEntry extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      position: this.props.key,
    }
  }

  render() {
    return(
      <div className={Style.product_card_container}>
        <div className={Style.product_card }>
          <img src={this.props.item.imageUrl}/>
          <div className={Style.prodcut_card_detail_container}>
            <div className={Style.product_card_subClasses}>{this.props.item.subClasses}</div>
              <div className={Style.product_card_detail_main}>
                <div className={Style.product_card_product_name}>{this.props.item.productName}</div>
                  <span>${this.props.item.price}</span>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default YouMayAlsoLikeListListEntry;