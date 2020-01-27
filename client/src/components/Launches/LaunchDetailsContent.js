import React from 'react';
import styled from 'styled-components';
import '../_css/details-view.css';

import LoaderSpinner from '../_common/LoaderSpinner';
import LinkIcon from '../_common/LinkIcon';
import LinkRow from '../_common/LinkRow';
import ThumbnailGrid from '../_common/ThumbnailGrid';
import YoutubeVideo from '../_common/YoutubeVideo';

import defaultMissionPatch from '../../images/spacex-x.png';

const MissionPatch = styled.img`
    max-width: 350px;
    margin: 25px auto;
    margin-right: ${props => (props.placeholderPatch ? '-175px' : '0')};
`;

function LaunchDetailsContent(props) {
    console.log('LaunchDetailsContent', props);
    const launch = props.launch;

    return (
        <div>
            <div className="info-block">
            {launch.links?.mission_patch ? <MissionPatch src={launch.links?.mission_patch} /> : <MissionPatch src={defaultMissionPatch} placeholderPatch />}
                <h2>{launch.mission_name}</h2>
                <LinkRow
                    links={[
                        launch.links?.article_link ? <LinkIcon key={launch.links?.article_link} href={launch.links?.article_link} linkType="article" /> : '',
                        launch.links?.wikipedia ? <LinkIcon key={launch.links?.wikipedia} href={launch.links?.wikipedia} linkType="wikipedia" /> : '',
                        launch.links?.video_link ? <LinkIcon key={launch.links?.video_link} href={launch.links?.video_link} linkType="youtube" /> : '',
                        launch.links?.presskit ? <LinkIcon key={launch.links?.presskit} href={launch.links?.presskit} linkType="presskit" /> : '',
                        launch.links?.reddit_campaign ? <LinkIcon key={launch.links?.reddit_campaign} href={launch.links?.reddit_campaign} linkType="reddit" /> : '',
                        launch.links?.reddit_launch ? <LinkIcon key={launch.links?.reddit_launch} href={launch.links?.reddit_launch} linkType="reddit" /> : '',
                        launch.links?.reddit_recovery ? <LinkIcon key={launch.links?.reddit_recovery} href={launch.links?.reddit_recovery} linkType="reddit" /> : '',
                    ]}
                />

                <p><span className="info-text-heading">Launch success: </span>{launch.launch_success ? 'Yes' : 'No. Reason: ' + launch.launch_failure_details?.reason}</p>
                {launch.launch_success ? '' : <p><span className="info-text-heading">Fail reason: </span>{launch.launch_failure_details?.reason}</p> }
                <p><span className="info-text-heading">Rocket: </span><a href={"/rockets/" + launch.rocket?.rocket_id}>{launch.rocket?.rocket_name}</a></p>
                <p><span className="info-text-heading">Launch site: </span> <a href={"/launch_pads/" + launch.launch_site?.site_id }>{launch.launch_site?.site_name_long}</a></p>
                <p><span className="info-text-heading"></span></p>
            </div>

            {launch.links?.youtube_id || launch.links?.flickr_images[0] ? <h2>Media:</h2> : ''}
            {launch.links?.youtube_id ? <YoutubeVideo videoId={launch.links?.youtube_id} /> : ''}

            {props.waitingForImages ? <LoaderSpinner /> : <ThumbnailGrid images={launch.links?.flickr_images} />}
        </div>
    );
}

export default LaunchDetailsContent;
