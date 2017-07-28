import React, {PureComponent} from 'react';
import {func} from 'prop-types';
import './index.css';

class NewTodo extends PureComponent {
    static propTypes = {
        createTask: func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    resetInput = () => {
        this.setState({value: ''});
    }
    handleChange = event => {
        this.setState({value: event.target.value});
    }

    render() {
        const {createTask} = this.props;
        return (
            <div className='container'>
                <h1 className='heading'>{'New To Do List'}</h1>
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                <button className = 'button button2' disabled={!this.state.value} onClick={() => { createTask(this.state.value); this.resetInput(); }}>{'Add'}</button>
            </div>
        );
    }
}

export default NewTodo;