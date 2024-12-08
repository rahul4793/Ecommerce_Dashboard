import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; 

// Get combined data
export const getCombinedData = async (month) => {
  try {
    const response = await axios.get(`${API_URL}/combinedata`, {
      params: { month }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching combined data", error);
    return null;
  }
};

// Get transactions with query parameters
export const getTransactions = async (month, search, page, perPage) => {
  try {
    const response = await axios.get(`${API_URL}/products`, {
      params: { month, search, page, perPage }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions", error);
    return [];
  }
};
