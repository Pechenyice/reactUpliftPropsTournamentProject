import React from 'react';
import './NewTournament.css';


class NewTournamentMembers extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div className='newTournamentMembers'>
            <div className='newTournamentMember'>Bobby</div>
            <div className='newTournamentMember'>Bobby</div>
        </div>
      );
    }
}

export default NewTournamentMembers;