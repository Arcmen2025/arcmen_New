import React from 'react';
import DynamicBlog from './DynamicBlog';


export const metadata = {
    title: 'Customize Your Bot',
    description: 'Here you can get what the bots ready to deploys stages'
};

const Page = () => {
    return (
        <div>
            <DynamicBlog  />{' '}
        </div>
    );
};

export default Page;
