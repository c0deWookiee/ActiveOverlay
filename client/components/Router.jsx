import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from './Dashboard.jsx';
import TipAnnouncement from './miniApps/TipAnnouncement.jsx';


class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/TipAnnouncement/">About</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Dashboard} />
                <Route path="/TipAnnouncement/" component={TipAnnouncement} />
            </div>
        </Router>);
    }
}

export default AppRouter;