import React, { Component } from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { withRouter } from 'react-router';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/*
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={screen_id} />
        </Router>
      </div>
    );
  }
}
*/

// function Home() {
//   let value=1;
//   return (
//     <div>
//       <h2>practice routing</h2>
//       <ul>
//         <li>
//           <Link to="/a">A</Link>
//         </li>
//         <li>
//           <Link to="/b">B</Link>
//         </li>
//         <input type="text" value="hoge" onChange={() => console.log(value)}></input>
//         <button to="/a">button</button>
//       </ul>
//     </div>
//   );
// }

function screen_id({match}) {
  let a = 1;
  return (
    <div>
      <h2>{match.params.id}</h2>
      {/* <h3>a</h3> */}
    </div>
  );
}



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route path={'/:id'} component={About}/>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

// class About extends React.Component {
//   handleToAboutPage = () => {
//     this.props.history.push('/about')
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleToAboutPage}>
//           aboutページへ遷移する
//         </button>
//       </div>
//     )
//   }
// }
function About({match})
{ 
  return (
    <h2>{match.params.id}</h2>
  )
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleToAboutPage = () => {
    this.props.history.push('/'+this.state.value)
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        {/* <input type="submit" value="Submit" /> */}
        <button onClick={this.handleToAboutPage}>
          次のページへ遷移する
        </button>
      </div>
    )
  }
}


export default App