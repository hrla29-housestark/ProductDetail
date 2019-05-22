import React from 'react';
import List from './List.jsx';
import axios from 'axios';

class YouMayAlsoLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log(this.props.items, 'from ymal')
    return(
      <div>
        <h3>You May Also Like</h3>
        <div>
          
          <List items={this.props.items}/>
        </div>
        <div>
          <ul>
            <li>2</li>
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
