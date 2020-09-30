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
			    <h3>December 2019</h3>
                <button onClick={() => goBack()} className="main-button">Go Back</button>
            </div>
            <div className="gallery center">
                <Carousel autoPlay autoPlayInterval="2000" infiniteLoop>
                    <div>
                        <img src="https://images.lah-photography.com/2019/122219c/family01.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/122219c/family02.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/122219c/family03.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/122219c/family04.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/122219c/family05.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/122219c/family06.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/122219c/family07.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/122219c/family08.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/122219c/family09.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.lah-photography.com/2019/122219c/family10.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}