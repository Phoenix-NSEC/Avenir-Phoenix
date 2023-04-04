import React, { useEffect, useState } from 'react'
import ZigboxOne from '../../components/ZigboxOne'
import bgImage from '../../Assets/Images/bg_event.jpg' 
import './Events.css'
import './glitch.css'
import { Cybernix, Robonix, Eloquense, Nirmaan, specialEventsNormal, specialEventsGaming, Illustro, funEvents } from '../../Data/EventData';

function Events() {
  const [data, setData] = useState([]);
  const [color, setColor] = useState('Cybernix');

  const handleData = (arr) => {
    setData(arr);
    setColor(arr[0].wing);
  }

  useEffect(() => {
    setData(Cybernix);
  }, []);

  return (
    <div className='container'>
      <div class="overlay"></div>
      <div className='eventPage py-[80px] flex flex-col justify-center item-center'>
        <h1 className='py-6 text-center font-orbitron text-4xl md:text-5xl text-white'>EVENTS</h1>
        <div className="btnGrp1 justify-center items-center mt-[30px] mx-auto grid md:grid-cols-4 grid-cols-2 md:gap-x-[100px] gap-x-[20px] md:gap-y-[25px] gap-y-[5px]">
          <button class={color === "Cybernix" ? "glitchex" : "cybr-btn"} onClick={() => { handleData(Cybernix) }}>
            Cybernix<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">01</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "Nirmaan" ? "glitchex" : "cybr-btn"} onClick={() => { handleData(Nirmaan) }}>
            Nirmaan<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">02</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "Eloquense" ? "glitchex" : "cybr-btn"} onClick={() => { handleData(Eloquense) }}>
            Eloquense<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">03</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "Robonix" ? "glitchex" : "cybr-btn"} onClick={() => { handleData(Robonix) }}>
            Robonix<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">04</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "Illustro" ? "glitchex" : "cybr-btn"} onClick={() => { handleData(Illustro) }}>
            Illustro<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">05</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "specialEventsNormal" ? "glitchex" : "cybr-btn"} onClick={() => { handleData(specialEventsNormal) }}>
            Special<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">06</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "specialEventsGaming" ? "glitchex" : "cybr-btn"} onClick={() => { handleData(specialEventsGaming) }}>
            Gaming<span aria-hidden>_</span>
            <span class="cybr-btn__glitch">07</span>
            <span class="cybr-btn__tag"></span>
          </button>
          <button class={color === "funEvents" ? "glitchex" : "cybr-btn"} onClick={() => { handleData(funEvents) }}>
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
                  <ZigboxOne title={e.title} desc={e.desc} icon={e.icon} />
                </div>
              )
            })
          }
        </div>
      </div >
    </div>
  )
}

export default Events
