import React from 'react'
import './Partners.css';
import './glitch-partners.css';
import CardSponsor from '../../components/CardSponsor.js';
import sponsors from '../../Data/SponsorData.js';
import Socials from '../../components/Socials';

function showPartners(val) {
  return (
    <CardSponsor title={val.title} logo={val.logo} />
  )
}

function Partners() {
  return (
    <>
      <div className="main-wrapper-sponsor">
        <div className="sponsor-card-div">
          {sponsors.map(showPartners)}
          </div>
      </div>
      <Socials />
    </>
  )
}

export default Partners
