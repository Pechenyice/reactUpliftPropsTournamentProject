import React from "react";

function TournamentParticipant({personal, pos}) {

    return (
        <li className='tournamentTable__member member'>
            <span className='member__pos'>#{pos}</span>
            <span className='member__name'>{personal.name}</span>
            <span className='member__pts'>{personal.pts + personal.tempPts} pts</span>
        </li>
    );

}

export default TournamentParticipant;