import 'vite/client'

const config = {
  apiKey: import.meta.env.REACT_APP_API_KEY,
  apiCdnUrl: `https://spoonacular.com/cdn/`,
  apiUrl: `https://api.spoonacular.com/`,
};

export default config;
