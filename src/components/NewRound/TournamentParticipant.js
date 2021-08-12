import React from "react";

function TournamentParticipant({personal, onValueChange, onInputFocus}) {

    function handleNewValue(e) {
        onValueChange(e.target.name.split('-')[1], parseInt(e.target.value));
    }

    return (
        <div className='newRoundTable__member'>
            <div className='newRoundTable__memberName'>#{personal.id + 1} {personal.name}: </div>
            <div className='newRoundTable__memberBox'>
                <input type="number" className='newRoundTable__memberPoints' name={`participant-${personal.id}`} value={parseInt(personal.tempPts)} onChange={handleNewValue}></input>
                <div className='newRoundTable__memberHint'>&nbsp;pts</div>
            </div>
        </div>
    );
}

export default TournamentParticipant;