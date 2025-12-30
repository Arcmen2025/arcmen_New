import React from 'react';
import FAQ from './FAQ';

export const metadata = {
      alternates: {
      canonical: `/faqs`,
    },
    title: "Interior design frequently asked questions",
    description: 'Find answers to common interior design questions! Explore tips, costs, timelines, styles, and expert advice to create your dream space with confidence.',
    keywords:['Interior design frequently asked questions','faq','Interior design faq','Questions on Interior Design'],
};

const page = () => {
    return (
        <div>
            <FAQ />
        </div>
    );
};

export default page;
