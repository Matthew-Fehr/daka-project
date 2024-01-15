/* This file is used to configure the api host for the services. */

// this version uses the host the current page is served from
export const currentHost = `${window.location.protocol}//${window.location.host}/api`;
// this version is used for testing to force the usage of localhost:3000
export const localhost = "http://localhost:8000/api";
// export const mediahost = "http://localhost:8000";
export const mediahost = "http://inmobiliariadaka.com:3360";
//
export const devServer = "http://localhost:8000/api";

// export the host to use
export default currentHost;
