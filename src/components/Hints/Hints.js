import React from 'react';
import './Hints.css';

class Hints extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div className='hints__content'>
            <div className='hints__wrapper'>
                <div className='hints__hint hints__hint_accept'>Ок!</div>
                <div className='hints__hint hints__hint_error'>Не ок!</div>
            </div>
        </div>
      );
    }
}

export default Hints;