import fetchHandler, { fetchHandlerForm } from './Handler';

export const quickServiceRequestFormAPI = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'POST',
            endpoint: 'forms/quick-service-request',
            data
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};


export const quickServiceRequestGetAllAPI = async () => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: 'forms/quick-service-request',
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};
export const quickServiceRequestDeleteAPI = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'DELETE',
            endpoint: `forms/quick-service-request/${data.id}`,
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};


// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================

export const contactUsFormAPI = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'POST',
            endpoint: 'forms/contact-us',
            data
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};
export const contactUsGetAllAPI = async () => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: 'forms/contact-us',
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};
export const contactUsDeleteAPI = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'DELETE',
            endpoint: `forms/contact-us/${data.id}`,
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};
// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================

export const modularKitchenEnquiryFormsAPI = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'POST',
            endpoint: 'forms/modular-kitchen-enquiry',
            data
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};
export const modularKitchenEnquiryGetAllAPI = async () => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: 'forms/modular-kitchen-enquiry',
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};
export const modularKitchenEnquiryDeleteAPI = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'DELETE',
            endpoint:`forms/modular-kitchen-enquiry/${data.id}`
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};
// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================

export const interiorDesignEnquiryFormAPI = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'POST',
            endpoint: 'forms/interior-design-enquiry',
            data
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};
export const interiorDesignEnquiryGetAllAPI = async () => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: 'forms/interior-design-enquiry',
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};
export const interiorDesignEnquiryDeleteAPI = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'DELETE',
            endpoint: `forms/interior-design-enquiry/${data.id}`,
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};
// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================
// ======================================================================================================================================
export const careerFormAPI = async (body) => {
    
    try {
        const response = await fetchHandlerForm({
            method: 'POST',
            endpoint: 'forms/career',
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
export const careerGetAllAPI = async () => {
    try {
        const response = await fetchHandler({
            method: 'GET',
            endpoint: 'forms/career',
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};
export const careerDeleteAPI = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'DELETE',
            endpoint: `forms/career/${data.id}`,
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('errror showing', error);
        throw error;
    }
};

