import React from 'react';
import styled from 'styled-components';

import defaultLinkIcon from '../../images/default_link_icon.svg';
import wikipediaIcon from '../../images/wikipedia_icon.svg';
import youtubeIcon from '../../images/youtube_icon.svg';
import articleIcon from '../../images/article_icon.svg';
import presskitIcon from '../../images/presskit_icon.svg';

const LinkImage = styled.img`
    width: 25px;
    height: 25px;
    margin: 5px;
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
    
        default:
            return defaultLinkIcon;
    }
}

function LinkIcon(props) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <LinkImage src={getIcon(props.linkType)} />
        </a>
    );
}

export default LinkIcon;


