import React from 'react';
import Style from './App.css';

class App extends React.Component{
  constructor() {
    super();
  }
  render() {
    return(
      <div className={Style.pdMain}>
        <div>PRODUCT DETAILS</div>
          <ul>
            <li className={Style.pdLi}>
              <button className={Style.pdBtn}>DESCRIPTION</button>
            </li>
            <li className={Style.pdLi}>
              <button className={Style.pdBtn}>SPECIFICATION</button>
            </li>
          </ul>
      </div>
    )
  }
}

export default App;