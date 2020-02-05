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
    margin: 5px 20px -5px 0px;
`;

const getIcon = type => {
    switch (type) {
        case 'wikipedia':
            return [wikipediaIcon, 'Wikipedia'];

        case 'youtube':
            return [youtubeIcon, 'YouTube'];

        case 'article':
            return [articleIcon, 'Article'];

        case 'presskit':
            return [presskitIcon, 'Press Kit'];

        case 'facebook':
            return [facebookIcon, 'Facebook'];

        case 'flickr':
            return [flickrIcon, 'Flickr'];

        case 'instagram':
            return [instagramIcon, 'Instagram'];

        case 'reddit':
            return [redditIcon, 'Reddit'];

        case 'twitter':
            return [twitterIcon, 'Twitter'];
    
        default:
            return [defaultLinkIcon, ''];
    }
}

function LinkIcon(props) {
    const linkData= getIcon(props.linkType)
    return (
        <a href={props.href} title={props.title ? props.title : linkData[1]} target="_blank" rel="noopener noreferrer">
            <LinkImage src={linkData[0]} />
        </a>
    );
}

export default LinkIcon;


