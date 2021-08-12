import React from 'react';
import './Hints.css';

class Hints extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

      let classes = ['hints__hint'];
      
      classes.push(`hints__hint_${this.props.action?.type}`);

      return (
        <div className='hints__content'>
            <div className='hints__wrapper'>
              {
                this.props.action?.activated ?
                <div className={classes.join(' ')} onClick={this.props.onUserDelete}>{this.props.action?.text}</div> :
                null
              }
            </div>
        </div>
      );
    }
}

export default Hints;