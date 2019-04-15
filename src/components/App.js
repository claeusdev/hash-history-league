import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
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
			    <Route path="/" exact component={Home} />
			    <Route path="/players" component={Players} />
			    <Route path="/teams" component={Teams} />
		    </main>
    	</Router>
    );
  }
}

export default App;
