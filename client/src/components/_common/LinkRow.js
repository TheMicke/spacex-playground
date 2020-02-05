import React from 'react';
import styled from 'styled-components';

const LinkRowContainer = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media screen and (min-width: 768px) {
        justify-content: flex-start;
    }
`;


function LinkRow(props) {
    return (
        <LinkRowContainer>
        {props.links}
        </LinkRowContainer>
    );
}

export default LinkRow;
