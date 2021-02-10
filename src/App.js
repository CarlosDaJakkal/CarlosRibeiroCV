import React, { Component } from 'react';
import NavBar from './components/navbar';
import MainSections from './components/mainSections'
import SideSections from './components/sideSections'
// import './App.css';

class App extends Component {
   
  render() {
     return (
      <React.Fragment>
        <NavBar />
        <main className="parent-container m-5">
          <div>
            <div className="float-left">
              <h1>Carlos M. P. Ribeiro</h1>
              <h3>Software Engineer</h3>
            </div>
            <div className="float-right">
              <img className="" src="logo192.png" alt="Logo" />
            </div>
          </div>
          <div className="container d-flex row-cols-2">
            <MainSections className="parent-container float-left" /> 
            <SideSections className="parent-container float-right" />
          </div>
        </main>
      </React.Fragment>
  );
  }
}
 
export default App;
