import React from 'react';

const VideoDetail = (props) => {

    if(props.error){
        return <div style={{color: 'red'}}>Sorry! Service unavailable. Please try later. </div>
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe title="video-player" src={videoSrc}/>
            </div>
            <div className="ui segment snippet-info">
                <h4 className="ui header">{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;