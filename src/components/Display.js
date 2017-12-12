import React,  { Component } from 'react';
import { connect } from 'react-redux';
import {increment} from '../actions';

class Display extends Component {

    render() {

        return (
            <div>
                <h1> It works </h1>
                <input type="button" value="increment" onClick={this.props.increment}/>
                <h3> --->>>>   {this.props.count} </h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state
    }
}

export default connect(mapStateToProps, {increment})(Display);