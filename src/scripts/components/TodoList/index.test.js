import React from 'react';
import {shallow} from 'enzyme';
import TodoList from './index';

const container = shallow(<TodoList toggle={() => {}} todos ={[]} />);

describe('TodoList component', () => {
    it('should match expected snapshot', () => {
        expect(container).toMatchSnapshot();
    });
});