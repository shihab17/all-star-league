import React from 'react';
import "./LeagueDetailsBody.css";
import maleImage from '../../../images/male.png';
import feMaleImage from '../../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import {
    faYoutube,
    faFacebook,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
const LeagueDetailsBody = (props) => {
    const { strLeague, intFormedYear, strCountry, strSport, strGender, strBanner, strDescriptionEN, strDescriptionFR, strTwitter, strYoutube, strFacebook } = props.league;
    let imgSrc = ``;
    if (strGender === "Male") {
        imgSrc = maleImage;
    }
    else {
        imgSrc = feMaleImage;
    }
    return (
        <div>
            <div className="row">
                <img className="card-img-top" src={strBanner} alt="" />
            </div>
            <div className="row m-4 legueDetailsHeader rounded">
                <div id="first" className="col-md text-left p-5">
                    <h2>{strLeague}</h2>
                    <p> <svg width="18" height="19" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99999 0.91156C2.44132 0.91156 0.359741 2.99319 0.359741 5.55181C0.359741 8.11044 2.44132 10.1921 4.99999 10.1921C7.55866 10.1921 9.64024 8.11044 9.64024 5.55181C9.64024 2.99319 7.55866 0.91156 4.99999 0.91156ZM4.31534 7.67389L2.17305 5.53161L3.16929 4.53537L4.31534 5.68137L6.82634 3.17037L7.82257 4.16661L4.31534 7.67389Z" fill="white" />
                    </svg> Founded: {intFormedYear}</p>
                    <p> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                    <p> <FontAwesomeIcon icon={faFutbol} /> Sport type: {strSport}</p>
                    <p> <FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>


                </div>
                <div id="second" className="col-md text-right p-5 ">
                    <img className="card-img-top" src={imgSrc} alt="image not found" />
                </div>
            </div>
            <div className="row m-3 p-2 text-left">
                <p>{strDescriptionEN}</p>
            </div>
            <div className="row m-3 p-2 text-left">
                <p>{strDescriptionFR}</p>
            </div>
            <div className="row m-3 p-2 ">
                <div className="col-4">

                </div>
                <div className="col-4 text-center align-self-center">
                    <a target="_blank" href={strTwitter}> <FontAwesomeIcon icon={faTwitter} size="4x" /></a>
                    <a target="_blank" href={strFacebook}> <FontAwesomeIcon icon={faFacebook} size="4x" /></a>
                    <a target="_blank" href={strYoutube}> <FontAwesomeIcon icon={faYoutube} size="4x" /></a>
                </div>

            </div>

        </div>

    );
};

export default LeagueDetailsBody;