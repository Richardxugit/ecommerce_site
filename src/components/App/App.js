import React, { Component } from 'react';
import List from '../components/List/List';
import Cart from '../components/Cart/Cart';
import Navbar from './Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <List />
        </main>
        <Cart />
      </div>
    );
  }
}

export default App;