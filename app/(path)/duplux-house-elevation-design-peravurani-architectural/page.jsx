'use client';
import React, { useEffect, useState } from 'react';
import ArchitecturalPage from './ArchitecturalPage';


const Page = () => {
    const architectural = 'duplux-house-elevation-design-peravurani-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural}/>
        </div>
    );
};

export default Page;
