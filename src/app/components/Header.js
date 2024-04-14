import Link from "next/link";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src="images/LOGO.svg" alt="Ecell Logo" />
        {/* <a href="" className="logo">Your Logo</a> */}
        <div className="nav-center">
          <Link href="#">Home</Link>
          <Link href="#">Speakers</Link>
          <Link href="#">Partners</Link>
          <Link href="#">Events</Link>
          <Link href="#">Tickets</Link>
          <Link href="#">HiRes</Link>
          <Link href="#">Agenda</Link>
        </div>
        <div className="auth-links">
          <Link href="#" className="login">Login</Link>
          <Link href="#" className="register">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
