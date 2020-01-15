import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderContainer = styled.div`
    margin: 50px auto;
`;

function LoaderSpinner() {
    return (
        <LoaderContainer>
            <Loader type="Oval" color="#00BFFF" height={50} width={50} />
        </LoaderContainer>
    );
}

export default LoaderSpinner;
