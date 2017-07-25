import React, {PureComponent} from 'react';
import './index.css';
import TodoApp from './TodoApp';

class TodoList extends React.Component {
    render() {
        const items = [];
        const todos = Array.prototype.sortBy(this.props.todos, 'isDone');

        for (const index in todos) {
            items.push(
                <Todo todo={todos[index]} key={index} toggle={this.props.toggle} />
            );
        }

        return (
            <ul>
                {items}
            </ul>
        );
    }
}
