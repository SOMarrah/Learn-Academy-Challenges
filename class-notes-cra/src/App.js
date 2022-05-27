import React, { Component } from 'react'
import './App.css'
import FlashCard from './components/FlashCard'
import Capitalize from './components/Capitalize'
import Plate from './components/Plate'



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
      adultMenu: ["collard greens", "steak", "fried okra", "andouille sausage"],
      kidsMenu: ["hot dogs","okra tots", "mac n cheese", "chicken nuggets", "sushi"],
      order: [],
      price:[1, 2, 3, 4],
      prices:0,

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
  takeOrder = (item) => {
    this.setState({order: [...this.state.order, item]})// "..."- .push() - almost the same
  }
  addPrices = (item) =>{
    this.setState({prices: + 1})
  }
  //prices becomes = + current index value of price on each click
  //price.indexOf()
  handleMenu = () => {
    this.takeOrder()
    this.addPrices()
  }
  //crate a method that will process somekind of input(usually from the user) and return to us a change in our state object
  //handle -> means go do this process
  render(){
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
      <h1>Charlie's BBQ!</h1>
      <h2>Adult Menu</h2>
        <Plate
          adultMenu= {this.state.adultMenu}
          takeOrder= {this.takeOrder}
          prices= {this.state.price}
          priceAdd= {this.addPrices}
        />
      <h2>Kid Menu</h2>
        <Plate
          adultMenu= {this.state.kidsMenu}
          takeOrder={this.takeOrder}
          prices= {this.state.price}
          priceAdd= {this.addPrices}
        />
      <h2>🍽 What is your order? 🍽</h2>
      <p>{this.state.prices}</p>
        <ul>
        {this.state.order.map((value, index) =>{
          return <li key={index}>{value}
        </li>})}
        </ul>
      </>

    )
  }
}

export default App

//render() - react life cycle method
//  runs automatically whenever changes are made
//JSX is a hybrid between javascript and HTML that utilizes the DOM (document object model).
