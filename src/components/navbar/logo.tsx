import { Link, useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div className="text-2xl font-semibold tracking-tight flex flex-row items-center gap-14 xl:gap-20">
      <p
      className="cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        AUTHOVOY
      </p>
      <div className="hidden lg:flex flex-row items-center space-x-6 text-sm font-semibold">
        <Link to="about">About</Link>
        <Link to="docs">Docs</Link>
        <Link to="pricing">Pricing</Link>
      </div>
    </div>
  );
}
