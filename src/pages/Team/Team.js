import React from 'react'
import './Team.css';
import '../../Assets/Css/navbarGlitch.css';
import Card from '../../components/Card';
import team from '../../Data/TeamData';
import Socials from '../../components/Socials';

function nCard(val) {
  return (<Card
    dp={val.dp}
    name={val.name}
    designation={val.designation}
    dept={val.dept}
    facebook={val.facebook}
    instagram={val.instagram}
    linkedin={val.linkedin}
  />)
}

function Team() {
  return (
    <>
        <div className="card-container-teams-core h-screen flex justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
          {team.core.map(nCard)}
          {/* This is Core Div */}
        </div>

        <div className="card-container-teams-working h-screen flex justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
          {team.working.map(nCard)}
          {/* This is Working div */}
        </div>

        <div className="card-container-teams-wing h-screen flex justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
          {team.wing.map(nCard)}
          {/* This is wing div */}
        </div>

      <div className="only-for-desktop">
        <Socials />
      </div>

    </>
  )
}

export default Team
