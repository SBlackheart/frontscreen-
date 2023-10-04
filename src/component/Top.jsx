import React from 'react';
import "./Top.css"
import { FaBars, FaBell, FaRegClock, FaFacebookMessenger, FaPlusSquare, FaEllipsisH, FaEject,FaStar } from "react-icons/fa";
import Baba from './Baba';

const Top = () => {
    return (<div>
        <div id='bar1'>
            <div className='bar'>
                <FaBars className='bar1' />
                <h2>App Name</h2>
                <FaBell id='bar' />
            </div>
            <div id='card'>
                <div className='card'>
                    <h3>English Class</h3>
                    <div className='ca'><FaRegClock /> <span>12 sep 2022</span></div>
                    <Baba />
                    <FaFacebookMessenger className='fa' />

                </div>
                <div className='card'>
                    <h3>English Class</h3>
                    <div className='ca'><FaRegClock /> <span>12 sep 2022</span></div>
                    <Baba />
                    <FaFacebookMessenger className='fa' ></FaFacebookMessenger>
                </div>
                <div className='card'>
                    <h3>English Class</h3>
                    <div className='ca'><FaRegClock /> <span>12 sep 2022</span></div>
                    <Baba />
                    <FaFacebookMessenger className='fa' />

                </div>
                <div className='card'>
                    <h3>English Class</h3>
                    <div className='ca'><FaRegClock /> <span>12 sep 2022</span></div>
                    <Baba />
                    <FaFacebookMessenger className='fa' />

                </div>
                <div className='card'>
                    <h3>English Class</h3>
                    <div className='ca'><FaRegClock /> <span>12 sep 2022</span></div>
                    <Baba />
                    {/* <FaRegComment className='fa' /> <span id='fa'></span> */}
                    <FaFacebookMessenger className='fa' />
                </div>
            </div>

            <div className='bottom'>
                <FaEject className='e' />
                <p id='e'>

                    Groups</p>
                <p id='g'>
                <FaStar className='g'/>
                <br></br>
                Join</p>

                <p id='h'>
                    <FaPlusSquare className='h' />
                    <br />
                    Create</p>
                <p id='i'>
                    <FaEllipsisH className='i' />
                    More</p>
            </div>

        </div>
    </div>
    );
};

export default Top;