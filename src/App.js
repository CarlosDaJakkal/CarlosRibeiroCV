import logo from './logo.svg';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters'
import './App.css';

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
};

handleIncrement = (counter) => {
    const arr = [...this.state.counters];
    const index = arr.indexOf(counter);

    arr[index] = { ...counter };
    arr[index].value++;

    this.setState({ counters: arr });
};

handleDelete = (counterId) => {
    const arr = this.state.counters.filter((c) => c.id !== counterId);

    this.setState({ counters: arr });
};

handleReset = () => {
    console.log("resetting");
    const arr = this.state.counters.map((c) => {
        c.value = 0;
        return c;
    });
    console.log("arr", arr);
    this.setState({ counters: arr });
};
  render() {
     return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete} 
          />
        </main>
      </React.Fragment>
  );
  }
}
 
export default App;
