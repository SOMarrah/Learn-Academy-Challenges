import React, { Component } from 'react'
import './App.css'
import FlashCard from './components/FlashCard'
import Capitalize from './components/Capitalize'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cohort: "Charlie",
      year:  2022,
      vocabArray: ["Argument", "Built-in-method", "Index", "camelCase", "Variable declaration", "variable", "type coercion", "symbols", "null", "undefined", "concatenation","float","string", "number", "JavaScript", "composite data type", "primitive data type", "Boolean", "modulo operator", "bang operator", "logical operator", "relational operator", "equality operator", "assignment operator", "conditional statement", "string interpolation", "else", "if",
      "state", "setState()", "constructor method", "dumb/pure/display component", "smart/impure/logic component", "React", "component", "DOM", "JSX", "render", "return", "class component", "component call", "kebob-case", "localhost:3000", "import", "export"],
      randNum: 0,
      name: "",

    }
  }
  handleClick = () => {
    let randomNum = Math.floor(Math.random() * this.state.vocabArray.length)
    //updates the state object's key with new values.
    this.setState({randNum: randomNum})
  }
  handleChange = (e) =>{
    // console.log(e); e(event) is an object provided by the attribute of onChange
    // console.log(e.target);
    console.log(e.target.value); //provides that value in our input
    this.setState({name: e.target.value})

  }
  //crate a method that will process somekind of input(usually from the user) and return to us a change in our state object
  //handle -> means go do this process
  render(){
    console.log(this.state.name);
    return(
      <>

      <FlashCard
      words={this.state.vocabArray}
      randomNum={this.state.randNum}
      clickMethod={this.handleClick}/>
      <div>
      <Capitalize
      name= {this.state.name}
      />
      <input
        type="text"
        onChange={this.handleChange}
      />
      </div>

      </>

    )
  }
}

export default App

//render() - react life cycle method
//  runs automatically whenever changes are made
//JSX is a hybrid between javascript and HTML that utilizes the DOM (document object model).
