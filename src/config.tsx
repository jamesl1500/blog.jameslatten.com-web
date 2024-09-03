/**
 * Config file for the app
 */

// Load strapi url from .env
export const strapiUrl = process.env.REACT_APP_STRAPI_URL || 'http://api.blog.jameslatten.com/';

// Load strapi url from .env
export const strapiApiUrl = process.env.REACT_APP_STRAPI_API_URL || 'http://api.blog.jameslatten.com/api';