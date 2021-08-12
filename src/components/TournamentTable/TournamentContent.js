import React from 'react';
import TournamentParticipant from './TournamentParticipant';

class TournamentContent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div className='tournamentTable__membersList'>
          <ul className='tournamentTable__membersListWrapper'>
            {
              this.props.team.members.map((t, i) => <TournamentParticipant key={i} personal={t} pos={++i} />)
            }
          </ul>
        </div>
      );
    }
}

export default TournamentContent;