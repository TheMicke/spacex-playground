import React from 'react';
import styled from 'styled-components';
import LinkIcon from '../_common/LinkIcon';

const InfoText = styled.p`
    font-style: oblique;
`;

const InfoHeading = styled.span`
    font-weight: 700;
    font-style: normal;
`;

function InfoContent(props) {
    console.log(props.data);
    const info = props.data;
    
    return (
        <div>
            <h2>Info about {info.name}</h2>
    <InfoText>{info.summary}</InfoText>
    <InfoText><InfoHeading>Founder: </InfoHeading>{info.founder}</InfoText>
    <InfoText><InfoHeading>Founded: </InfoHeading>{info.founded}</InfoText>
    <InfoText><InfoHeading>Employees: </InfoHeading>{info.employees}</InfoText>
    <InfoText><InfoHeading>Launch sites: </InfoHeading>{info.launch_sites}</InfoText>
    <InfoText><InfoHeading>Test sites: </InfoHeading>{info.test_sites}</InfoText>
    <InfoText><InfoHeading>CEO: </InfoHeading>{info.ceo}</InfoText>
    <InfoText><InfoHeading>CTO: </InfoHeading>{info.cto}</InfoText>
    <InfoText><InfoHeading>COO: </InfoHeading>{info.coo}</InfoText>
    <InfoText><InfoHeading>CTO of Propulsion: </InfoHeading>{info.cto_propulsion}</InfoText>
    <InfoText><InfoHeading>Valuation: </InfoHeading>${info.valuation}</InfoText>
    <InfoText><InfoHeading>Headquarters: </InfoHeading>{info.headquarters?.city}, {info.headquarters?.state}</InfoText>
    <InfoText><InfoHeading>Links:</InfoHeading> <br />
        <LinkIcon linkType="website" href={info.links?.website} />
        <LinkIcon linkType="flickr" href={info.links?.flickr} />
        <LinkIcon linkType="twitter" href={info.links?.twitter} />
    </InfoText>




        </div>
    );
}

export default InfoContent;
