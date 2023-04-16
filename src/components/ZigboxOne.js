import React, { useState } from 'react'
import '../pages/Events/glitch.css'
import Modal from '../components/Modal';

const ZigboxOne = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <style>
                {`
                    .main{
                        inset: 0;
                        background: #000000;
                        overflow: hidden;
                        z-index: 0;
                    }
                    .main::before{
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 900px;
                        height: 180px;
                        background: linear-gradient(transparent, #45F3FF, #45F3FF, transparent);
                        animation: animate 2s linear infinite;
                    }
                    @keyframes animate{
                        0%{
                            transform: translate(-50%, -50%) rotate(0deg);
                        }
                        100%{
                            transform: translate(-50%, -50%) rotate(360deg);
                        }
                    }
                    .main::after{
                        content: '';
                        position: absolute;
                        inset: 3px;
                        background: #373E40;
                    }
                    .box::before{
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 200px;
                        height: 180px;
                        background: linear-gradient(transparent, #FF3C7B, #FF3C7B, transparent);
                        animation: animate2 2s linear infinite;
                    }
                    @keyframes animate2{
                        0%{
                            transform: translate(-50%, -50%) rotate(360deg);
                        }
                        100%{
                            transform: translate(-50%, -50%) rotate(0deg);
                        }
                    }
                    .box::after{
                        content: '';
                        position: absolute;
                        inset: 3px;
                        background: black;
                        z-index:1;
                    }
                    .box i{
                        z-index: 5;
                    }
                    .card .container:hover .details{
                        top: 7%;
                    }
                    .card .container:hover p{
                        display: block;
                    }
                    .card .container .btn-gr{
                        display: hidden;
                    }
                    .card .container:hover .btn-gr{
                        display: block;
                        z-index: 20;
                        flex-direction: row!important;
                    }
                    .card .container:hover .btn-gr .btn2{
                        margin-top: 0px
                    }
                    @media screen and (max-width: 480px){
                        .card .content:hover p{
                            display: block;
                        }
                        .container .content{
                            display: flex;
                        }
                    }
                `}
            </style>
            <div className="card flex items-center md:mb-8 md:translate-x-[46px]">
                <div className='container overflow-y-scroll flex items-center main ease-in-out duration-300 relative md:w-[340px] w-[250px] md:h-[200px] h-[300px] md:hover:w-[400px] md:hover:h-[270px]'>
                    <div className="content md:static md:bottom-0 relative">
                        <div className="font-audiowide flex flex-col justify-center details md:absolute md:bottom-[19px] bottom-[-140px] z-20 ml-5 text-white md:text-2xl text-lg">
                            <p className='md:w-[280px] w-[150px]'>{props.title}</p>
                            <div className="md:w-[270px] md:h-full w-[200px] h-[160px] overflow-y-scroll">
                                <p className='font-chakra md:hidden text-sm ease-in-out duration-300 mt-3'>{props.desc}</p>
                            </div>
                            <div className="md:mt-6 mt-4 static flex md:flex-col hover:block btn-gr">
                                <button className="cybr-btn z-20 mr-5" onClick={() => {
                                    setModalOpen(true);
                                }}>Register<span aria-hidden>_</span>
                                    <span className="cybr-btn__glitch">01</span>
                                    <span className="cybr-btn__tag"></span>
                                </button>
                                <button className="cybr-btn btn2 md:mt-4 z-20" onClick={() => {
                                    setModalOpen(true);
                                }}>Rulebook<span aria-hidden>_</span>
                                    <span className="cybr-btn__glitch">01</span>
                                    <span className="cybr-btn__tag"></span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="box md:block relative hidden ease-in-out duration-300 md:right-30 md:bottom-[0px] right-[60px] bottom-[170px]  md:w-[130px] w-[80px] md:h-[130px] h-[80px] overflow-hidden text-white text-center text-5xl"><i class={`${props.icon} relative top-[38px]`}></i></div>
            </div>
            <div className="box md:hidden relative bottom-[335px] left-[100px] ease-in-out duration-300 md:w-[130px] w-[80px] md:h-[130px] h-[80px] overflow-hidden text-white text-center text-4xl"><i class={`${props.icon} relative top-[19px]`}></i></div>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </>
    )
}

export default ZigboxOne