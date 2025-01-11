import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailVerificationNumber, setEmailVerificationNumber] = useState<string>("");

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

  // Handle form submission register
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/client/register`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    if (!response.ok) {
     console.log(response);
      return;
    }
    const data = await response.json();
   console.log(data);
  };

  // another form for sending verification code with email

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/client/verify-email`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, emailVerificationNumber }),
      }
    );
    if (!response.ok) {
     console.log(response);
      return;
    }
    const data = await response.json();
   console.log(data);
  }

  return (
    <div>
      <h1>Home</h1>
      <p>{message}</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>

      <form onSubmit={handleVerification}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Verification Number"
          value={emailVerificationNumber}
          onChange={(e) => setEmailVerificationNumber(e.target.value)}
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}
