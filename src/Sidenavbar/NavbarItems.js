import "./Sidenavbar.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faSearch } from '@fortawesome/free-solid-svg-icons'

const NavbarItems = props => {
  const {articleSources, selectedSource} = {...props};
  return (
    <div className="sidenavbar">
      <nav className="navbar navbar-custom">
        <div className="container-fluid">
          <a className="btn" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">
            <FontAwesomeIcon icon={faBars}  />
          </a>
          <div class="row justify-content-center">
             <h2 className="text-white">{selectedSource}</h2>
          </div>
            <a className="fluid" role="button" style={{color:"black"}} >
              <FontAwesomeIcon icon={faSearch}  />
          </a>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">Sources</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <section id="pmd-main">
          <aside id="basicSidebar" className="pmd-sidebar bg-light pmd-z-depth" role="navigation">
            <ul className="nav flex-column pmd-sidebar-nav">
                  {articleSources && articleSources.map(function (name, index) {
                    return <li className="nav-item"> <a key={index} onClick={() => props.onSelectedSource(name)} id={index} className="nav-link" ><span className="media-body"> {name} </span> </a></li>;
                  })}
            </ul>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default NavbarItems;

