import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    cursor: pointer;
    height: 30px;
    display: inline-block;
    background-color: #005287;
    color: #fff;
    margin: auto 2px;
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
    margin-top: 8px;
`;

function DefaultButtonOnClickSmall(props) {
    return (
            <ButtonContainer onClick={props.onClick}>
                <ButtonText>{props.text}</ButtonText>
            </ButtonContainer>
    );
}

export default DefaultButtonOnClickSmall;
