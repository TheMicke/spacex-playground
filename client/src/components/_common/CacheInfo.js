import React, { useState } from 'react';
import styled from 'styled-components';
import lsh from '../../modules/localStorageHandler';
import DefaultButtonOnClick from './DefaultButtonOnClick';

const CacheInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    width: 100%;
    text-align: left;
    padding: 0 15px;
    
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 50px;
    }
`;

function CacheInfo(props) {
    const [expireDate, setExpireDate] = useState(lsh.getExpireDate(props.dataKey) ? new Date(lsh.getExpireDate(props.dataKey)) : null);

    const deleteLocalStorageItem = () => {
        localStorage.removeItem(props.dataKey);
        setExpireDate(null);
        return true;
    }

    return (
        expireDate ?
        <CacheInfoContainer>
            <p id='cache-info-text'>Cached {props.dataKey} expire at {expireDate.toLocaleString('sv-SE')}.</p>
            <DefaultButtonOnClick text={`Flush ${props.dataKey} cache`} onClick={deleteLocalStorageItem}/>
        </CacheInfoContainer>
        :
        ''
    )
}

export default CacheInfo;