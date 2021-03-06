import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Puzzle from './containers/Puzzle';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Toaster from './components/Toaster';


class App extends Component {
    render(){
        let toaster;
        if ( this.props.toaster.visible ) {
            toaster = <Toaster message={ this.props.toaster.message }/>
        }
        return (
            <div className="App">
                <Header/><br/>
                <Problem/><br/>
                <Solution/><br/>
                {toaster}
                <Puzzle/>
            </div>
        );
    }
}

export default connect(
    state => ( {
        'toaster': state.toaster
    } )
)( App );
