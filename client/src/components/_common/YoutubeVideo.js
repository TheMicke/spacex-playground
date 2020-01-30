import React from 'react';
import Youtube from 'react-youtube-embed';
import styled from 'styled-components';

const VideoContainer = styled.div`
    width: 100%;
    max-width: 896px;
    height: auto;
    margin: 50px auto;
    pointer-event: none;
`;

function YoutubeVideo(props) {
    return (
        <VideoContainer>
            <Youtube id={props.videoId} />
        </VideoContainer>
    )
}

export default YoutubeVideo;
