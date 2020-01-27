import React from 'react';
import Youtube from 'react-youtube-embed';
import styled from 'styled-components';

const VideoContainer = styled.div`
    width: 896px;
    height: 504px;
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
