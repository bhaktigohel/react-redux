import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { DashBoard } from './components';
class App extends React.Component {
    render() {
        return ( <
            div className = "App" >
            <
            Provider store = { store } >
            <
            DashBoard / >
            <
            /
            Provider > <
            /div >
        )
    }
}

export default App;