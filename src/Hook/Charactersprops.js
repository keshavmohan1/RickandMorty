import '../Dashboard/Dashboard.css';
import React, { useState } from 'react'
import { ApiHelper } from '../Utils/ApiHelper';

export const Charactersprops = (props) => {

    const [dimension, setDimension] = useState(props.arr);
    const [residents, setResidents] = useState(props.arr);


    const recursivHit = (param) => {
        let url = "location/?name=" + param;
        ApiHelper(url, 'GET')
            .then(resposnse => {
                setDimension(resposnse.results[0].dimension)
                setResidents(resposnse.results[0].residents.length)
            })
    }
    return (

        <div className="showcase__Inner-sc-1x4wk68-1 iUltZj">
            <div className="characterCard__Wrapper-sc-1ejywvi-0 jHMBqe">
                <div className="characterCard__ImgWrapper-sc-1ejywvi-1 gzCUdp">
                    <img src={props?.image} alt={props?.name} /></div>
                {/* Flex 1 */}
                <div className="characterCard__ContentWrapper-sc-1ejywvi-2 ldeZQp">
                    <div className="section">
                        <div className='h2bold'>{props?.name}</div><span className="status">
                            <span className={props?.status === 'Alive' ? 'status__icon_green' : 'status_icon_red'}></span> {props?.status} - {props?.species}</span></div>
                    <div className="section">
                        <span className="text-gray">Origin:</span>
                        {props?.origin}</div>
                    <div className="section"><span className="text-gray">Location:</span>
                        {props?.location}
                    </div></div>
                {/* Flex 2 */}
                <div className="characterCard__ContentWrapper-sc-1ejywvi-2 ldeZQp">
                    <div className="section">
                        <span className="text-gray">Gender:</span>
                        {props?.gender}
                    </div>
                    <div className="section">
                        <span className="text-gray">Dimension:</span>

                        <span onClick={() => recursivHit(props?.origin)}>{dimension == '' ? 'Click Here' : dimension}</span>


                    </div>
                    <div className="section"><span className="text-gray">Amount of Residents:</span>
                        <span onClick={() => recursivHit(props?.origin)}>{residents == '' ? 'Click Here' : residents}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}