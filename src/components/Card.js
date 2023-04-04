import React from 'react';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Card(props) {
    return (
            <div className="card-teams">
                <div className="lines-teams"></div>
                <div className="img-box-teams">
                    <img src={props.dp} alt="team-member" />
                </div>
                <div className="content-teams">
                    <div className="details-teams">
                        <p className="member-name-teams">{props.name}</p>
                        <p className="member-designation-teams">{props.designation}</p>
                        <div className="socials-teams">
                            <a href={props.facebook} target="_blank" rel="noopener noreferrer" className="facebook-teams glitch-effect"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                            <a href={props.instagram} target="_blank" rel="noopener noreferrer" className="instagram-teams glitch-effect"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                            <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-teams glitch-effect"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Card;