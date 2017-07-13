import React from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import * as actionCreators from "../action/";
import Meme from "../component/meme.js";

class MemeContainer extends React.Component {
    render(){
        return(
            <div>
                <Meme top={this.props.top} bottom={this.props.bottom} url={this.props.url}/>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);