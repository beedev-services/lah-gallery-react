import React from 'react'
import { Route, Switch, useHistory, Link } from 'react-router-dom'

// import Sep2919a from './family/Sep2919a'

export default function Home() {
    const history = useHistory();

    const routeToToy = event => {
        history.push('./toy');
    }
    const routeToEaster = event => {
        history.push('./easter');
    }
    const routeToValentines = event => {
        history.push('./valentines');
    }
    const routeToSports = event => {
        history.push('./sports');
    }
    const routeToNature = event => {
        history.push('./nature');
    }
    const routeToSpecial = event => {
        history.push('./special');
    }
    return (
        <div>
            <div className='heading'>
                <h1>Welcome to the Gallery</h1>
			    <h3>Click a link below to view different photo shoots</h3>
            </div>
            <div className="content alt">
                <div className="list">
                    <b>Photo Shoots</b>
                    <Link to="/family">Family Sessions</Link>
                    <Link to="/senior">Senior & Prom Sessions</Link>
                    <Link to="/baby">Maternity & Baby Sessions</Link>
                    <Link to="/wedding">Engagement & Wedding Sessions</Link>
                </div>
                <div className="list">
                    <b>Holidays</b>
                    <button onClick={routeToToy} className="main-button">Toy Drive</button>
                    <button onClick={routeToEaster} className="main-button">Easter</button>
                    <button onClick={routeToValentines} className="main-button">Valentines Day</button>
                </div>
                <div className="list">
                    <b>Events & Other Shoots</b>
                    <button onClick={routeToSports} className="main-button">Sport Shoots</button>
                    <button onClick={routeToNature} className="main-button">Nature & Art - Coming Soon</button>
                    <button onClick={routeToSpecial} className="main-button">Special Shoots = Coming Soon</button>
                </div>
                {/* <Switch>
                    <Route path="/family/Sep2919a">
                        <Sep2919a />
                    </Route>
                </Switch> */}
            </div>
        </div>
    )
}