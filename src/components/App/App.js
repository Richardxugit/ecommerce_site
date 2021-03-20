import React, { Component } from 'react';

import getProdcts from '../../services/apis/getProdcts';

class App extends Component {

  componentDidMount(){
    getProdcts()
  }

  render() {
    return (
      <div className="App">
        APP
      </div>
    );
  }
}

export default App;
