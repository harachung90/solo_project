import React from 'react';
import twitter from "./img_3.png";
import facebook from "./img_4.png";
import insta from "./img_5.png";
import linkedin from "./img_6.png";
import github from "./img_7.png";

export class Social extends React.Component {
    render() {
        return(
            <div className="social_container">
                <img src={twitter} alt="Twitter"/>
                <img src={facebook} alt="facebook" />
                <img src={insta} alt="instgram" />
                <img src={linkedin} alt="linkedin" />
                <img src={github} alt="github" />
            </div>
        )
    }
}