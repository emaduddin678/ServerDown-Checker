import axios from "axios";
import React, { useEffect, useState } from "react";

const Test = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCehck = async () => {
      try {
        const response = await axios.get("https://topsim.co.uk/");
        setData(response.data); // Store the data if the request is successful
        setError(null); // Clear any previous errors
      } catch (err) {
        console.log(err)
        setError(err.response ? err.response.status : "Network Error");
      } finally {
        setLoading(false); // Stop loading once the request is complete
      }
    };
    getCehck();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Test</h1>
      {error ? (
        <div style={{ color: "red" }}>
          <strong>Error:</strong>{" "}
          {error === 500 ? "Internal Server Error" : error}
        </div>
      ) : (
        <div>
          <strong>Data Fetched Successfully:</strong>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
};

export default Test;
