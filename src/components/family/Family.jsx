import React from 'react'
import { Link, useHistory } from 'react-router-dom'


// const routeToBaby = event => {
//     history.push('./baby');
// }


export default function Family() {
    const history = useHistory()
    const routeToSep2919a = event => {
        history.push('./family/Sep2919a')
    }

    return (
        <div>
            <div className="heading">
                <h1>The Family Sessions Gallery</h1>
            </div>
            <div className="content alt">
                <div className="shootlist">
                    <b>2019:</b>
                    <button onClick={routeToSep2919a}>September</button>
                    <Link to="/family/Sep2919a">September - Family Shoot</Link>
                    <Link to="Oct0519a">October - Nikki & Josh's Couple Session</Link>
                    <Link to="Nov0319a">November - Family Shoot</Link>
                    <Link to="Dec2219c">December - Family Shoot</Link>
                </div>
            </div>
        </div>
    )
}