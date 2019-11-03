import React from 'react';

class AddBuilding extends React.Component{
    constructor(){
        super();
        this.state={
            inName:'',
            inCode:'',
            inAddress:'',
            inLat:'',
            inLong:''
        }
    }
    
    handleSubmit=async(event)=>{
        event.preventDefault();
        const val={
            id:this.props.length+1,
            name:this.state.inName,
            code:this.state.inCode,
            address:this.state.inAddress,
            coordinates:{latitude:this.state.inLat,longitude:this.state.inLong}
        }

        this.props.addToArray(val);
        this.setState({
            inName:'',
            inCode:'',
            inAddress:'',
            inLat:'',
            inLong:''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                placeholder="Name of Building"
                value={this.state.inName}
                onChange={event=>this.setState({inName:event.target.value})}
                required/>
                <input type="text"
                placeholder="Code of Building"
                value={this.state.inCode}
                onChange={event=>this.setState({inCode:event.target.value})}
                required/>
                <input type="text"
                placeholder="Address of Building"
                value={this.state.inAddress}
                onChange={event=>this.setState({inAddress:event.target.value})}
                required/>
                <input type="text"
                placeholder="Latitude of Building"
                value={this.state.inLat}
                onChange={event=>this.setState({inLat:event.target.value})}
                required/>
                <input type="text"
                placeholder="Longitude of Building"
                value={this.state.inLong}
                onChange={event=>this.setState({inLong:event.target.value})}
                required/>
                <button type="submit" onClick={this.addToArray}>Add building</button>
            </form>
        );
    }

}
export default AddBuilding;