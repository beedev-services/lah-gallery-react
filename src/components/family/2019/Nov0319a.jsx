import React from 'react'
import { useHistory } from 'react-router-dom'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


export default function Nov0319a() {
    const { goBack } = useHistory()


    return (
        <div>
            <div className="heading">
                <h1>Family</h1>
			    <h3>November 2019</h3>
                <button onClick={() => goBack()} className="main-button">Go Back</button>
            </div>
            <div className="gallery center">
                <Carousel autoPlay autoPlayInterval="2000" infiniteLoop>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family01.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family02.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family03.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family04.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family05.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family06.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family07.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family08.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family09.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family10.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family11.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/110319a/family12.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}