import React from 'react'
import './Team.css';
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
    <div className="header">
    Our&nbsp;&nbsp;Teams
    </div>
    <div className="card-container h-screen flex justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {team.map(nCard)}
    </div>
    </>
  )
}

export default Team
