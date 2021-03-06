/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import './Navbar.css';

const textDecoration = {
  textDecoration: 'none',
};
const logo = {
  textDecoration: 'none',
  fontFamily: 'Righteous, cursive',
  fontSize: '35px',
};

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="header">
      <IconContext.Provider value={{ color: '#15cdfc' }}>
        <Nav>
          <NavLink style={logo} to="/home">
            <h1 id="h1">Space Man</h1>
          </NavLink>
          <div className="navbar">
            <NavLink to="#" className="menu-bars">
              <Bars onClick={showSidebar} />
            </NavLink>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <NavLink to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </NavLink>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index} className={item.cName}>
                    <NavLink to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <NavMenu>
            <NavLink style={textDecoration} to="/home">
              Home
            </NavLink>
            <NavLink style={textDecoration} to="/contact">
              Contact us
            </NavLink>
          </NavMenu>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
