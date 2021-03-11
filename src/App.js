import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import SingleLeagueDetails from './pages/SingleLeagueDetails'

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
        <Home/>
       </Route>
        <Route exact path='/:id' children={<SingleLeagueDetails/>}/>
     </Switch>
   </Router>
  );
}

export default App;
