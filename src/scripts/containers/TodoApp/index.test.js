import React from 'react';
import {func} from 'prop-types';
import {shallow, spy, mount} from 'enzyme';
import TodoApp from './index';

const mockTodoList = jest.mock('components/TodoList', () => {
    const todo = {
        id: 1,
        text: 'Do task1',
        isDone: false
    };
    const TodoList = ({toggle}) => <div id={'mockId'} onClick={() => { toggle(todo); }}/>;
    TodoList.propTypes = {
        toggle: func
    };
    return TodoList;
});

describe('TodoApp', () => {
    it('TodoApp match expected snapshot', () => {
        expect(shallow(<TodoApp/>)).toMatchSnapshot();
    });
});

it('calls toggle the button click', () => {
    mockTodoList.find('button').simulate('click');
    expect(mockTodoList.state(mockTodoList.id).value).toEqual({
        id: 1,
        text: 'Do task1',
        isDone: true
    });
});

