import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Tradeporeon
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/Inventory">
                  My Pokemon
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Pokedex
                </Link>
              </li>
              <li className="ProfileButon nav-item">
                <a className="nav-link " aria-disabled="true">
                  PlaceholderTrainerName
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
