import './App.css';
import { useEffect, useState } from 'react';
import League from './Components/League/League';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';
function App() {
  const [leagues, setLeague] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer";
    fetch(url)
      .then(res => res.json())
      .then(data => setLeague(data.countrys));
  }, []);
  // const data = teams.leagues;
  // console.log(teams[0])
  // clubs.map(team => console.log(team))
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              leagues.map(league => <League leagues={league}></League>)
            }
          </Route>
          <Route path="/club">
            {
              leagues.map(league => <League leagues={league}></League>)
            }
          </Route>
          <Route path="/clubDteails/:idLeague">
            <LeagueDetails></LeagueDetails>
          </Route>
        </Switch>
      </Router>
      <h1>{leagues.length}</h1>


    </div>
  );
}

export default App;
