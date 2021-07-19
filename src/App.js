import React, {useState} from "react";
import TournamentTable from "./components/TournamentTable/TournamentTable";
import Logo from "./components/Logo/Logo";
import NewTournament from "./components/NewTournament/NewTournament";
import './App.css';
import NewRound from "./components/NewRound/NewRound";
import Controls from "./components/Controls/Controls";
import Help from "./components/Help/Help";
import Hints from "./components/Hints/Hints";

function App() {

  const [state, setState] = useState(
      {
        tournamentStarted: localStorage.getItem('tournamentStarted')
      }
  );

  function handleCLickStartTournament(e) {
    localStorage.setItem('tournamentStarted', 1);
    setState({tournamentStarted: 1});
  }

  function handleCLickEndTournament(e) {
    localStorage.setItem('tournamentStarted', 0);
    setState({tournamentStarted: 0});
  }

  return (
    <div className="App">
      <TournamentTable tournamentStarted={state.tournamentStarted} team={state.tournamentStarted ? state.currentTeam : state.lastTeam} />
      <Logo />
      <NewTournament shouldRender={!state.tournamentStarted} onStart={handleCLickStartTournament} />
      <NewRound shouldRender={state.tournamentStarted} />
      <Controls onEnd={handleCLickEndTournament} />
      <Help />
      <Hints />
    </div>
  );
}

export default App;
