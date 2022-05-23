import React, { Component } from 'react'
import Skill from './components/Skill'
import './App.css'



class App extends Component {
  render(){
    return(
      <>

        <h1>Charlie Job Readiness Tracker</h1>
          <div id="square">
            <h2>Week 1</h2>
            <Skill />
          </div>
          <div id="square">
            <h2>Week 2</h2>
            <Skill />
          </div>
          <div id="square">
            <h2>Week 3</h2>
            <Skill />
          </div>
          <div id="square">
            <h2>Week 4</h2>
            <Skill />
          </div>

      </>
    )
  }
}

export default App

//render() - react life cycle method
//  runs automatically whenever changes are made
//JSX is a hybrid between javascript and HTML that utilizes the DOM (document object model).
