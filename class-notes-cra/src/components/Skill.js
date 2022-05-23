import React, { Component } from 'react'

class Skill extends Component {
  constructor(props){
    super(props)
    this.state = {
      skills: 0,
      backgroundColor: "green",
      color: "orange"
    }
  }
  handleChange = () =>{
    let newSkill = this.state.skills + 1
    this.setState({skills: newSkill})
  }


  render(){
    let {skills, backgroundColor, color} = this.state
    return(
      <>
      <div id="text">
        <p>Skills: {skills}</p>
        <button
          onClick = {this.handleChange}
          style= {{backgroundColor: backgroundColor, color: color}}
        >
        Add that new skill set
        </button>
        </div>
      </>
    )
  }
}
export default Skill
