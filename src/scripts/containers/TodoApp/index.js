import React, {PureComponent} from 'react';
import R from 'ramda';
import NewTodo from 'components/NewTodo';
import TodoList from 'components/TodoList';
import './index.css';

class TodoApp extends PureComponent {
    constructor() {
        super();

        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Do task1',
                    isDone: false
                },
                {
                    id: 2,
                    text: 'Do task2',
                    isDone: false
                },
                {
                    id: 3,
                    text: 'Do task3',
                    isDone: false
                }
            ],
            countOfUndoneTasks: 0
        };
    }

    componentDidMount = () => {
        this.getUndoneTasks();
    }

    componentDidUpdate = () => {
        this.getUndoneTasks();
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (this.state.todos !== nextState.todos) {
            return true;
        }
        if (this.state.countOfUndoneTasks !== nextState.countOfUndoneTasks) {
            return true;
        }
        return false;
    }

    getUniqueId = () => {
        //            My variant

        // const maxId = this.state.todos.length;
        // const arrayOfId = this.state.todos.map(item => item.id);
        // return arrayOfId[maxId - 1] + 1;

        const {todos} = this.state;
        const sortArrayById = R.sort((a, b) => b.id - a.id);
        const maxId = todos && todos.length > 0 ? sortArrayById(todos)[0].id : 1;
        return maxId + 1;
    }

    createTask = text => {
        // console.log(text);

        const newTodo = {
            id: this.getUniqueId(),
            text,
            isDone: false
        };

        this.setState({todos: [...this.state.todos, newTodo] });
    }

    toggleTask= todo => {
        const task = this.state.todos.find(x => x.id === todo.id);
        const newTask = {...task, isDone: !task.isDone};
        const newTodos = this.state.todos.filter(x => x.id !== newTask.id);
        this.setState({todos: [...newTodos, newTask] });
    }

    getUndoneTasks = () => {
        const {todos} = this.state;
        const countOfUndoneTasks = todos.filter(x => !x.isDone).length;
        this.setState({countOfUndoneTasks});
    }

    render() {
        return (
            <div>
                <NewTodo className='container' createTask={this.createTask} />
                <p>{`I  need to do ${this.state.countOfUndoneTasks} tasks.`}</p>
                <TodoList todos ={this.state.todos} toggle={this.toggleTask} />
            </div>
        );
    }
}

export default TodoApp;
