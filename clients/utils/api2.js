// utils/api.js
export const apiBaseUrl = "http://localhost:8000/api";

export const fetchApi = async (endpoint, options = {}) => {
  const url = `${apiBaseUrl}${endpoint}`;

  // Récupérer le token d'authentification depuis le local storage ou autre méthode de stockage
  const token = localStorage.getItem("authToken");

  // Ajouter l'en-tête d'autorisation
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
