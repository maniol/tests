import AddPlayer from './AddPlayer';
import React from 'react';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
	shallow(<AddPlayer />);
});

it('calls onPlayerAdd with a correct parameter', () => {
	const mockedOnPlayerAdd = jest.fn();
	const addPlayerComponent = mount(<AddPlayer onPlayerAdd={ mockedOnPlayerAdd } />);
	const nameInput = addPlayerComponent.find('input').first().getDOMNode();
	nameInput.value = 'Ana';
	const form = addPlayerComponent.find('form');
	form.simulate('submit');
	expect(mockedOnPlayerAdd).toBeCalledWith('Ana');
});