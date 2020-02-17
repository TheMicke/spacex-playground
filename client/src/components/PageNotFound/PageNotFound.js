import React from 'react';
import styled from 'styled-components';
import notFoundImg from './page-not-found.png';

const PageNotFoundImage = styled.img`
    width: 75%;
    max-width: 500px;
    height: auto;
`;

function PageNotFound() {

    return(
        <>
            <PageNotFoundImage src={notFoundImg} />
            <h2>404 - Page not found!</h2>
        </>
    )
}

export default PageNotFound;