import React from 'react';
import {shallow, mount, add} from 'enzyme';
import NewTodo from './index';

const container = shallow(<NewTodo createTask={() => {}} />);

describe('NewTodo component', () => {
    it('should match expected snapshot', () => {
        expect(container).toMatchSnapshot();
    });
});

it('creates task on the button click', () => {
    container.setState({value: 'to do task1'});
    container.find('button').simulate('click');
    expect(container.state().value).toEqual('');
});

it('handles change on the input', () => {
    container.find('input').simulate('change', {target: {value: 'testValue'} });
    expect(container.state().value).toEqual('testValue');
});
