import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}`);
      if (!response.ok) {
        setMessage("Error fetching message");
        return;
      }
      const data = await response.json();
      setMessage(data.message);
    };
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>{message}</p>
    </div>
  );
}
