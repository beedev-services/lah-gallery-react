import React from 'react'
import { useHistory } from 'react-router-dom'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Sep2919a()  {
    const { goBack } = useHistory()


    return (
        <div>
            <div className="heading">
                <h1>Family Shoot</h1>
                <h3>September 2019</h3>
                <button onClick={() => goBack()} className="main-button">Go Back</button>
            </div>
            <div className="gallery center">
                <Carousel autoPlay autoPlayInterval="2000" infiniteLoop>
                    <div>
                        <img src="https://images.lah-photography.com/2019/092919a/family01.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/092919a/family02.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/092919a/family03.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/092919a/family04.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/092919a/family05.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
