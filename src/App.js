import React, { Component } from 'react';
import NavBar from './components/navbar';
import PersonalDetail from './components/personalDetail'
import MainSections from './components/mainSections'
import SideSections from './components/sideSections'
// import './App.css';

class App extends Component {
   
  render() {
     return (
      <React.Fragment>
        <NavBar />
        <main className="container">
            <PersonalDetail />    
            <div className="row">
                <div className="col-md-9">
                    <MainSections /> 
                </div>
                <div className="col-md-3">
                    <SideSections />
                </div>
            </div>
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
