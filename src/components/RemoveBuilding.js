import React from 'react'

class RemoveBuilding extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        }
    }
    
    delete(){
        this.props.delete()
    }
    render(){
        if(this.props.selectedBuilding===0){
            return(
                <div></div>
            )
        }
        return(
            <div>
                <button onClick={this.delete.bind(this)}>Delete Selection</button>
            </div>
        )
    }
}
export default RemoveBuilding