import React from 'react';
import Home from '../Home/Home';
import Nav from '../Nav/Nav'
import Form from '../Form/Form';
import Details from '../Details/Details';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Marketplace from '../Marketplace/Marketplace';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/marketplace/" component={Marketplace} />
        <Route exact path="/marketplace/:filter" render={({match}) => (
          <Marketplace navParam={match.params.filter} />
        )} />
        <Route exact path="/profile/:id" />
        <Route exact path="/details/:id/:name" render={({match}) => {
         return <Details id={match.params.id} name={match.params.name} />
        }}/>
        <Route render={() => <Error message={'404: Page Not Found'}/>} /> 
      </Switch>
    </div>
  )
}

export default App;
