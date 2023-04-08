import React, { useState } from 'react'
import './Team.css';
import '../../Assets/Css/navbarGlitch.css';
import Card from '../../components/Card';
import team from '../../Data/TeamData';
import Socials from '../../components/Socials';
import './glitch-teams.css';

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

  const [core, showCore] = useState(true);
  const [working, showWorking] = useState(true);
  const [wing, showWing] = useState(true);

  return (
    <>
      <div className='main-wrapper-teams'>
        <div className="buttons-teams">
          <button className={core && working && wing ? 'glitchex glitchex-teams' : 'cybr-btn-teams'} onClick={() => { 
            showCore(true);
            showWorking(true);
            showWing(true);
            }} aria-hidden>All
            <span class="cybr-btn-teams__glitch"></span>
            <span class="cybr-btn-teams__tag"></span>
            </button>
          <button className={core && !working && !wing ? 'glitchex glitchex-teams' : 'cybr-btn-teams'} onClick={() => { 
            showCore(true);
            showWorking(false);
            showWing(false);
            }}>Core Team
            <span class="cybr-btn-teams__glitch"></span>
            <span class="cybr-btn-teams__tag"></span>
            </button>
          <button className={!core && working && !wing ? 'glitchex glitchex-teams' : 'cybr-btn-teams'} onClick={() => { 
            showCore(false);
            showWorking(true);
            showWing(false);
            }}>Working Team
            <span class="cybr-btn-teams__glitch"></span>
            <span class="cybr-btn-teams__tag"></span>
            </button>
          <button className={!core && !working && wing ? 'glitchex glitchex-teams' : 'cybr-btn-teams'} onClick={() => { 
            showCore(false);
            showWorking(false);
            showWing(true);
            }}>Wing Coordinators
            <span class="cybr-btn-teams__glitch"></span>
            <span class="cybr-btn-teams__tag"></span>
            </button>
        </div>


        {core ? <div className="card-container-teams-core h-screen flex justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
          {team.core.map(nCard)}
          {/* This is Core Div */}
        </div> : null }
        {working ? <div className="card-container-teams-working h-screen flex justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
          {team.working.map(nCard)}
          {/* This is Working div */}
        </div> : null}
        {wing ? <div className="card-container-teams-wing h-screen flex justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
          {team.wing.map(nCard)}
          {/* This is wing div */}
        </div> : null}


        {/* <div className="card-container-teams-core h-screen flex justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
          {team.core.map(nCard)} */}
        {/* This is Core Div */}
        {/* </div> */}
        {/* <div className="card-container-teams-working h-screen flex justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
          {team.working.map(nCard)}
          This is Working div
        </div> */}
        {/* <div className="card-container-teams-wing h-screen flex justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
          {team.wing.map(nCard)}
          This is wing div
        </div> */}

      </div>
      <div className="only-for-desktop">
        <Socials />
      </div>
    </>
  )
}

export default Team;
