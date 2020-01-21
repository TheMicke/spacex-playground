import React from 'react';
import styled from 'styled-components';

import LoaderSpinner from '../_common/LoaderSpinner';
import LinkIcon from '../_common/LinkIcon';
import LinkRow from '../_common/LinkRow';
import ThumbnailGrid from '../_common/ThumbnailGrid';
import YoutubeVideo from '../YoutubeVideo';

import defaultMissionPatch from '../../images/spacex-x.png';

const MissionPatch = styled.img`
    max-width: 350px;
    margin: 25px auto;
    margin-right: ${props => (props.placeholderPatch ? '-175px' : '0')};
`;

function LaunchDetailsContent(props) {
    const launch = props.launch;

    return (
        <div>
            {console.log('props: LaunchDetailsContent', props)}
            {launch.links?.mission_patch ? <MissionPatch src={launch.links?.mission_patch} /> : <MissionPatch src={defaultMissionPatch} placeholderPatch />}
            <p>{launch.mission_name}</p>
            <LinkRow
                links={[
                    launch.links?.article_link ? <LinkIcon key={launch.links?.article_link} href={launch.links?.article_link} linkType="article" /> : '',
                    launch.links?.wikipedia ? <LinkIcon key={launch.links?.wikipedia} href={launch.links?.wikipedia} linkType="wikipedia" /> : '',
                    launch.links?.video_link ? <LinkIcon key={launch.links?.video_link} href={launch.links?.video_link} linkType="youtube" /> : '',
                    launch.links?.presskit ? <LinkIcon key={launch.links?.presskit} href={launch.links?.presskit} linkType="presskit" /> : '',
                ]}
            />

            <p>{launch.launch_success ? 'Successful launch' : 'Failed launch: ' + launch.launch_failure_details?.reason}</p>

            {launch.links?.youtube_id || launch.links?.flickr_images[0] ? <h2>Media:</h2> : ''}
            {launch.links?.youtube_id ? <YoutubeVideo videoId={launch.links?.youtube_id} /> : ''}

            {props.waitingForImages ? <LoaderSpinner /> : <ThumbnailGrid images={launch.links?.flickr_images} />}
        </div>
    );
}

export default LaunchDetailsContent;
