import React from 'react';


function Players(props) {
    const { players = [] } = props;

    if (!players || !players.length){
        return <h3>No Players Available</h3>
    } 

    // non destructing way of doing it. 
    // const players = props.players || [];
    return (
        <>
        <h3>Players List</h3>
        {players.map(p => (
            <div 
            data-testid="player-name"
            key={p.id}>{p.name}</div>
        ))}
        </>
    )

}

export default Players;