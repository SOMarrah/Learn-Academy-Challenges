import React, { Component } from 'react'
import './App.css'
import FlashCard from './components/FlashCard'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cohort: "Charlie",
      year:  2022,
      vocabArray: ["Argument", "Built-in-method", "Index", "camelCase", "Variable declaration", "variable", "type coercion", "symbols", "null", "undefined", "concatenation","float","string", "number", "JavaScript", "composite data type", "primitive data type", "Boolean", "modulo operator", "bang operator", "logical operator", "relational operator", "equality operator", "assignment operator", "conditional statement", "string interpolation", "else", "if",
      "state", "setState()", "constructor method", "dumb/pure/display component", "smart/impure/logic component", "React", "component", "DOM", "JSX", "render", "return", "class component", "component call", "kebob-case", "localhost:3000", "import", "export"],

      randimal: 0,

    }
  }
  handleClick = () => {
    let randomNum = Math.floor(Math.random() * this.state.vocabArray.length)
    //updates the state object's key with new values.
    this.setState({randimal: randomNum})
  }
  //crate a method that will process somekind of input(usually from the user) and return to us a change in our state object
  //handle -> means go do this process
  render(){
    return(
      <>

      <FlashCard
      words={this.state.vocabArray}
      randomNum={this.state.randimal}
      clickMethod={this.handleClick}/>

      <FlashCard
      words={this.state.vocabArray}
      randomNum={this.state.randimal}
      clickMethod={this.handleClick}/>

      </>

    )
  }
}

export default App

//render() - react life cycle method
//  runs automatically whenever changes are made
//JSX is a hybrid between javascript and HTML that utilizes the DOM (document object model).
