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
        <div className='tournamentTable'>
          <div className='tournamentTable__decor'>
            <FontAwesomeIcon icon={faTrophy} />
          </div>
          <div className='tournamentTable__content'>
            <div className='tournamentTable__hint'>no tournaments history</div>
            <TournamentContent />
          </div>
        </div>
      );
    }
}

export default TournamentTable;