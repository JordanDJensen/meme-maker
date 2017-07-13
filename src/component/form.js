import React from "react";

class Form extends React.Component {
    render(){
        return(
            <div className="form">
                <input onChange={(event)=>{
                    this.props.handleChange("url", event);
                }} value={this.props.info.url} placeholder="Image URL" className="form-control form-custom"/>
                <input  onChange={(event)=>{
                    this.props.handleChange("top", event);
                }} value={this.props.info.top} placeholder="Top Text" className="form-control form-custom"/>
                <input  onChange={(event)=>{
                    this.props.handleChange("bottom", event);
                }} value={this.props.info.bottom} placeholder="Bottom Text" className="form-control form-custom"/>
                <button onClick={() => {
                    this.props.handleClick(this.props.info);
                }} className="btn btn-primary form-control">Make</button>
            </div>
        )
    }
}

export default Form;