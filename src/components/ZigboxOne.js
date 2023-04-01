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
                        width: 900px;
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
                    }
                    .card:hover .content .details{
                        top: 5%;
                    }
                    .card:hover .content p{
                        display: block;
                    }
                `}
            </style>
            <div className="card flex items-center mb-4">
                <div className='container flex items-center main ease-in-out duration-300 relative w-[380px] h-[180px] 
                    hover:w-[500px] hover:h-[220px]'>
                    <div className="content">
                        <div className="font-audiowide ease-in-out duration-300 details absolute z-20 ml-5 w-[200px] text-white text-2xl">
                            {props.title}
                            <div className="w-[400px]">
                                <p className='font-chakra text-sm hidden ease-in-out duration-300 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corrupti architecto ipsam aut doloribus soluta quis optio officiis error aperiam, dolsse ad alias explicabo repudiandae reiciendis voluptatum ex. Possimus, eos harum veniam quos nihil nulla consequuntur, iste alias facere aspernatur temporibus distinctio.</p></div>
                        </div>
                    </div>
                </div>
                <div className="box relative ease-in-out duration-300 right-20 w-[130px] h-[130px] z-10 overflow-hidden"></div>
            </div>
        </>
    )
}

export default ZigboxOne