import React from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import * as actionCreators from "../action/";

import Form from "../component/form.js";
import autoBind from "react-autobind";


class FormContainer extends React.Component {
    constructor(){
        super();
        this.state= {
            top:"",
            bottom:"",
            url:""
        };  
        autoBind(this);  
    }

    handleChange (key,event){
       this.setState({
        [key]: event.target.value
       });
    }

    render(){
        return(
            <Form handleClick={this.props.makeMeme} handleChange={this.handleChange} info={this.state}/>
        )
    }
}

const mapStateToProps = (state) =>{
return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);