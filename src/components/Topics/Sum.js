import React, {Component} from 'react'

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum:null
        }
    }
    newNumber1(val){
    this.setState({
        number1:val
    })
}
    newNumber2(val){
    this.setState({
        number2:val
    })
}
    add(){
    let number1 = this.state.number1
    let number2 = this.state.number2
    let total = Number(number1)+ Number(number2)
    this.setState({sum:total})
}
    render(){
        return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine"  onChange={ (e) => this.newNumber1(e.target.value) }></input>
        <input className="inputLine"  onChange={ (e) => this.newNumber2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.add() }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
        )
    }
}

export default Sum