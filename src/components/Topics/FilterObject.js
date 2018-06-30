import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super()
            this.state = {
                unFilteredArray: [
                    {
                      name: 'Mason Brockbank',
                      title: 'Student',
                      age: 21,
                      birthday: 'September'
                    },
                    {
                      name: 'Hanna Ahston',
                      age: 21,
                      hairColor: 'blonde',
                      birthday: 'January',
                    },
                    {
                      name: 'Austin Paul',
                      career: 'doctor',
                      hairColor: 'White',
                      size:'small',  
                    }
                                    ],
            
                userInput: '',
                filteredArray:[]
            }
    }
    clickChange(val){
        this.setState({userInput: val});
    }
    filteredArray(prop){
        var unFilteredArray = this.state.unFilteredArray
        var filteredArray = [];
        for (let i = 0; i < unFilteredArray.length; i++) {
            if ( unFilteredArray[i].hasOwnProperty(prop) ) {
                filteredArray.push(unFilteredArray[i]);
              
            }
        }

        this.setState({filteredArray: filteredArray})
    }

            render(){
                return (
                <div className ="puzzleBox filterObjectPB">
                    <h4>Filter Object</h4>
                    <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                    <input className = "inputLine" onChange ={(e)=>this.clickChange(e.target.value)}/>
                    <button className = "confirmationButton" onClick = {()=> this.filteredArray(this.state.userInput)}>Filter</button>
                    <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
                </div>
                )
    }
}

export default FilterObject