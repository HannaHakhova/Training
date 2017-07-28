import React from 'react';
import {shallow} from 'enzyme';
import Todo from './index';

const container = shallow(<Todo toggle={() => {}} todo={{}}/>);

describe('Todo component', () => {
    it('should match expected snapshot', () => {
        expect(container).toMatchSnapshot();
    });
});