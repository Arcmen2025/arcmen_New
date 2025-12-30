import React from 'react';
import Interiorhero from './Interiorhero';
import './interiorstyle.scss';

export const metadata = {
    alternates: {
      canonical: `/interior-design-projects`,
    },
    title: 'Interior Design Projects | Arcmen Interiors Chennai        ',
    description: 'Discover Arcmen Interiors Portfolio of thoughtfully designed spaces. From cozy homes to stylish kitchen. We craft interiors that blend functionality with elegance.',
    keywords: ['Luxury interior designer in chennai', 'Luxury Interior Designer', 'luxury interior designers', 'high end interior designers', 'top luxury interior designers']
};

const page = () => {
    return (
            <Interiorhero />
    );
};

export default page;
