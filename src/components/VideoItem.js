import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
    
    return (
        <div onClick={() => props.onVideoSelect(props.video)} className="video-item item">
            <img alt={props.video.snippet.title} className="ui image" src={props.video.snippet.thumbnails.medium.url}/>
            <div className="content">
                {props.video.snippet.title}
            </div>
        </div>
    );
};

export default VideoItem;