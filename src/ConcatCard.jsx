import React, { Component} from 'react'
import PropTypes from 'prop-types';




class ConcatCard extends Component{
render(){
       
        return (
            <div> 
                <p>My name is {this.props.name} my phone number is {this.props.mobileNumber} my office number is {this.props.workPhone} and my email address is {this.props.email} </p>
            </div>
        );
        
    }
}

ConcatCard.propTypes = {
    name: PropTypes.string.isRequired,
    mobileNumber: PropTypes.number.isRequired,
    workPhone: PropTypes.number,
    email: PropTypes.string.isRequired

  };

export default ConcatCard;
