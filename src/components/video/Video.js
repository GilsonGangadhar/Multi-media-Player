import React from 'react'
import {AiFillEye} from 'react-icons/ai'
import "./_video.scss"

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="https://i.ytimg.com/vi/ftJKqKuppF4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTyB2p-1QT18NxSiLP7G2U-qUk_w" alt=""/>
                <span>05.43</span>
            </div>
            <div className="video__title">
                Create app in 5 minutes #made by chintu
            </div>
            <div className="video__details">
                <span>
                <AiFillEye /> 5m Views •
                </span>
            </div>
            <div className="video__channel">
                <img src="https://yt3.ggpht.com/ytc/AKedOLS2hTRYZWpqcVUPi1GEW6M4GZgAfPSOcXy9c0U-pA=s68-c-k-c0x00ffffff-no-rj" alt=""/>
                <p>Rainbow Hat jr</p>
            </div>
        </div>
    )
}

export default Video
