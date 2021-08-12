import React from 'react';
import './Logo.css';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div className='logo'>
          Friend Battle
        </div>
      );
    }
}

export default Logo;