import React from 'react';

function CardSponsor(props) {
    return (
        <>
            <div className="card-sponsor">
                <div className="sponsor-img">
                <img src={props.logo} alt="Sponsor logo"/>
                </div>
                <p className="title-sponsor">{props.title}</p>
            </div>
        </>
    );
}

export default CardSponsor;