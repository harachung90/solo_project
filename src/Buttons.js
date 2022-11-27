import React from 'react';
import email from './img_1.png';

export class Buttons extends React.Component {
    render() {
        return(
            <div className="Buttons">
                <button className="email_btn">
                    <img src={email} alt="Email"/>
                    <p>Email</p>
                </button>
            </div>
        )
    }
}