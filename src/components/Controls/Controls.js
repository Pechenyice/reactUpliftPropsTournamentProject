import React from 'react';
import './Controls.css';

class Controls extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div className='controls__endButton' onClick={this.props.onEnd}>End tournament</div>
      );
    }
}

export default Controls;