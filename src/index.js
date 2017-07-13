import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/"


import FormContainer from "./form-container/form-container.js";
import MemeContainer from "./meme-container/meme-container.js";
import Header from "./component/header.js";

import "./css/style.css"

const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                         <FormContainer/>
                        </div>
                        <div className="col-md-6">
                           <MemeContainer/>
                        </div>
                       
                    </div>
                    
                  
                </div>
            </div>

        )
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"))
