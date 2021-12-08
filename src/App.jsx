import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Form from './Pages/Form.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
function App() {
    return (
        <Router>

            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Form">Form</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </nav>
            <hr></hr>
            <Switch>
                <Route exact path="/Home"><Home /></Route>
                <Route exact path="/Form" >< Form /></Route>
                <Route exact path="/About"><About /></Route>
            </Switch>
        </Router>
    );
}
export default App;