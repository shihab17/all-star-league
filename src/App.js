import './App.css';
import { useEffect, useState } from 'react';
import League from './Components/League/League';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leagues from './Components/Leagues/Leagues';
import NoMatch from './Components/NoMatch/NoMatch';
function App() {
  const [leagues, setLeague] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer";
    fetch(url)
      .then(res => res.json())
      .then(data => setLeague(data.countrys));
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              <Leagues league={leagues}></Leagues>
            }
          </Route>
          <Route path="/club">
            {
              leagues.map(league => <League leagues={league} key={league.idLeague}></League>)
            }
          </Route>
          <Route path="/leagueDteails/:idLeague">
            <LeagueDetails></LeagueDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
