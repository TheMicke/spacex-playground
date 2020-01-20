

import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
    width: 896px;
    height: 504px;
    margin: 50px auto;

    iframe {
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
`;

function YoutubeVideo(props) {
    return (
        <VideoContainer>
            <iframe src={'https://www.youtube.com/embed/' + props.videoId}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
            />
        </VideoContainer>
    );
}


export default YoutubeVideo;
