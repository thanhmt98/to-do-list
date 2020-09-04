import React, {Component} from 'react';
// import Products from '../Product/Products';
import ToDo from '../ToDoList/ToDo';

import './App.css';

class App extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ToDo />
                </div>
            </div>
        )
    }
}

export default App
