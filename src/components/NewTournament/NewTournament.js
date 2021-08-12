import React from 'react';
import './NewTournament.css';
import NewTournamentMembers from './NewTournamentMembers';
import NewTournamentAddMemberForm from './NewTournamentAddMemberForm';


class NewTournament extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div className='newTournamentTable'>
            <NewTournamentAddMemberForm onNewMemberSubmit={this.props.onMemberAdded}/>

            <NewTournamentMembers team={this.props.team} onDeleteMember={this.props.onDeleteMember}/>

            <div className='newTournamentTable__startButton' onClick={this.props.onStartTournament}>Start tournament</div>
        </div>
      );
    }
}

export default NewTournament;