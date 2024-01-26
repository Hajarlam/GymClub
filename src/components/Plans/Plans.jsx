import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>
            <div className="plans" id='plans'>
                {plansData.map((plan, index) => (
                    <div className="plan" key={1}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, fIndex) => (
                                <div className="feature" key={1}>
                                    <img src={whiteTick} alt="" />
                                    <span key={1}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div><span>See more benefits -> </span>
                        </div>
                        <button className='btn'> Join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans;
