import React from 'react';
import {shallow} from 'enzyme';
import MainPage from './index';

describe('MainPage', () => {
    it('MainPage match expected snapshot', () => {
        expect(shallow(<MainPage/>)).toMatchSnapshot();
    });
});
