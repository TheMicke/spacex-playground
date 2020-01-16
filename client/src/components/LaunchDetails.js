import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LoaderSpinner from './LoaderSpinner';
import LinkIcon from './common/LinkIcon';
import LinkRow from './common/LinkRow';
import ThumbnailGrid from './common/ThumbnailGrid';
import YoutubeVideo from './YoutubeVideo';

import defaultMissionPatch from '../images/spacex-x.png';


const MissionPatch = styled.img`
    max-width: 350px;
    margin: 25px auto;
    margin-right: ${props => props.placeholderPatch ? "-175px" : "0"};
`;

function LaunchDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [waitingForImages, setWaitingForImages] = useState(true);
    const [launch, setLaunch] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const flightNumber = props.match.params.flightNumber;
            await fetch(`/launches/${flightNumber}`)
                .then(res => res.json())
                .then(data => setLaunch(data))
                .catch(err => console.log(err));
            setIsLoading(false);
            setWaitingForImages(false);
        }
        fetchData();
    }, [props.match.params.flightNumber]);

    return (
        <div>
            {isLoading ? <LoaderSpinner /> : ''}
            {launch.links?.mission_patch ? <MissionPatch src={launch.links?.mission_patch} /> : <MissionPatch src={defaultMissionPatch} placeholderPatch />}
            <p>{launch.mission_name}</p>
            <LinkRow links={[
                launch.links?.article_link ? <LinkIcon key={launch.links?.article_link} href={launch.links?.article_link} linkType='article' /> : '',
                launch.links?.wikipedia ? <LinkIcon key={launch.links?.wikipedia} href={launch.links?.wikipedia} linkType='wikipedia' /> : '',
                launch.links?.video_link ? <LinkIcon key={launch.links?.video_link} href={launch.links?.video_link} linkType='youtube'/> : '',
                launch.links?.presskit ? <LinkIcon key={launch.links?.presskit} href={launch.links?.presskit} linkType='presskit' /> : '',
            ]} />

            <p>{launch.launch_success ? 'Successful launch' : 'Failed launch: ' + launch.launch_failure_details?.reason}</p>


<h2>Media:</h2>
            <YoutubeVideo videoId={launch.links?.youtube_id} />

            {waitingForImages ? <LoaderSpinner /> : <ThumbnailGrid images={launch.links?.flickr_images} />}
        </div>
    );
}

export default LaunchDetails;
