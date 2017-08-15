import React, { Component } from 'react';

import List from './List';
import ListForm from './ListForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ListForm />  
        <List list={this.props.list}/>
        
      </div>
    );
  }
}

export default App;
