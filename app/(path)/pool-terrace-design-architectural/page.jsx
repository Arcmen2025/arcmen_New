'use client';
import React, { useEffect, useState } from 'react';
import ArchitecturalPage from './ArchitecturalPage';


const Page = () => {
    const architectural = 'row-house-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural}/>
        </div>
    );
};

export default Page;
