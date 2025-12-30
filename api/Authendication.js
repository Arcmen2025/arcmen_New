import fetchHandler from './Handler';
import Cookies from 'js-cookie';

export const AuthendicationAPI = {
    Login(data, showMessage) {
        return fetchHandler({ method: 'POST', endpoint: 'login/', data: data }).then((response) => {
            if (response.isError) {
                showMessage({ severity: 'error', title: 'ERROR', content: response.data });
                return null; // Return null if there's an error
            } else {
           
                Cookies.set('token', response.token, { expires: 10000 });
                // Cookies.set('userrole', response.role, { expires: 10000 });
                sessionStorage.setItem('username', response.adminname);
                sessionStorage.setItem('email', response.email);
                sessionStorage.setItem('admin_id', response.admin_id);

                // Start the token refresh interval
                this.startTokenRefreshInterval();

                return { email: response.adminname, password: response.token }; // Return name and role
            }
        });
    },
    Logout() {
        Cookies.remove('token');
        Cookies.remove('userrole');
        sessionStorage.clear();
        window.location.assign('/');

        // Clear the token refresh interval
        if (this.tokenRefreshInterval) {
            clearInterval(this.tokenRefreshInterval);
        }
    },
    refreshToken() {
        const refreshToken = Cookies.get('token');
        if (!refreshToken) {
            console.error('Refresh token not found');
            return;
        }

        return fetchHandler({
            method: 'POST',
            endpoint: '/refresh-token',
            data: { refreshToken }
        }).then((response) => {
            if (response.isError) {
                console.error('Error refreshing token:', response.data);
                return;
            }

            Cookies.set('token', response.access_token, { expires: 10000 });
            // console.log('Token refreshed successfully');
        }).catch((error) => {
            console.error('Error refreshing token:', error);
        });
    },
    startTokenRefreshInterval() {
        // Set the interval to 15 minutes (900000 milliseconds)
        // const interval = 900000;
        const interval = 9000;
        this.tokenRefreshInterval = setInterval(() => {
            this.refreshToken();
        }, interval);
    }
};
