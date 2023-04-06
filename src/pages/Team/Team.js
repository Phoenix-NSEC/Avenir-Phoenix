import React from 'react'
import './Team.css';
import '../../Assets/Css/navbarGlitch.css';
import Card from '../../components/Card';
import team from '../../Data/teamdata';

function nCard(val){
  return ( <Card
    dp={val.dp}
    name={val.name}
    designation={val.designation}
    facebook={val.facebook}
    instagram={val.instagram}
    linkedin={val.linkedin}
    /> )
}

function Team() {
  return (
    <>
    <div className="card-container-teams min-h-screen justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
    {team.map(nCard)}
    </div>
    </>
  )
}

export default Team
