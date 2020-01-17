import React from 'react';
import styled from 'styled-components';

const LinkRowContainer = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;


function LinkRow(props) {
    return (
        <LinkRowContainer>
        {props.links}
        </LinkRowContainer>
    );
}

export default LinkRow;
