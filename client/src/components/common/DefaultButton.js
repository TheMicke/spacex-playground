import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    height: 45px;
    display: inline-block;
    background-color: #005287;
    color: #fff;
    margin: 0 2px;
    padding: 0 10px;
    border-radius: 5px;
    transition: background-color 0.2s ease-in, color 0.2s ease-in;

    &:hover {
        background-color: #88a8c5;
        color: #333;
        transition: background-color 0.2s ease-in, color 0.2s ease-in;
    }
`;

const ButtonText = styled.p`
    line-height: 0.75;
`;

function DefaultButton(props) {
    return (
        <a href={props.href}>
            <ButtonContainer>
                <ButtonText>{props.text}</ButtonText>
            </ButtonContainer>
        </a>
    );
}

export default DefaultButton;
