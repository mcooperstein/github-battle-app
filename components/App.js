import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
import Navbar from './Navbar';


class App extends Component {
  render(){
    return (
      <Router>
        <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/popular" component={Popular}/>
          <Route exact path="/battle" component={Battle}/>
          <Route path="/battle/results" component={Results}/>
          <Route render={()=>{
              return <p>Not Found</p>
            }} />
        </Switch>
        </div>
      </Router>
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
