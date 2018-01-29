// Core
import React, { Component } from 'react';
import { string } from 'prop-types';
import { getUniqueID } from '../..//helpers';

// Instruments
import Styles from './styles.scss';
import ToDoHeader from '../ToDoHeader';
import ToDoItem from '../ToDoItem';
import ToDoFooter from '../ToDoFooter';

export default class ToDoBlock extends Component {
    constructor () {
        super();
        this.createPost =           ::this._createPost;
        this.deletePost =           ::this._deletePost;
    }
    static contextTypes = {
        api:       string.isRequired,
        token:     string.isRequired,
    };
    state = {
        toDoItems:   [],
    };

    _createPost ( comment ) {
        try {
            this.setState(({toDoItems}) => ({
                toDoItems: [ {id: getUniqueID(), comment}, ...toDoItems ]
            }));
        } catch ({ message }) {
            console.log(message);
        }
    }
    _deletePost ( id ) {
        this.setState(({ toDoItems }) => ({
            toDoItems: toDoItems.filter( (toDoItem) => toDoItem.id !== id)
        }));
    }

    render () {
        const {toDoItems: postsData} = this.state;
        const toDoItems = postsData.map((toDoItem) => {
            console.log('toDoItem - ', toDoItem.id);
            return <ToDoItem {...toDoItem} key = { toDoItem.id } comment = { toDoItem.comment } deletePost={this.deletePost} />
        });
        return (
            <section className = { Styles.toDoBlock }>
                <ToDoHeader />
                { toDoItems }
                <ToDoFooter createPost = { this.createPost } />
            </section>
        );
    }
};
