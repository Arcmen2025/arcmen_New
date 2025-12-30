'use Client';
import React from 'react';
import Architectinterior from './ArchitectInterior';

export const metadata = {
    alternates: {
      canonical: `architect-interior-in-chennai`,
    },
    title: 'Best Architects in Chennai | Interior Architects in Chennai   ',
    description: 'From first sketch to final brick, We Bring your vision to life. As a top architecture firm in chennai, we blend innovation with passion. Explore our portfolio.',
    keywords: ['Interior architects in chennai', 'Top Interior architects in Chennai', 'interior design architect', 'interior designer architect', 'interior architecture firms']
};

const page = () => {
    return (
        <div>
            <Architectinterior />
        </div>
    );
};

export default page;
