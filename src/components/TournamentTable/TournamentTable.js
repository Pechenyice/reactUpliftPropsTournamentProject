import React from 'react';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TournamentContent from './TournamentContent';
import './TournamentTable.css';


class TournamentTable extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div>
          <div className='tournamentTableHint'>
            {
            this.props.tournamentStarted ? 
            'Current tournament:' : 
            'Previous tournament:'}
          </div>
          <div className='tournamentTable'>
            <div className='tournamentTable__decor'>
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <div className='tournamentTable__content'>
              { 
                this.props.team.members.length ? 
                <TournamentContent team={this.props.team} /> : 
                <div className='tournamentTable__hint'>no tournaments history</div>
              }
            </div>
          </div>
        </div>
      );
    }
}

export default TournamentTable;