import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Carousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"


export default function Family() {
    // const history = useHistory()
    const { goBack } = useHistory()

    // const routeToSep2919a = event => {
    //     history.push('./family/Sep2919a')
    //     console.log("tell me something please")
    // }
    // <button onClick={routeToSep2919a}>September</button>

    return (
        <div>
            <div className="heading">
                <h1>The Family Sessions Gallery</h1>
                <button onClick={() => goBack()} className="main-button">Go Back</button>
            </div>
            <div className="content alt">
                <div className="shootlist">
                    <b>2019:</b>
                    <Link to="/family/sep2919a">September - Family Shoot</Link>
                    <Link to="/family/oct0519a">October - Nikki & Josh's Couple Session</Link>
                    <Link to="Nov0319a">November - Family Shoot</Link>
                    <Link to="Dec2219c">December - Family Shoot</Link>
                </div>
                <div className="homeimgs">
                    <Carousel autoPlay autoPlayInterval="2000">
                        <img src="https://images.lah-photography.com/gallery/family05.jpg" alt="family" className="sliderimg center" />
                        <img src="https://images.lah-photography.com/gallery/family10.jpg" alt="family" className="sliderimg center" />
                        <img src="https://images.lah-photography.com/gallery/family16.jpg" alt="family" className="sliderimg center" />
                    </Carousel>
                </div>
                <div className="shootlist">
                    <b>2020:</b>
                    <Link to="/family/jan1420a">January - Maternity & Family Shoot</Link>
                    <Link to="/family/jan1920a">January - Zavier's Birthday Shoot</Link>
                    <Link to="/family/jan2520a">January - Addison's Birthday Shoot</Link>
                    <Link to="/family/feb2520b">February - Father Daughter Shoot</Link>
                    <Link to="/family/mar2120a">March - Fun with the Big Kids</Link>
                </div>
            </div>
        </div>
    )
}