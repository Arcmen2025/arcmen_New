import React from 'react';
import Architechhero from './Architechhero';
import './architechstyle.scss';

export const metadata = {
    alternates: {
      canonical: `architectural-projects`,
    },
    title: 'Architect Design Projects | Arcmen Interiors Chennai        ',
    description: 'Experiencr Architect Design Projects by Arcmen Interiors Chennai, Where Design Excellence and Attention to Detail Create  Inspiring, timeless spaces.',
    keywords: ['Architects and Interior designers in Chennai', 'Interior architects in chennai', 'Top Interior architects in Chennai', 'interior design architect', 'interior designer architect', 'interior architecture firms']
};

const page = () => {
    return (
        <div>
            <Architechhero />
        </div>
    );
};

export default page;
