import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="hogwarts-header">
      <div className="logo-container">
        <img
          src="/src/app-assets/svg/logo.svg"
          alt="Hogwarts logo"
          className="hogwarts-logo"
        />
        <span className="hogwarts-label">Hogwarts Houses</span>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};
