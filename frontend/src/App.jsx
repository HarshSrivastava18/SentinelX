import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        console.log("Fetching...");

        const response = await fetch("http://127.0.0.1:5000/health");

        console.log("Response:", response);

        const json = await response.json();

        console.log("JSON:", json);

        setData(json);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    }

    loadData();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>SentinelX</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      {!data && <h2>Loading...</h2>}
    </div>
  );
}

export default App;