import React, { Component } from 'react';
import List from '../components/List/List';
import Cart from '../components/Cart/Cart';
class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <List />
        </main>
        <Cart />
      </div>
    );
  }
}

export default App;