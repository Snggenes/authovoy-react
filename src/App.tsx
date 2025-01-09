import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const serverUrl = import.meta.env.VITE_SERVER_URL;
      if (!serverUrl) {
        console.error("Server URL not found");
        return;
      }
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}`);
      const data = await response.json();
      setMessage(data.message);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>My Appp</h1>
      <p>{message}</p>
    </div>
  );
}
