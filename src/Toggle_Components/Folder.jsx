import React, {Component} from 'react'


class Folder extends Component{
    constructor(props){
        super(props)
        this.state ={
            isClick : true
        }
    }
    clickHendler(){
        this.setState({ isClick : !this.state.isClick})
    }
    render(){
        let display 
        if(this.state.isClick){
           display = <p>
                       {this.props.files.map((value) => value + " ")}
                     </p>
        }


        return(
          <div>
           <h1> {this.props.name}</h1>
                 
                 {display}

           <button onClick={() =>this.clickHendler()}> Toggle </button>

          </div>
        );
    }
}

export default Folder;