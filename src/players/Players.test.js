import React from 'react';
import Players from './Players';
import 'jest-dom/extend-expect';
import { render, fireEvent, cleanup } from 'react-testing-library';



describe('The Players Component', () => {

// check if it renders
    it('renders Players without crashing', () => {
        render(<Players />);
    });
    // check that the header is there
    it('if header exists', () => {
        
        const { getByText } = render(<Players />);

        // const header = getByText(/player list/i);
    });

    it('when there are no players', () => {
        const players = [
           { id: 1, name: 'Sam' },
           { id: 2, name: 'Jamar' },
           { id: 3, name: 'Juan' },
        ];

        const { getByText } = render(
        <Players 
        players={players}/>);

        getByText(/players list/i)

        cleanup();
    });

    it("should render a list of players", () => {
        const players = [
            { id: 1, name: 'Sam' },
            { id: 2, name: 'Jamar' },
            { id: 3, name: 'Juan' },
         ];

         const { getAllByTestId } = render(<Players 
            players={players}/>);

            const playersDivs = getAllByTestId('player-name');
            // console.log('players', playerDivs)

            expect(playersDivs.length).toBe(players.length);

            const playerNames = players.map(p => p.name);
            const divContent = playersDivs.map(d => d.textContent);
                
            expect(playerNames).toEqual(divContent);
    });
});