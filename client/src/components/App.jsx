import React from 'react';
import Style from './App.css';
import Description from './Description.jsx';
import Specifications from './Specifications.jsx';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      views: 'description'
    };
    this.changeView = this.changeView.bind(this);
    this.renderViews = this.renderViews.bind(this);
    this.setStyle = this.setStyle.bind(this);
  }

  changeView(option) {
    this.setState({
      views: option
    });
  }

  renderViews() {
    if (this.state.views === 'description') {
      return <Description />;
    } else if (this.state.views === 'specifications') {
      return <Specifications />
    }
  }

  setStyle(options, Active, nonActive) {
    return this.state.views === options ? Active : nonActive
  }
 
  render() {
    return(
      <div className={Style.pdMain}>
        <div>PRODUCT DETAILS</div>
          <ul>
            <li className={this.setStyle('description', Style.pdLiActive, Style.pdLi)} 
                onClick={() => {this.changeView('description')}}>
              <button className={this.setStyle('description', Style.pdBtnActive, Style.pdBtn)}>DESCRIPTION</button>
            </li>
            <li className={this.setStyle('specifications', Style.pdLiActive, Style.pdLi)}  
                onClick={() => {this.changeView('specifications')}}>
              <button className={this.setStyle('specifications', Style.pdBtnActive, Style.pdBtn)}>SPECIFICATION</button>
            </li>
          </ul>
          <div>
            {this.renderViews()}
          </div>
      </div>
    )
  }
}

export default App;