import React, { Component } from 'react'
//imports are how react files know about one another


//the logic of the component
class Capitalize extends Component{

  capsMethod = (userInput) =>{
    return userInput.toUpperCase()
  }


  render(){


    //the display of our component
    return(
      <>
      <h3>HELLO I SEE YOUR NAME IS: </h3>
      <p>{this.capsMethod(this.props.name)}</p>
      </>
    )
  }
}

export default Capitalize
