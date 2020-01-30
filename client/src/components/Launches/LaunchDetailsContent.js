import React from 'react';
import styled from 'styled-components';
import '../_css/details-view.css';
import '../_css/component-general.css';
import DefaultBackButton from '../_common/DefaultBackButton';

import LoaderSpinner from '../_common/LoaderSpinner';
import LinkIcon from '../_common/LinkIcon';
import LinkRow from '../_common/LinkRow';
import ThumbnailGrid from '../_common/ThumbnailGrid';
import YoutubeVideo from '../_common/YoutubeVideo';

import defaultMissionPatch from '../../images/spacex-x.png';
import UnixTimeConverter from '../_common/UnixTimeConverter';
import BackToTopButton from '../_common/BackToTopButton';

const MissionPatch = styled.img`
    display: block;
    width: 90%;
    max-width: 350px;
    margin: 25px auto;
    ${props => (props.placeholderPatch ? 'margin-right: -175px' : '')};
`;

function LaunchDetailsContent(props) {
    console.log('LaunchDetailsContent', props);
    const launch = props.launch;

    return (
        <div className="page-content-container">
            <DefaultBackButton />
            <BackToTopButton />
            <div className="data-block">
            {launch.links?.mission_patch ? <MissionPatch src={launch.links?.mission_patch} /> : <MissionPatch src={defaultMissionPatch} placeholderPatch />}
                <h2>{launch.mission_name}</h2>
                <LinkRow
                    links={[
                        launch.links?.article_link ? <LinkIcon key={launch.links?.article_link} href={launch.links?.article_link} linkType="article" hoverText="Article" /> : '',
                        launch.links?.wikipedia ? <LinkIcon key={launch.links?.wikipedia} href={launch.links?.wikipedia} linkType="wikipedia" hoverText="Wikipedia" /> : '',
                        launch.links?.video_link ? <LinkIcon key={launch.links?.video_link} href={launch.links?.video_link} linkType="youtube" hoverText="Video"/> : '',
                        launch.links?.presskit ? <LinkIcon key={launch.links?.presskit} href={launch.links?.presskit} linkType="presskit" hoverText="Press kit"/> : '',
                        launch.links?.reddit_campaign ? <LinkIcon key={launch.links?.reddit_campaign} href={launch.links?.reddit_campaign} linkType="reddit" hoverText="Reddit: campaign"/> : '',
                        launch.links?.reddit_launch ? <LinkIcon key={launch.links?.reddit_launch} href={launch.links?.reddit_launch} linkType="reddit" hoverText="Reddit: launch"/> : '',
                        launch.links?.reddit_recovery ? <LinkIcon key={launch.links?.reddit_recovery} href={launch.links?.reddit_recovery} linkType="reddit" hoverText="Reddit: recovery"/> : '',
                    ]}
                />

                
                <p><span className="details-text-heading">Launch date </span>{ 
                (Math.floor(Date.now()/1000)) < launch.launch_date_unix ? '(planned): ' : '' }<UnixTimeConverter timestamp={launch.launch_date_unix} />
                </p>
                { (Math.floor(Date.now()/1000)) > launch.launch_date_unix ? '' : <p><span className="details-text-heading">Launch success: </span>{launch.launch_success ? 'Yes' : 'No. Reason: ' + launch.launch_failure_details?.reason}</p>}
                <p><span className="details-text-heading">Rocket: </span><a href={"/rockets/" + launch.rocket?.rocket_id}>{launch.rocket?.rocket_name}</a></p>
                <p><span className="details-text-heading">Launch site: </span> <a href={"/launch_pads/" + launch.launch_site?.site_id }>{launch.launch_site?.site_name_long + ' (' + launch.launch_site?.site_name + ')'}</a></p>
                <p><span className="details-text-heading">Flight number: </span>{launch.flight_number}</p>
                <p><span className="details-text-heading">Details: </span>{launch.details}</p>
                <p><span className="details-text-heading">Ships used: </span>{launch.ships?.map(ship => <a href={'/ships/'+ship} key={ship}>{ship + ', '}</a> )}</p>
                

            </div>

            {launch.links?.youtube_id || launch.links?.flickr_images[0] ? <h2>Media:</h2> : ''}
            {launch.links?.youtube_id ? <YoutubeVideo videoId={launch.links?.youtube_id} /> : ''}

            {props.waitingForImages ? <LoaderSpinner /> : <ThumbnailGrid images={launch.links?.flickr_images} />}
        </div>
    );
}

export default LaunchDetailsContent;
