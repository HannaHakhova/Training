import React, {PureComponent} from 'react';
import './index.css';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

class TodoApp extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [
                {
                    text: 'Do task1',
                    isDone: false
                },
                {
                    text: 'Do task2',
                    isDone: false
                },
                {
                    text: 'Do task3',
                    isDone: false
                }
            ]
        };
    }

    createTask(text) {
        this.state.todos.push({
            text,
            isDone: false
        });

        this.setState({todos: this.state.todos});
    }

    toggleTask(todo) {
        const task = Array.prototype.find(this.state.todos, todo);
        task.isDone = !task.isDone;
        this.setState({todos: this.state.todos});
    }

    render() {
        return (
            <div>
                <NewTodo createTask={this.createTask.bind(this)} />
                <TodoList todos ={this.state.todos} toggle={this.toggleTask.bind(this)} />
            </div>
        );
    }
}

export default <TodoApp />;
