// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

export default class ToDoFooter extends Component {
    constructor () {
        super();
        this.handleSubmit = :: this._handleSubmit;
        this.createPost = :: this._createPost;
        this.handCopy = ::this._handCopy;
        this.handTextAreaKeyPress = ::this._handTextAreaKeyPress;
        this.handleKeyUp = ::this._handleKeyUp;
    }

    state = {
        comment: ''
    };
    _handCopy (event) {
        event.preventDefault();
    }
    _handTextAreaKeyPress (event) {
        const enterKey = event.key === 'Enter';
        if (enterKey) {
            this.createPost()
        }
    }
    _handleKeyUp () {
        const { groupId, firstName, lastName } = this.context;
        const { socket } = this.state;
        const person = { room: groupId, name: `${firstName} ${lastName}` };

        if (socket) {
            const timeout = setTimeout(() => {
                socket.emit('type_stop', person);
            }, 1000);

            this.setState({
                timeout
            });

            socket.emit('type', person);
        }
    }
    _handleSubmit (event) {
        event.preventDefault();
        this.createPost();
    }
    _createPost () {
        const { comment } = this.state;

        if (!comment) {
            return;
        }

        this.props.createPost(comment);
        this.setState({ comment: '' });
    }
    _handleTextAreaChange = ({ target }) => {
        const { value: comment } = target;

        this.setState({ comment });
    }
    render () {
        const { comment } = this.state;
        return (
            <div className = { Styles.footer }>
                <div>
                    <input type = "checkbox" id = " checkAll " />
                    <label htmlFor = " checkAll " >Done all</label>
                </div>
                <form onSubmit = { this.handleSubmit } >
                    <input
                        type = "text"
                        placeholder = { 'Write here' }
                        value = { comment }
                        onChange = { this._handleTextAreaChange }
                    />
                    <button type = 'submit' ><span>+</span> Add Task</button>
                </form>
            </div>
        );
    }
};
