import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Teams from './Teams'
import Players from './Players'
import Navbar from './Nav'

class App extends Component {
  render() {
    return (
    	<Router>
    		<main>
    			<Navbar/>

    			<Switch>
				    <Route path="/" exact component={Home} />
				    <Route path="/players" component={Players} />
				    <Route path="/teams" component={Teams} />

				    <Route render={() => <h1 className="text-center">Four oh four</h1>} />
			    </Switch>
		    </main>
    	</Router>
    );
  }
}

export default App;
