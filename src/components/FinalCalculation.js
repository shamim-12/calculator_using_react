import React from 'react'
import dollar from './icon-dollar.svg';

const FinalCalculation = (props) => {
    const {totalAmount} = props
    const {tipedAmount} = props
    return (
        <div>
            <section className = "finalCalculation">
            <div>
                <p>Tip Amount</p>
                <p style={{fontSize:'1rem'}}>/person</p>
            </div>
            <div className="img">
                <img src = {dollar} alt = "dollorSign"/>
                </div>
            <input type = "number" value = {tipedAmount} style={{fontSize:'2rem'}} placeholder = "$0.00"/>
            </section>
            <section className = "finalCalculation">
            <div>
                <p>Tip Amount</p>
                <p style={{fontSize:'1rem'}}>/person</p>
            </div>
            
            <div className="img">
                <img src = {dollar} alt = "dollorSign"/>
                </div>
            <input   type = "number"  value = {totalAmount } placeholder = "$0.00" style={{fontSize:"2rem"}}/>
            </section>
        </div>
    )
}

export default FinalCalculation
