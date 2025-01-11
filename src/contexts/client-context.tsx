import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

type TClient = {
  status: string;
  _id: string;
  picture: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string;
  isEmailVerified: boolean;
};

type TClientContext = {
  client: TClient | null;
  setClient: (client: TClient | null) => void;
  refreshClient: () => void;
};

const ClientContext = createContext<TClientContext | null>(null);

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client, setClient] = useState<TClient | null>(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const getClient = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/client/profile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        const data: TClient = await response.json();
        setClient(data);
      } else {
        setClient(null);
      }
    } catch (error) {
      console.error("Failed to fetch client", error);
      setClient(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshClient = useCallback(() => {
    setLoading(true);
    setRefresh((prev) => !prev);
  }, []);

  useEffect(() => {
    getClient();
  }, [getClient, refresh]);

  return (
    <ClientContext.Provider value={{ client, setClient, refreshClient }}>
      {loading ? <div>Loading...</div> : children}
    </ClientContext.Provider>
  );
}

export function useClient() {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
