import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchArticles(params = {}) {
  try {
    const defaultParams = {
      apiKey: API_KEY,
      language: 'en',
      sortBy: 'publishedAt',
      pageSize: 30
    };

    const mergedParams = { ...defaultParams, ...params };
    
    // Remove empty parameters
    Object.keys(mergedParams).forEach(key => {
      if (mergedParams[key] === '' || mergedParams[key] == null) {
        delete mergedParams[key];
      }
    });

    const endpoint = params.sources ? '/everything' : '/top-headlines';
    const response = await axios.get(`${BASE_URL}${endpoint}`, { params: mergedParams });
    
    if (response.data.articles.length === 0) {
      throw new Error('No articles found with these filters.');
    }
    
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error.message);
    throw error;
  }
}

export async function fetchSources() {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines/sources`, {
      params: { apiKey: API_KEY }
    });
    return response.data.sources;
  } catch (error) {
    console.error('Error fetching sources:', error);
    return [];
  }
}