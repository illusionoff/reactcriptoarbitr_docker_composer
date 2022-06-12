import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import M from 'materialize-css/dist/js/materialize.min.js';

export const Navbar = () => {

  useEffect(() => {
    // M.AutoInit();
    const elems = document.querySelectorAll(".sidenav");
    // eslint-disable-next-line no-unused-vars
    const instances = M.Sidenav.init(elems);
  }, []);

  return (
    <>
      <div className="navbar-fixed">
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <span className="brand-logo center" id="brand-logo">CriptoArbitr</span>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab"> <Link activeClass="active" to="TechnicalTask" spy={true} smooth={true} duration={500} offset={-60}><span className="navTab" id="task"></span></Link></li>
              <li className="tab"><Link activeClass="active" to="DevelopmentDescription" spy={true} smooth={true} duration={500} offset={-60}><span className="navTab" id="dev"></span></Link></li>
              <li className="tab"><Link activeClass="active" to="chart" spy={true} smooth={true} duration={500} offset={-60}><span className="navTab">Chart</span></Link></li>
              <li className="tab"><Link activeClass="active" to="Result" spy={true} smooth={true} duration={500} offset={-60}><span className="navTab">result</span></Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
