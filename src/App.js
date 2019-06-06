import React, { Component } from 'react';
import './App.css';

function UserCard (props) {

  let emailInfo =  (
    <div>
    <span>{props.user.email}</span>
    </div>
  );

  let buttonText

  if (props.isHidden) {
    buttonText = "Show Details";
  } else {
    buttonText = "Hide Details";
  }

  return (
  <div style={{ marginBottom: '40px' }}>
      <img src={props.user.picture.large}></img>
    <div>
      <span>{props.user.name.first}</span>
      {' '}
      <span>{props.user.name.last}</span>
    </div>
    <div>
      {props.isHidden ? null : emailInfo}
    </div>
    <button onClick={props.onClick}>{buttonText}</button>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isHidden: true
    };
}

componentDidMount() {
  fetch('https://randomuser.me/api?results=25')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    this.setState({
      results: json.results
    })
  })
}

onClick = (event) => {
  this.setState({
    isHidden: false
  });
}


render() {
  return (
    <div className="App">
      {this.state.results.map((user, index) => 
        <UserCard 
          key={index} 
          user={user} 
          onClick={this.onClick} 
          isHidden={this.state.isHidden} />
      )}
    </div>
  );
}
}

export default App;
