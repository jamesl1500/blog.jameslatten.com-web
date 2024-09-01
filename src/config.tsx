/**
 * Config file for the app
 */

// Load strapi url from .env
export const strapiUrl = process.env.REACT_APP_STRAPI_URL || 'http://127.0.0.1:1337';

// Load strapi url from .env
export const strapiApiUrl = process.env.REACT_APP_STRAPI_API_URL || 'http://127.0.0.1:1337/api';