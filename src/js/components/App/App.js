import React, { Component } from 'react';
import './App.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'

import Widget from '../Widget/Widget';
class App extends Component {
    render() {
        return (
            <div className="App container-fluid">
                <div className='row full-height'>
                    <div className="col-6 full-height">
                        <Widget />
                    </div>
                    <div className="col-6 full-height">
                        <div className="jumbotron jumbotron-fluid">
                            <h2 className='display-4'>Some side bar</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
