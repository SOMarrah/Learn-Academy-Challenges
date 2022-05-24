import React, { Component } from 'react'
//imports are how react files know about one another


//the logic of the component
class FlashCard extends Component{


  render(){


    //the display of our component
    return(
      <>
      <button onClick={this.props.clickMethod}>New Random Word</button>
      <h1>Word: {`${this.props.words[this.props.randomNum]}`}</h1>
      </>
    )
  }
}

export default FlashCard
