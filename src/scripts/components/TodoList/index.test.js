import React from 'react';
import {shallow} from 'enzyme';
import TodoList from './index';

const container = shallow(<TodoList toggle={() => {}} todos ={[{
                    id: 1,
                    text: 'Do task1',
                    isDone: false
                },
                {
                    id: 2,
                    text: 'Do task2',
                    isDone: true
                },
                {
                    id: 3,
                    text: 'Do task3',
                    isDone: false
}]} />);

describe('TodoList component', () => {
    it('should match expected snapshot', () => {
        expect(container).toMatchSnapshot();
    });
});