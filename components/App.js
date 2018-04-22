import React, {Component} from 'react';
import Popular from './Popular';

class App extends Component {
  render(){
    return (
      <div className="container">
        <Popular />
      </div>
    )
  }
}

export default App;


/*
class App extends Component {
  render(){
    var name = "Marc Cooperstein"
    var friends = [{name:"Knowles",collegeFriend:false}, {name:"Neema",collegeFriend:false}, {name:"Juno",collegeFriend:false}, {name:"Aichelen",collegeFriend:true}, {name:"Andrew",collegeFriend:true}, {name:"Samm",collegeFriend:false}]
    return (
      <div>
        <Profile username="mcooperstein" picture={"https://avatars.githubusercontent.com/mcooperstein?size="} name={name}/>
      <Friends friends={friends}/>
      </div>
    )
  }
}
*/
