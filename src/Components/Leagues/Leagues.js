import React from 'react';
import League from '../League/League';
import './Leagues.css'
const Leagues = (props) => {
    // console.log(props.league)
    const leagues = props.league;
    console.log(leagues)
    return (
        <div className="leagues"> 
            <div className="row">
                <img className="card-img-top" src="https://coverfiles.alphacoders.com/336/thumb-33661.jpg" alt="" />
                <h1 className="text-image">All Star League</h1>
            </div>
            <div className="row m-5 justify-content-center p-2" id="grid">
                {

                    leagues.map(league => <League leagues={league}></League>)
                }
            </div>
        </div>
    );
};

export default Leagues;