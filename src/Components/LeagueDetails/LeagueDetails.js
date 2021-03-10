import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeagueDetailsHeader from './LeagueDetailsHeader/LeagueDetailsHeader';

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
            <h1>This is Club details {idLeague}</h1>
            {leagues.map(league => <LeagueDetailsHeader league={league}></LeagueDetailsHeader> )}
        </div>
    );
};

export default LeagueDetails;