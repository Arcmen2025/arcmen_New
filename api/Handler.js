// import Cookies from 'js-cookie';

// const fetchHandler = async ({ method, endpoint, data }) => {
//   const API_BASE_URLS = process.env.NEXT_PUBLIC_API_BASE_URL+endpoint;
//   // const API_BASE_URLS = process.env.API_BASE_URL+endpoint;

//   const headers = {
//     'Content-Type': 'application/json',
//   };
//   const accessToken = Cookies.get('token');
//   if (accessToken) {
//     headers['Authorization'] = `Bearer ${accessToken}`;
//   }
//   const options = {
//     method,
//     headers,
//     cache: 'no-cache',
//     credentials: 'same-origin',
//   };

//   if (method !== 'GET' && data) {
//     options.body = JSON.stringify(data);
//   }

//   try {
//     const response = await fetch(API_BASE_URLS, options);

//     // Log the response status and text for debugging
//     // console.log('Response Status:', response.status);
//     const responseText = await response.text();
//     // console.log('Response Text:', responseText);

//     if (response.ok) {
//       const result = JSON.parse(responseText);
//       return result;
//     } else {
//       // Other errors
//       let result;
//       try {
//         result = JSON.parse(responseText);
//       } catch (e) {
//         result = responseText;
//       }
//       return { isError: true, error: result };
//     }
//   } catch (error) {
//     // Handle network errors
//     console.error('Fetch error:', error);
//     return { isError: true, error: "We can't process your request at this time. Please try later." };
//   }
// };

// export default fetchHandler;

// export const fetchHandler2 = async ({ method, endpoint, data }) => {
//   // const API_BASE_URLS = `${process.env.NEXT_PUBLIC_API_BASE_URL}` + endpoint;
//   const API_BASE_URLS = API_BASE_URL + endpoint;
//   const headers = {
//     'Content-Type': 'application/json',
//   };
//   const accessToken = Cookies.get('token');
//   if (accessToken) {
//     headers['Authorization'] = `Bearer ${accessToken}`;
//   }

//   console.log()
//   const options = {
//     method,
//     headers,
//     cache: 'no-cache',
//     credentials: 'same-origin',
//   };

//   if (method !== 'GET' && data) {
//     options.body = JSON.stringify(data);
//   }

//   try {
//     const response = await fetch(API_BASE_URLS, options);

//     if (response.ok) {
//       const result = await response.json();
//       return result;
//     }
//     else {
//       // Other errors
//       const result = await response.json();
//       return { isError: true,  error: result };
//     }
//   } catch (error) {
//     // Handle network errors
//     console.error('Fetch error:', error);
//     return { isError: true, error: "We can't process your request at this time. Please try later." };
//   }
// };

// export const fetchHandlerForm = async ({ method, endpoint, body }) => {
//   const API_BASE_URLS = `${process.env.NEXT_PUBLIC_API_BASE_URL}` + endpoint;
//   // const API_BASE_URLS = API_BASE_URL + endpoint;
//   const headers= {};

//   const accessToken = Cookies.get('token');
//   if (accessToken) {
//     headers['Authorization'] = `Bearer ${accessToken}`;
//   }

//   const options = {
//     method,
//     headers,
//     cache: 'no-cache',
//     credentials: 'same-origin',
//   };

//   // Only set the body if it is not a GET request
//   if (method !== 'GET' && body) {
//     options.body = body; // Pass FormData directly without stringifying
//   }

//   try {
//     const response = await fetch(API_BASE_URLS, options);

//     if (response.ok) {
//       const result = await response.json();
//       // const result = await response;
//       return result;
//     } else {
//       // Other errors
//       const result = await response.json();
//       return { isError: true, error: result };
//     }
//   } catch (error) {
//     // Handle network errors
//     console.error('Fetch error:', error);
//     return { isError: true, error: "We can't process your request at this time. Please try later." };
//   }
// };
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
    'Content-Type': 'application/json',
  };
  const accessToken = Cookies.get('token');
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const options = {
    method,
    headers,
    cache: 'no-cache',
    credentials: 'same-origin',
  };

  if (method !== 'GET' && data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(API_BASE_URLS, options);

    if (response.ok) {
      return await getJsonResponseSafe(response);
    } else {
      // Try to parse error response
      const errorResult = await getJsonResponseSafe(response);
      return { isError: true, error: errorResult };
    }
  } catch (error) {
    console.error('Fetch error:', error);
    return { isError: true, error: "Network or server error. Please try again later." };
  }
};

export default fetchHandler;

export const fetchHandler2 = async ({ method, endpoint, data }) => {
  const API_BASE_URLS = process.env.NEXT_PUBLIC_API_BASE_URL + endpoint;

  const headers = {
    'Content-Type': 'application/json',
  };
  const accessToken = Cookies.get('token');
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const options = {
    method,
    headers,
    cache: 'no-cache',
    credentials: 'same-origin',
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
    return { isError: true, error: "Network or server error. Please try again later." };
  }
};

export const fetchHandlerForm = async ({ method, endpoint, body }) => {
  const API_BASE_URLS = process.env.NEXT_PUBLIC_API_BASE_URL + endpoint;

  const headers = {};
  const accessToken = Cookies.get('token');
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const options = {
    method,
    headers,
    cache: 'no-cache',
    credentials: 'same-origin',
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
    return { isError: true, error: "Network or server error. Please try again later." };
  }
};

