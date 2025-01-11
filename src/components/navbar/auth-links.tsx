import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function AuthLinks() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        className="hidden lg:block"
        variant={"ghost"}
        onClick={() => navigate("/login")}
      >
        Sign in
      </Button>
      <Button className="hidden lg:block" onClick={() => navigate("/register")}>
        Get started for free
      </Button>
    </>
  );
}
