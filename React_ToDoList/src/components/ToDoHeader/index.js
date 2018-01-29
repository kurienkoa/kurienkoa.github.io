// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

export default class ToDoHeader extends Component {
    render () {
        return (
            <div className = { Styles.header }>
                <p>To Do List</p>
                <input type = " search " placeholder = { ' Search ' } />
            </div>
        );
    }
};
