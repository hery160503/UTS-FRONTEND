export function Navbar() {
    return(
        <body>
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="bx bx-menu"></i>
          </label>
          <label className="logo">MANCHESTER UNITED.</label>
          <ul>
            <li>
              <a href="#" className="active">
                HOME
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <section></section>
      </body>
    );
}