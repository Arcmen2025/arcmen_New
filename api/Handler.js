import Cookies from 'js-cookie';

const getJsonResponseSafe = async (response) => {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return await response.json();
    } else {
        // Return raw text if not JSON
        const text = await response.text();
        return { isError: true, error: text || 'Unexpected non-JSON response' };
    }
};

const fetchHandler = async ({ method, endpoint, data }) => {
    const API_BASE_URLS = process.env.NEXT_PUBLIC_API_BASE_URL + endpoint;
    const headers = {
        'Content-Type': 'application/json'
    };
    const accessToken = Cookies.get('token');
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }

    const options = {
        method,
        headers,
        cache: 'no-cache',
        credentials: 'same-origin'
    };

    if (method !== 'GET' && data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(API_BASE_URLS, options);

        if (response.ok) {
            return await getJsonResponseSafe(response);
        } else {
            const errorResult = await getJsonResponseSafe(response);
            return { isError: true, error: errorResult };
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return { isError: true, error: 'Network or server error. Please try again later.' };
    }
};

export default fetchHandler;

export const fetchHandler2 = async ({ method, endpoint, data }) => {
    const API_BASE_URLS = process.env.NEXT_PUBLIC_API_BASE_URL + endpoint;

    const headers = {
        'Content-Type': 'application/json'
    };
    const accessToken = Cookies.get('token');
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }

    const options = {
        method,
        headers,
        cache: 'no-cache',
        credentials: 'same-origin'
    };

    if (method !== 'GET' && data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(API_BASE_URLS, options);

        if (response.ok) {
            return await getJsonResponseSafe(response);
        } else {
            const errorResult = await getJsonResponseSafe(response);
            return { isError: true, error: errorResult };
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return { isError: true, error: 'Network or server error. Please try again later.' };
    }
};

export const fetchHandlerForm = async ({ method, endpoint, body }) => {
    const API_BASE_URLS = process.env.NEXT_PUBLIC_API_BASE_URL + endpoint;
    console.log('Base URLsssssssssss', process.env.NEXT_PUBLIC_API_BASE_URL);

    const headers = {};
    const accessToken = Cookies.get('token');
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }

    const options = {
        method,
        headers,
        cache: 'no-cache',
        credentials: 'same-origin'
    };

    // For FormData, do not set Content-Type, browser sets it automatically
    if (method !== 'GET' && body) {
        options.body = body; // body is FormData or similar
    }

    try {
        const response = await fetch(API_BASE_URLS, options);

        if (response.ok) {
            return await getJsonResponseSafe(response);
        } else {
            const errorResult = await getJsonResponseSafe(response);
            return { isError: true, error: errorResult };
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return { isError: true, error: 'Network or server error. Please try again later.' };
    }
};
