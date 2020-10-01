import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {

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
                    <p>Under Construction</p>
                    {/* <Link to="/toy">Toy Drive - Under Construction</Link> */}
                    {/* <Link to="/easter">Easter - Under Construction</Link> */}
                </div>
                <div className="list">
                    <b>Events & Other Shoots</b>
                    <p>Coming Soon</p>
                    {/* <Link to="/sports">Sport Shoots - Coming Soom</Link> */}
                    {/* <Link to="/nature">Nature & Art - Coming Soon</Link> */}
                    {/* <Link to="/special">Special Shoots = Coming Soon</Link> */}
                </div>
            </div>
        </div>
    )
}