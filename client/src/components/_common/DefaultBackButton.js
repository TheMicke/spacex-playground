import React from 'react';
import styled from 'styled-components';

const DefaultBackButtonContainer = styled.div`
    cursor: pointer;
    height: 45px;
    display: inline-block;
    background-color: #005287;
    color: #fff;
    margin: 0 2px;
    padding: 0 10px;
    border-radius: 5px;
    border: 0;
    font-size: 1em;
    transition: background-color 0.2s ease-in, color 0.2s ease-in;
    
    &:hover {
        background-color: #88a8c5;
        color: #333;
        transition: background-color 0.2s ease-in, color 0.2s ease-in;
    }
`;

const ButtonText = styled.p`
    line-height: 0.75;
    text-align: center;
`;


function DefaultButton(props) {
    const goBack = () => {
        window.history.back();
    };

    const doNothing = () => {
        return;
    };

    return (
        <a href={props.url ? props.url : '#goBack'} onClick={!props.url ? goBack : doNothing }>
            <DefaultBackButtonContainer>
                <ButtonText>Go back</ButtonText>
            </DefaultBackButtonContainer>
        </a>
    );
}

export default DefaultButton;
