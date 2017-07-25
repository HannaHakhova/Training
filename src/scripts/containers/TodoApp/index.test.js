import React from 'react';
import {shallow} from 'enzyme';
import TodoPage from './index';

describe('TodoPage', () => {
    it('TodoPage match expected snapshot', () => {
        expect(shallow(<TodoPage/>)).toMatchSnapshot();
    });
});
