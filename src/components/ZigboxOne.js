import React from 'react'

const ZigboxOne = (props) => {

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
                    .card .content:hover .details{
                        top: 5%;
                    }
                    .card .content:hover p{
                        display: block;
                    }
                    @media screen and (max-width: 480px){
                        .card .content:hover p{
                            display: block;
                        }
                    }
                `}
            </style>
            <div className="card flex items-center md:mb-8 md:translate-x-[46px]">
                <div className='container flex items-center main ease-in-out duration-300 relative md:w-[380px] w-[250px] md:h-[180px] h-[338px] 
                    md:hover:w-[500px] md:hover:h-[220px]'>
                    <div className="content md:static md:bottom-0 relative bottom-20">
                        <div className="font-audiowide ease-in-out duration-300 details absolute md:bottom-[19px] bottom-[-239px] z-20 ml-5 md:w-[200px] w-[150px] text-white md:text-2xl text-lg">
                            {props.title}
                            <div className="md:w-[400px] w-[200px]">
                                <p className='font-chakra text-sm md:hidden ease-in-out duration-300 mt-3'>{props.desc}</p></div>
                        </div>
                    </div>
                </div>
                <div className="box md:block relative hidden ease-in-out duration-300 md:right-20 md:bottom-[0px] right-[60px] bottom-[170px]  md:w-[130px] w-[80px] md:h-[130px] h-[80px] overflow-hidden text-white text-center text-5xl"><i class={`${props.icon} relative top-[38px]`}></i></div>
            </div>
            <div className="box md:hidden relative bottom-[375px] left-[100px] ease-in-out duration-300 md:w-[130px] w-[80px] md:h-[130px] h-[80px] overflow-hidden text-white text-center text-4xl"><i class={`${props.icon} relative top-[19px]`}></i></div>
        </>
    )
}

export default ZigboxOne