import React from 'react'
import "../styles/videoCard.css"



const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
const VideoCard = ({item,key,image,name,url}) => {
    return (
        <a href={url}>
        <div className="videoCard" style={{backgroundImage:`url(${image})`}}>
        
        <a href="#/">{playButton}</a>          
        <p>{name}</p>  
        </div>

        </a>

    )
}

export default VideoCard
