import {Component, React, button} from 'react'
import PropTypes from 'prop-types';

class IncrementDecrement extends Component{
    constructor(props){
        super(props);
        this.state = {number : props.num};

    }
    handleIncrement =() =>{
        this.setState({number :this.state.number+1})
      
    }
    handleDecrement =() =>{

        if(this.state.number === 0){
            alert('Cannot be less than zero')
        }
        else this.setState({number :this.state.number - 1})
      
    }
    render(){
        return(

            <div> 
                <h1>{this.state.number} </h1>
                <button onClick={()=>this.handleIncrement()}> Increment </button>
                <button  onClick={()=>this.handleDecrement()}> Decrement </button>
            
            </div>
            

        );
    }
}

IncrementDecrement.propTypes = {
    num: PropTypes.number.isRequired,
};



export default IncrementDecrement;