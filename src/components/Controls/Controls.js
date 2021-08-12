import React from 'react';
import './Controls.css';

class Controls extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div>
        {
          this.props.tournamentStarted ? 
          <div className='controls__endButton' onClick={this.props.onEndTournament}>End tournament</div> :
          <div className='controls__endButton' onClick={this.props.onClearTournament}>Clear tournament history</div>
        }
        </div>
      );
    }
}

export default Controls;