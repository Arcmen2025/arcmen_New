import fetchHandler, { fetchHandlerForm } from './Handler';

export const createBlog = async (body) => {
    console.log(body,"------------->")
    try {
        const response = await fetchHandlerForm({
            method: 'POST',
            endpoint: 'blog/',
            body
        });
        if (response?.data) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};

export const getAllBlogs = async () => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: 'blog/', // Replace with your actual API endpoint
        });
        return response;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw new Error('Could not fetch blogs. Please try again later.');
    }
};
export const getAllUserBlogs = async () => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: 'blog/users/getblogs', // Replace with your actual API endpoint
        });
        return response;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw new Error('Could not fetch blogs. Please try again later.');
    }
};





export const deleteBlog = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'DELETE',
            endpoint: `blog/${data}`
        });
        return response;
    } catch (error) {
        console.error('Error fetching chatbots:', error);
        throw new Error('Could not fetch chatbots. Please try again later.');
    }
};


// =======================================================
export const updateBlog = async (body, id) => {
    try {
        const response = await fetchHandlerForm({
            method: 'PUT',
            endpoint: `blog/${id}`,
            body
        });
        return response;
    } catch (error) {
        console.error('Error fetching chatbots:', error);
        throw new Error('Could not fetch chatbots. Please try again later.');
    }
};
export const updateBlogContent = async (body, id) => {
    try {
        const response = await fetchHandlerForm({
            method: 'PUT',
            endpoint: `blog/${id}/content-section`,
            body
        });
        return response;
    } catch (error) {
        console.error('Error fetching chatbots:', error);
        throw new Error('Could not fetch chatbots. Please try again later.');
    }
};

export const updateBlogStatus = async (data, id) => {
    try {
        const response = await fetchHandler({
            method: 'PUT',
            endpoint: `blog/${id}/status`,
            data: data
        });
        return response;
    } catch (error) {
        console.error('Error fetching chatbots:', error);
        throw new Error('Could not fetch chatbots. Please try again later.');
    }
};

export const getSingleBlog = async (blogUrl) => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: `blog/${blogUrl}`
        });
        return response;
    } catch (error) {
        console.error('Error fetching chatbots:', error);
        throw new Error('Could not fetch chatbots. Please try again later.');
    }
};




// =========================================================================================================================================================
// =========================================================================================================================================================
// =========================================================================================================================================================
// =========================================================================================================================================================


export const deleteBlogContentSection = async (data,id) => {
    try {
        const response = await fetchHandler({
            method: 'DELETE',
            endpoint: `blog/delete-content/${data}/${id}`
        });
        return response;
    } catch (error) {
        console.error('Error fetching chatbots:', error);
        throw new Error('Could not fetch chatbots. Please try again later.');
    }
};