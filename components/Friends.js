import React from 'react';

class Friends extends React.Component {
  render(){
    return (
      <div>
        <h3>List of Friends:</h3>
        <ul>
          {this.props.friends.map((friend)=><li key={friend.name}>{friend.name}</li>)}
        </ul>
        <h3>UCSC Friends:</h3>
        <ul>
          {this.props.friends.filter((friend)=>{
            return friend.collegeFriend===true
          }).map((bud)=><li key={bud.name}>{bud.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default Friends;
