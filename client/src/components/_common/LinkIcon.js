import React from 'react';
import styled from 'styled-components';

import defaultLinkIcon from '../../images/default_link_icon.svg';
import wikipediaIcon from '../../images/wikipedia_icon.svg';
import youtubeIcon from '../../images/youtube_icon.svg';
import articleIcon from '../../images/article_icon.svg';
import presskitIcon from '../../images/presskit_icon.svg';
import facebookIcon from '../../images/facebook_icon.svg';
import flickrIcon from '../../images/flickr_icon.svg';
import instagramIcon from '../../images/instagram_icon.svg';
import redditIcon from '../../images/reddit_icon.svg';
import twitterIcon from '../../images/twitter_icon.svg';

const LinkImage = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 5px;
    margin-bottom: -5px;
`;

const getIcon = type => {
    switch (type) {
        case 'wikipedia':
            return wikipediaIcon;

        case 'youtube':
            return youtubeIcon;

        case 'article':
            return articleIcon;

        case 'presskit':
            return presskitIcon;

        case 'facebook':
            return facebookIcon;

        case 'flickr':
            return flickrIcon;

        case 'instagram':
            return instagramIcon;

        case 'reddit':
            return redditIcon;

        case 'twitter':
            return twitterIcon;
    
        default:
            return defaultLinkIcon;
    }
}

function LinkIcon(props) {
    return (
        <a href={props.href} title={props.hoverText} target="_blank" rel="noopener noreferrer">
            <LinkImage src={getIcon(props.linkType)} />
        </a>
    );
}

export default LinkIcon;


