import React from 'react';

class Profile extends React.Component {
  render(){
    return (
      <div>
        <img src={this.props.picture}/>
        <h1>{this.props.name}</h1>
      <h3>{this.props.username}</h3>
      </div>
    )
  }
}

export default Profile;
