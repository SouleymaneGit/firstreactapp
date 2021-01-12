import React, {Component} from 'react'


class Firstlastname extends Component{

    constructor(props){
        super(props)
        this.state ={
            isclick : false,
            firstname : props.firstname, 
            lastname : props.lastname  
        }
        this.baseState ={
            prevfirstname : props.firstname,  
            prevlastname : props.lastname
        }
        this.handleChange = this.handleChange.bind(this) 
    }
     

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    saveHendler(){

            this.setState({isclick : !this.state.isclick})
            this.baseState.prevfirstname = this.state.firstname  
            this.baseState.prevlastname = this.state.lastname
        
    } 
    cancelHendler(){

        this.setState({isclick : !this.state.isclick})
        this.baseState.prevfirstname = this.baseState.prevfirstname  
        this.baseState.prevlastname = this.baseState.prevlastname
    }  
    
    editClickHendler(){
        this.setState({isclick : !this.state.isclick})
    }
    render(){

        let button

        const isLoggedIn = this.state.isclick;
        if (isLoggedIn) {
            button = <div> 
            <button onClick={()=>this.saveHendler()}> Save</button> 
            <button onClick={()=>this.cancelHendler()}> cancel</button>
            </div> 
            return(
                <div>
                    <input name="firstname" type="text"   value={this.state.firstname} onChange={this.handleChange} /> <br/>
                    <input name='lastname' type="text"   value={this.state.lastname} onChange={this.handleChange} />
                    {button}
                </div>
    
             )
        }
        else{
            button = <button onClick={()=>this.editClickHendler()}> Edit</button>
        
        return( 
            
            <div>
                
                <p>{this.baseState.prevfirstname} </p>
                <p>{this.baseState.prevlastname} </p>
                {button}
            </div>
        );
        
    }


    }
}

export default Firstlastname;