import React from 'react';
import './NewTournament.css';


class NewTournamentMembers extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDeleteClick = (id) => {
      return () => {
        this.props.onDeleteMember(id);
      }
    }
    
    render() {
      return (
        <div className='newTournamentMembers'>
            {
              this.props.team.members.map((m, i) => <div className='newTournamentMember' key={i} onClick={this.handleDeleteClick(i)}>{m.name}</div>)
            }
        </div>
      );
    }
}

export default NewTournamentMembers;