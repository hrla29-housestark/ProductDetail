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

 
  render() {
    return(
      <div className={Style.pdMain}>
        <div>PRODUCT DETAILS</div>
          <ul>
            <li className={this.state.views === 'description' ? Style.pdLiActive : Style.pdLi} 
                onClick={() => {this.changeView('description')}}>
              <button className={this.state.views === 'description' ? Style.pdBtnActive : Style.pdBtn}>DESCRIPTION</button>
            </li>
            <li className={this.state.views === 'specifications' ? Style.pdLiActive : Style.pdLi}  
                onClick={() => {this.changeView('specifications')}}>
              <button className={this.state.views === 'specifications' ? Style.pdBtnActive : Style.pdBtn}>SPECIFICATION</button>
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