import React from 'react';
import './NewRound.css';


class NewRound extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <div className='newRoundTable'>

            <div className='newRoundTable__outer'>
            
                <div className='newRoundTable__member'>
                    <div className='newRoundTable__memberName'>Bobby: </div>
                    <div className='newRoundTable__memberBox'>
                        <input type="number" className='newRoundTable__memberPoints'></input>
                        <div className='newRoundTable__memberHint'>&nbsp;pts</div>
                    </div>
                </div>

                <div className='newRoundTable__member'>
                    <div className='newRoundTable__memberName'>Bobby: </div>
                    <div className='newRoundTable__memberBox'>
                        <input type="number" className='newRoundTable__memberPoints'></input>
                        <div className='newRoundTable__memberHint'>&nbsp;pts</div>
                    </div>
                </div>
            </div>

            <div className='newRoundTable__startButton'>Save new round points</div>
        </div>
      );
    }
}

export default NewRound;