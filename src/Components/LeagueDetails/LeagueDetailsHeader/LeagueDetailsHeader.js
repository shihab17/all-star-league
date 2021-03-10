import React from 'react';

const LeagueDetailsHeader = (props) => {
    const {strLeague,intFormedYear,strCountry,strSport,strGender} = props.league;
    let imgSrc=``;
    if(strGender==="Male"){
        imgSrc = "https://i.pinimg.com/originals/d6/19/c7/d619c781e67e5a64c512c05242157441.jpg"
    }
    else{
        imgSrc ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DIDbUj9UNthuy4Iev8yvLGbA-gcAEAj1QQ&usqp=CAU"
    }
    return (
        <div>
            <div>
                <h1>{strLeague}</h1>
                <h3>Founded: {intFormedYear}</h3>
                <h3>Country: {strCountry}</h3>
                <h3>Sport type: {strSport}</h3>
                <h3>Gender: {strGender}</h3>
            </div>
            <div>
                <img src={imgSrc} alt="image not found"/>
            </div>
        </div>
    );
};

export default LeagueDetailsHeader;