import React, {Component} from 'react'

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            unfiltered:  ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filtered: []
        }
    }
onClick(val){
    this.setState({userInput:val})
}

filtered(userInput){
    let unfiltered = this.state.unfiltered;
    let newFiltered = [];
    
    for (let i = 0; i < unfiltered.length; i++){
        if (unfiltered[i].includes(userInput)){
            newFiltered.push(unfiltered[i]);
        }
    }


this.setState({filtered:newFiltered})

}


    

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> unfilitered:{ JSON.stringify (this.state.unfiltered, null, 10)}</span>
                <input className="inputLine" onChange= {(e)=> this.onClick(e.target.value)} />
                <button className="confirmationButton" onClick= {()=>this.filtered(this.state.userInput)}> Filter </button>
                <span className="resultBox filterStringRB"> Filtered Names: { JSON.stringify (this.state.filtered, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString