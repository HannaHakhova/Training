import React from 'react';
import {shallow} from 'enzyme';
import Logo from './index';

describe('Logo', () => {
    it('Logo match expected snapshot', () => {
        expect(shallow(<Logo className='logo-class-name' alt='logo-alt-name'/>)).toMatchSnapshot();
    });
});
