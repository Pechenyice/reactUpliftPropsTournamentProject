import React, {useState} from "react";
import TournamentTable from "./components/TournamentTable/TournamentTable";
import Logo from "./components/Logo/Logo";
import NewTournament from "./components/NewTournament/NewTournament";
import './App.css';
import NewRound from "./components/NewRound/NewRound";
import Controls from "./components/Controls/Controls";
import Help from "./components/Help/Help";

function App() {

  const [state, setState] = useState(
      {
        tournamentStarted: !!localStorage.getItem('tournamentStarted')
      }
  );

  function handleCLickStartTournament(e) {
    localStorage.setItem('tournamentStarted', true);
    setState({tournamentStarted: !!localStorage.getItem('tournamentStarted')});
  }

  function handleCLickEndTournament(e) {
    localStorage.setItem('tournamentStarted', true);
    setState({tournamentStarted: !!localStorage.getItem('tournamentStarted')});
  }

  return (
    <div className="App">
      <TournamentTable />
      <Logo />
      <NewTournament shouldRender={!state.tournamentStarted} onStart={handleCLickStartTournament} />
      <NewRound shouldRender={state.tournamentStarted} />
      <Controls onEnd={handleCLickEndTournament} />
      <Help />
    </div>
  );
}

export default App;
