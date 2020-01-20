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
    return (
        <div>
            {console.log('props: LaunchDetailsContent', props)}
            {props.launch.links?.mission_patch ? <MissionPatch src={props.launch.links?.mission_patch} /> : <MissionPatch src={defaultMissionPatch} placeholderPatch />}
            <p>{props.launch.mission_name}</p>
            <LinkRow
                links={[
                    props.launch.links?.article_link ? <LinkIcon key={props.launch.links?.article_link} href={props.launch.links?.article_link} linkType="article" /> : '',
                    props.launch.links?.wikipedia ? <LinkIcon key={props.launch.links?.wikipedia} href={props.launch.links?.wikipedia} linkType="wikipedia" /> : '',
                    props.launch.links?.video_link ? <LinkIcon key={props.launch.links?.video_link} href={props.launch.links?.video_link} linkType="youtube" /> : '',
                    props.launch.links?.presskit ? <LinkIcon key={props.launch.links?.presskit} href={props.launch.links?.presskit} linkType="presskit" /> : '',
                ]}
            />

            <p>{props.launch.launch_success ? 'Successful launch' : 'Failed launch: ' + props.launch.launch_failure_details?.reason}</p>

            <h2>Media:</h2>
            <YoutubeVideo videoId={props.launch.links?.youtube_id} />

            {props.waitingForImages ? <LoaderSpinner /> : <ThumbnailGrid images={props.launch.links?.flickr_images} />}
        </div>
    );
}

export default LaunchDetailsContent;
