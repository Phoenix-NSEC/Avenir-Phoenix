import React from 'react';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Card(props) {
    return (
            <div className="card">
                <div className="lines"></div>
                <div className="img-box">
                    <img src={props.dp} alt="team-member" />
                </div>
                <div className="content">
                    <div className="details">
                        <p className="member-name">{props.name}</p>
                        <p className="member-designation">{props.designation}</p>
                        <div className="socials">
                            <a href={props.facebook} target="_blank" rel="noopener noreferrer" className="facebook glitch-effect"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                            <a href={props.instagram} target="_blank" rel="noopener noreferrer" className="instagram glitch-effect"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                            <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin glitch-effect"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Card;