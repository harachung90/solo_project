import React from 'react';

export class About extends React.Component {
    render() {
        return(
            <div className="about">
                <h5 className="about_h5">About</h5>
                <p className="about_p">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>

                <h5 className="interest_h5">Interest</h5>
                <p className="interest_p">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        )
    }
}