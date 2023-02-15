function NavBar() {
  return (
    <div className="row m-0 justify-content-center">
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "#000F45" }}
      >
        <div className="container-fluid">
          <div className="col-md-1"></div>
          <div className="col-md-1">
            <a className="navbar-brand text-white" href="#">
              IMS
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
            <div className="col-md-1"></div>
            <div className="col-md-3">
              {/* <li className="nav-item"> */}
              <a className="nav-link text-white " aria-current="page" href="#">
                <i class="bi bi-house " style={{ color: "white" }}></i>
                {"  "}
                Home
              </a>
              {/* </li> */}
            </div>
            <div className="col-md-3">
              {/* <li className="nav-item"> */}
              <a className="nav-link disabled text-white ">
                <i class="bi bi-bell " style={{ color: "white" }}></i>
                {"  "}
                Notification
              </a>
              {/* </li> */}
            </div>
            {/* </ul> */}
          </div>
          <div className="col-md-3">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
