import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("userToken"); // Get token if needed
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await axios.get(endpoint, {
          headers,
          ...options, // Allow additional fetch options
        });

        setData(response.data);
      } catch (err) {
        setError(err.response?.data || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]); // Runs when `endpoint` changes

  return { data, loading, error };
};

export default useFetch;
