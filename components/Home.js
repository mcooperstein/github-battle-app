import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render(){
    return (
      <div className="home-container">
        <h1>Github Battle: Battle your friends... and stuff?</h1>
      <Link to="/battle" className="battle-button">Enter Battle Arena</Link>
      </div>
    )
  }
}

export default Home;
