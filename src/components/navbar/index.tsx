import Container from "../container";
import Dropdown from "./dropdown";
import Logo from "./logo";
import AuthLinks from "./auth-links";
export default function Navbar() {
  return (
    <div className="fixed w-full bg-white">
      <Container className="h-16 flex flex-row items-center justify-between max-w-[1600px] bg-white shadow-md rounded-md">
        <Logo />
        <div className="flex flex-row items-center space-x-4">
          <AuthLinks />
          <Dropdown />
        </div>
      </Container>
    </div>
  );
}
