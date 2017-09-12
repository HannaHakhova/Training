import React from 'react';
import {shallow} from 'enzyme';
import Todo from './index';

describe('Todo component', () => {
    it('with empty todo object should match expected snapshot', () => {
        expect(shallow(<Todo toggle={() => {}} todo={{id: 1, text: 'Do task1', isDone: false}}/>)).toMatchSnapshot();
    });

    it('with not empty todo object should match expected snapshot', () => {
        expect(shallow(<Todo toggle={() => {}} todo={{id: 1, text: 'Do task1', isDone: true}}/>)).toMatchSnapshot();
    });
});