/* eslint-disable react/prop-types, react/no-multi-comp */

import React from 'react';
import {shallow, mount} from 'enzyme';
import TodoApp from './index';

jest.mock('components/TodoList', () => {
    const todo = {
        id: 1,
        text: 'Do task1',
        isDone: false
    };
    const TodoList = ({toggle}) => <div id={'mockIdTodoList'} onClick={() => { toggle(todo); }}/>;
    return TodoList;
});

jest.mock('components/NewTodo', () => {
    const text = 'NEW TASK!!!';
    const NewTodo = ({createTask}) => <div id={'mockIdNewTodo'} onClick={() => { createTask(text); }}/>;
    return NewTodo;
});

describe('TodoApp', () => {
    it('TodoApp match expected snapshot', () => {
        expect(shallow(<TodoApp/>)).toMatchSnapshot();
    });

    it('calls toggle the button click', () => {
        const wrapper = mount(<TodoApp/>);
        expect(wrapper.state().todos.find(x => x.id === 1).isDone).toBeFalsy();
        wrapper.find('#mockIdTodoList').simulate('click');
        expect(wrapper.state().todos.find(x => x.id === 1).isDone).toBeTruthy();
    });

    it('creates task on the button click', () => {
        const wrapper = mount(<TodoApp/>);
        wrapper.find('#mockIdNewTodo').simulate('click');
        expect(wrapper.state().todos.find(x => x.text === 'NEW TASK!!!').text).toContain('NEW TASK!!!');
    });
});