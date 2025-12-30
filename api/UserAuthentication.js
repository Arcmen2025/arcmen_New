import fetchHandler from './Handler';

export const login = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'POST',
            endpoint: 'admin/login',
            data
        });
        if (response.isError) {
            console.error(response);
            throw new Error(response.error.errors || 'Login failed');
        }
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const registerUser = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'POST',
            endpoint: 'register/',
            data
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error("error showing", error);
        throw error;
    }
};

export const forgotPassword = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'POST',
            endpoint: 'admin/forgot-password',
            data
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error("error showing", error);
        throw error;
    }
};

// export const otpVerification = async (data) => {
//     try {
//         const response = await fetchHandler({
//             method: 'POST',
//             endpoint: 'verify-otp/',
//             data
//         });
//         if (response) {
//             return response;
//         }
//     } catch (error) {
//         console.error("error showing", error);
//         throw error;
//     }
// };

// export const resentOtp = async (data) => {
//     try {
//         const response = await fetchHandler({
//             method: 'POST',
//             endpoint: 'resend-otp/',
//             data
//         });
//         if (response) {
//             return response;
//         }
//     } catch (error) {
//         console.error("error showing", error);
//         throw error;
//     }
// };

export const resetPassword = async (data, accesskey) => {
    try {
        if (!accesskey) {
            throw new Error("Access key is required");
        }

        const response = await fetchHandler({
            method: 'POST',
            endpoint: `admin/reset-password/${accesskey}`,
            data,
        });

        if (response.data) {
            return response;
        } else {
          
            throw new Error(response.error.errors || "Unexpected response from server");
        }
    } catch (error) {
        console.error("Error in resetPassword:", error);
        throw error;
    }
};

export const getProfile = async () => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: 'admin/me',
        });
        if (response.isError) {
            console.error(response.data);
            throw new Error(response.data.message || 'Login failed');
        }
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateProfile = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'PATCH',
            endpoint: 'admin/me',
            data
        });
        if (response.isError) {
            console.error(response.data);
            throw new Error(response.data.message || 'Login failed');
        }
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const ChangePassword = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'PATCH',
            endpoint: 'admin/change-password/',
            data
        });
        if (response.isError) {
            console.error(response.data);
            throw new Error(response.data.message || 'Login failed');
        }
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
