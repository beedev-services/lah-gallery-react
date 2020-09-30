import React from 'react'
import { useHistory } from 'react-router-dom'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


export default function Oct0519a() {
    const { goBack } = useHistory()


    return (
        <div>
            <div className="heading">
                <h1>Nikki & Josh</h1>
			    <h3>October 2019</h3>
                <button onClick={() => goBack()} className="main-button">Go Back</button>
            </div>
            <div className="gallery center">
                <Carousel autoPlay autoPlayInterval="2000" infiniteLoop>
                    <div>
                        <img src="https://images.lah-photography.com/2019/100519a/couple01.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/100519a/couple02.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/100519a/couple03.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/100519a/couple04.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/100519a/couple05.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/100519a/couple06.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/100519a/couple07.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/100519a/couple08.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}