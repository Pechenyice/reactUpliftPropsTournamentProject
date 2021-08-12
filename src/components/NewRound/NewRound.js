import React from 'react';
import './NewRound.css';
import TournamentParticipant from './TournamentParticipant';


class NewRound extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div className='newRoundTable'>

            <div className='newRoundTable__outer'>

                {this.props.team.members.sort((o,n) => o.id - n.id).map((t, i) => <TournamentParticipant key={i} personal={t} onValueChange={this.props.onPointsChange}/>)}
                
            
            </div>

            <div className='newRoundTable__startButton' onClick={this.props.onNextRound} >Save new round points</div>
            <div className='newRoundTable__roundHint'>Round: {this.props.round}</div>
        </div>
      );
    }
}

export default NewRound;