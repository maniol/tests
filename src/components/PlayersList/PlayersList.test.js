import PlayersList from './PlayersList';
import Player from '../Player/Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<PlayersList players={ [] }/>);
});

it('renders correct number of players', () => {
	const players = [
		{
			name: 'Kunegunda',
			score: 5
		},
		{
			name: 'Antoś',
			score: 0
		}
	]
	const playersListComponent = shallow(<PlayersList players={ players } />);
	const expectedPlayersNumber = playersListComponent.find(Player).length;
	expect(expectedPlayersNumber).toEqual(2);
});

it('should call onScoreUpdate with id and points when OnPlayerScore is fired in Player', () => {
	const players = [
		{
			name: 'Kunegunda',
			score: 5
		},
		{
			name: 'Antoś',
			score: 0
		}
	]
	const mockedOnScoreUpdate = jest.fn();
	const playersListComponent = shallow(<PlayersList players={ players } onScoreUpdate={ mockedOnScoreUpdate } />);
	const firstPlayer = playersListComponent.find(Player).first();
	const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
	onPlayerScoreChange(10)
	expect(mockedOnScoreUpdate).toBeCalledWith(0,10);
});

it('should call onPlayerRemove with id when OnPlayerRemove is fired in Player', () => {
	const players = [
		{
			name: 'Kunegunda',
			score: 5
		},
		{
			name: 'Antoś',
			score: 0
		}
	]
	const mockedOnPlayerRemove = jest.fn();
	const playersListComponent = shallow(<PlayersList players={ players } onPlayerRemove={ mockedOnPlayerRemove } />);
	const firstPlayer = playersListComponent.find(Player).first();
	const onPlayerRemove = firstPlayer.prop('onPlayerRemove');
	onPlayerRemove()
	expect(mockedOnPlayerRemove).toBeCalledWith(0);
});