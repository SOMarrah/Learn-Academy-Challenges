import React, { Component } from 'react'

class Plate extends Component{



  render(){
    return(
      <>
      <table>
        <tr>
        <th>Food</th>
        <th>Price</th>
        </tr>
        <tr>
      {this.props.adultMenu.map((value, index) => {
        return(
          <tr key={index}>
            <button onClick={ () => this.props.takeOrder(value)}>
              {value}
            </button>
          </tr>
        )
      })}
      <td>
      {this.props.prices.map(value => {
        return(
          <tr>
            <button onClick={ () => this.propse.priceAdd(value)}>
            {value} </button>
          </tr>
        )
      })}
      </td>
      </tr>
      </table>
      </>

    )
  }
}



export default Plate
