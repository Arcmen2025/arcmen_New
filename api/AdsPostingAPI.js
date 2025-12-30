import fetchHandler, { fetchHandlerForm } from './Handler';

export const createAds = async (body) => {
    console.log(body,"------------->")
    try {
        const response = await fetchHandlerForm({
            method: 'POST',
            endpoint: 'poster',
            body
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};

export const getAllAds = async () => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: 'poster', // Replace with your actual API endpoint
        });
        return response;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw new Error('Could not fetch blogs. Please try again later.');
    }
};
export const getAllAdsByStatus = async () => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: 'user/poster', // Replace with your actual API endpoint
        });
        return response;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw new Error('Could not fetch blogs. Please try again later.');
    }
};





export const deleteAds = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'DELETE',
            endpoint: `poster/${data._id}`
        });
        return response;
    } catch (error) {
        console.error('Error fetching chatbots:', error);
        throw new Error('Could not fetch chatbots. Please try again later.');
    }
};


// =======================================================
export const updateAds = async (body, id) => {
    try {
        const response = await fetchHandlerForm({
            method: 'PATCH',
            endpoint: `poster/${id}`,
            body
        });
        return response;
    } catch (error) {
        console.error('Error fetching chatbots:', error);
        throw new Error('Could not fetch chatbots. Please try again later.');
    }
};
export const updateAdsStatus = async (data, id) => {
    try {
        const response = await fetchHandlerForm({
            method: 'PATCH',
            endpoint: `poster/${id}`,
            body: data
        });
        return response;
    } catch (error) {
        console.error('Error fetching chatbots:', error);
        throw new Error('Could not fetch chatbots. Please try again later.');
    }
};

export const getSingleAds = async (id) => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: `poster/${id}`
        });
        return response;
    } catch (error) {
        console.error('Error fetching chatbots:', error);
        throw new Error('Could not fetch chatbots. Please try again later.');
    }
};
