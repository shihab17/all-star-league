import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeagueDetailsBody from './LeagueDetailsBody/LeagueDetailsBody';

const LeagueDetails = () => {
    const {idLeague} = useParams();
    const [leagues, setLeagues] = useState([]);
    useEffect(() =>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then (data => setLeagues(data.leagues));
    },[idLeague]);
    return (
        <div>
            {leagues.map(league => <LeagueDetailsBody league={league}></LeagueDetailsBody> )}
        </div>
    );
};

export default LeagueDetails;