// utils/api.js
export const apiBaseUrl = "http://localhost:8000/api";

const fetchApi = async (endpoint, options = {}) => {
  const url = `${apiBaseUrl}${endpoint}`;

  const token = localStorage.getItem("authToken");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  const { data, error } = await useFetch(url, {
    ...options,
    headers,
    baseURL: apiBaseUrl,
  });

  if (error.value) {
    throw new Error(`API fetch error: ${error.value.message}`);
  }

  return data.value;
};

fetchApi.get = (endpoint, options = {}) => {
  return fetchApi(endpoint, { ...options, method: "GET" });
};

fetchApi.post = (endpoint, body, options = {}) => {
  return fetchApi(endpoint, {
    ...options,
    method: "POST",
    body: JSON.stringify(body),
  });
};

fetchApi.put = (endpoint, body, options = {}) => {
  return fetchApi(endpoint, {
    ...options,
    method: "PUT",
    body: JSON.stringify(body),
  });
};

fetchApi.delete = (endpoint, options = {}) => {
  return fetchApi(endpoint, { ...options, method: "DELETE" });
};

export default fetchApi;
