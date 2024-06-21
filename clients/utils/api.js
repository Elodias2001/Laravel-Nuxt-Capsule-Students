// utils/api.js
export const apiBaseUrl = "http://localhost:8000/api";

export const fetchApi = async (endpoint, options = {}) => {
  const url = `${apiBaseUrl}${endpoint}`;

  const { data, error } = await useFetch(url, {
    ...options,
    baseURL: apiBaseUrl,
  });

  if (error.value) {
    throw new Error(`API fetch error: ${error.value.message}`);
  }

  return data.value;
};
