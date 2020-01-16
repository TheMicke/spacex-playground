import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background: rgb(0, 82, 135);
    background: linear-gradient(45deg, rgba(0, 82, 135, 1) 0%, rgba(0, 117, 193, 1) 100%);
    display: inline-block;
    border-radius: 15px;
    padding: 15px 5px;
    margin: 10px;
    width: 40%;
    color: #fff;
    transition: background 0.2s ease-in, color 0.2s ease-in;

    &:hover {
        background: rgb(136, 168, 197);
        background: linear-gradient(335deg, rgba(136, 168, 197, 1) 0%, rgba(174, 214, 251, 1) 100%);
        color: #333;
        transition: background 0.2s ease-in, color 0.2s ease-in;
    }
`;

const CardHeader = styled.h3`
    font-weight: 700;
`;

const CardDataHeading = styled.span`
    font-weight: 700;
`;


function DragonsListCard(props) {
    return (
        <a href={'/dragons/' + props.data.id} >
            <CardContainer>
                <CardHeader>{props.data.name}</CardHeader>
    <p><CardDataHeading>First flight: </CardDataHeading>{props.data.first_flight}</p>
            </CardContainer>
        </a>
    );
}

export default DragonsListCard;
