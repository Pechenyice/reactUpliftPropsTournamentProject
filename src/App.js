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
        tournamentStarted: parseInt(localStorage.getItem('tournamentStarted')) || 0,
        team: JSON.parse(localStorage.getItem('team')) || {members: []},
        round: parseInt(localStorage.getItem('round')) || 1
      }
  );

  function handleCLickStartTournament(e) {
    if (handleError('tournamentStart')) {
      let action = {
        activated: true,
        type: 'error',
        text: 'Need more than 1 participant!'
      }
      setState({team: {members: state.team.members.sort((o, n) => (n.pts + n.tempPts) - (o.pts + o.tempPts))}, tournamentStarted: state.tournamentStarted, round: state.round, hint: action});
      return;
    }
    localStorage.setItem('tournamentStarted', 1);
    localStorage.setItem('round', 1);
    let action = {
      activated: true,
      type: 'accept',
      text: 'The new tournament has started successfully!'
    }
    setState({team: state.team, tournamentStarted: 1, round: 1, hint: action});
  }

  function handleCLickEndTournament(e) {
    localStorage.setItem('tournamentStarted', 0);
    setState({tournamentStarted: 0, team: {members: state.team.members.sort((o, n) => n.pts - o.pts)}});
  }

  function handleNewMember(fields) {
    
    let newMember = Object.assign({}, fields, {pts: 0, id: state.team.members.length, tempPts: 0});
    setState({team: {members: [...state.team.members, newMember]}});

    localStorage.setItem('team', JSON.stringify({members: [...state.team.members, newMember]}));
  }

  function handleDeleteMember(id) {
    let newTeam = state.team.members.filter((m, i) => i !== id);
    setState({team: {members: newTeam}});

    localStorage.setItem('team', JSON.stringify({members: newTeam}));
  }

  function handleNewRound() {
    let newMembersPositions = state.team.members.map(m => Object.assign({}, m, {pts: m.pts + m.tempPts, tempPts: 0}));
    setState({team: {members: newMembersPositions.sort((o, n) => (n.pts + n.tempPts) - (o.pts + o.tempPts))}, tournamentStarted: state.tournamentStarted, round: state.round + 1});
    localStorage.setItem('round', state.round + 1);
    localStorage.setItem('team', JSON.stringify({members: newMembersPositions}));
  }

  function handlePointsChange(id, v) {
    console.log('id ' + id)
    console.log('v ' + v)
    let newTeamSet = [...state.team.members];
    newTeamSet.forEach(e => {
      if (e.id == id) {
        e.tempPts = v;
      }
    });
    newTeamSet.sort((o, n) => (n.pts + n.tempPts) - (o.pts + o.tempPts));
    setState({team: {members: newTeamSet}, tournamentStarted: state.tournamentStarted, round: state.round});
  }

  function handleClearTournamentHistory() {
    setState({team: {members: []}, tournamentStarted: state.tournamentStarted, round: state.round});
  }

  function handleHintDelete() {
    setState({team: {members: state.team.members.sort((o, n) => (n.pts + n.tempPts) - (o.pts + o.tempPts))}, tournamentStarted: state.tournamentStarted, round: state.round, hint: null});
  }

  function handleError(type) {
    switch (type) {
      case 'tournamentStart': {
        return state.team.members.length < 2 ? true : false; 
      }
    }
  }

  return (
    <div className="App">
      <TournamentTable tournamentStarted={state.tournamentStarted} team={state.team} />
      <Logo />
      {
        state.tournamentStarted ? 
        <NewRound onNextRound={handleNewRound} onPointsChange={handlePointsChange} team={state.team} round={state.round}/> : 
        <NewTournament onStartTournament={handleCLickStartTournament} onMemberAdded={handleNewMember} onDeleteMember={handleDeleteMember} team={state.team}/>
      }
      <Controls onEndTournament={handleCLickEndTournament} onClearTournament={handleClearTournamentHistory} tournamentStarted={state.tournamentStarted}/>
      <Help />
      <Hints action={state.hint} onUserDelete={handleHintDelete}/>
    </div>
  );
}

export default App;
