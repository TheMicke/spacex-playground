import React, { useState, useEffect } from 'react';
import CompanyInfo from './CompanyInfo';
import APIinfo from './APIinfo';

function Info() {
    
    return (
        <div className="page-content-container">
            <div className="data-block-container">
                <CompanyInfo />
                <APIinfo />
            </div>
        </div>
    );
}

export default Info;
