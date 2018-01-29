// Core
import React, { Component } from 'react';
import { getUniqueID } from '../..//helpers';

// Instruments
import Styles from './styles.scss';
import { string, func } from 'prop-types';

export default class ToDoItem extends Component {
    constructor () {
        super();
        this.deletePost = ::this._deletePost;
    }
    static propTypes = {
        comment:    string.isRequired,
        id:         string.isRequired,
        deletePost: func.isRequired,
    };
    componentWillUpdate () {
        console.log(this.props.id, 'componentWillUpdate');
    }
    shouldComponentUpdate (nextProps) {
        return JSON.stringify(nextProps) !== JSON.stringify(this.props);
    }
    componentDidUpdate () {
        console.log(this.props.id, 'componentDidUpdate');
    }
    _deletePost () {
        const { deletePost, id } = this.props;
        console.log('id === ', id);
        console.log('this.props === ', this.props);
        deletePost(id);
    }
    render () {
        const { id, comment } = this.props;
        return (
            <div className = { Styles.item } key = { id }>
                <div>
                    <input type = 'checkbox' id = { id } />
                    <label htmlFor = { id } >{ comment }</label>
                </div>
                <div>
                    <button className = { Styles.select }></button>
                    <button className = { Styles.edit }></button>
                    <button className = { Styles.delete } onClick = { this.deletePost }></button>
                </div>
            </div>
        );
    }
};
