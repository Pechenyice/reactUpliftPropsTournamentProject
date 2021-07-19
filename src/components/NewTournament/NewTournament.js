import React from 'react';
import './NewTournament.css';
import NewTournamentMembers from './NewTournamentMembers';


class NewTournament extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div className='newTournamentTable'>
            <input type='text' placeholder='Enter name' className='newTournamentTable__nameInput'></input>
            <div className='newTournamentTable__addButton'>Add new member +</div>

            <NewTournamentMembers />

            <div className='newTournamentTable__startButton' onClick={this.props.onStart}>Start tournament</div>
        </div>
      );
    }
}

export default NewTournament;