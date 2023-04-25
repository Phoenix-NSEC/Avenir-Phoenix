import React, { useEffect, useState } from 'react'
import ZigboxOne from '../../components/ZigboxOne'
import './Events.css'
import './glitch.css'
import '../../Assets/Css/navbarGlitch.css'
import { Cybernix, Robonix, Eloquense, Nirmaan, specialEventsNormal, specialEventsGaming, Illustro, funEvents, all } from '../../Data/EventData';
import Socials from '../../components/Socials';

function Events() {
  const [data, setData] = useState([]);
  const [color, setColor] = useState('all');

  const handleData = (arr) => {
    setData(arr);
    setColor(arr[0].wing);
  }

  useEffect(() => {
    setData(all);
  }, []);

  return (

    <div className='container flex flex-col items-center max-w-full justify-center min-h-screen'>
      <div className='eventPage lg:mt-[100px] mt-[20px] flex flex-col justify-center items-center'>
        <button class={color === "all" ? "glitchy-effect" : "cybr-btn"} onClick={() => { handleData(all) }}>
          All events<span aria-hidden>_</span>
          <span class="cybr-btn__glitch">01</span>
          <span class="cybr-btn__tag"></span>
        </button>
        <div className="btnGrp1 justify-center items-center md:mt-[30px] mx-auto grid md:grid-cols-4 grid-cols-2 md:gap-x-[50px] gap-x-[20px] md:gap-y-[25px] gap-y-[5px]">
          <button class={color === "specialEventsNormal" ? "glitchy-effect" : "cybr-btn"} onClick={() => { handleData(specialEventsNormal) }}>
            Flagship<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">01</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "Robonix" ? "glitchy-effect" : "cybr-btn"} onClick={() => { handleData(Robonix) }}>
            Robonix<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">02</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "Nirmaan" ? "glitchy-effect" : "cybr-btn"} onClick={() => { handleData(Nirmaan) }}>
            Nirmaan<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">03</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "Illustro" ? "glitchy-effect" : "cybr-btn"} onClick={() => { handleData(Illustro) }}>
            Illustro<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">04</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "specialEventsGaming" ? "glitchy-effect" : "cybr-btn"} onClick={() => { handleData(specialEventsGaming) }}>
            eSports<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">05</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "Cybernix" ? "glitchy-effect" : "cybr-btn"} onClick={() => { handleData(Cybernix) }}>
            Cybernix<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">06</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "Eloquense" ? "glitchy-effect" : "cybr-btn"} onClick={() => { handleData(Eloquense) }}>
          Eloquense<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">07</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "funEvents" ? "glitchy-effect" : "cybr-btn"} onClick={() => { handleData(funEvents) }}>
            Fun<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">07</span>
            <span class="cybr-btn__tag"></span>
          </button>
        </div>
        <div className="eventList1 grid md:grid-cols-2 grid-cols-1" style={{ marginTop: '70px' }}>
          {
            data.map((e, index) => {
              return (
                <div key={index} className='flex flex-col justify-center items-center'>
                  <ZigboxOne title={e.title} desc={e.desc} icon={e.icon} rulebook={e.rulebook} register={e.register} />
                </div>
              )
            })
            // <ZigboxOne/>
          }
        </div>
      </div >
      <Socials />
    </div>
  )
}

export default Events
