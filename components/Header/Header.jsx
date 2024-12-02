import React from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './Header.css'

const Header = () => {

  const nav_links = [
    {
      path: '/home',
      display: 'Home'
    },
    {
      path: '#',
      display: 'About'
    },
    {
      path: '/tours',
      display: 'Tours'
    }
  ]

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">

            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-4">
                {nav_links.map((item, index) => (
                  <li key={index} className="nav_item">
                    <NavLink to={item.path} activeClassName="active_link">
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_right d-flex align-items-center gap-3">
              <div className="nav_btns d-flex align-items-center gap-3">
                <Button className="btn secondary_btn">
                  <Link to="/login" className="btn_link">Login</Link>
                </Button>
                <Button className="btn primary_btn">
                  <Link to="/register" className="btn_link">Register</Link>
                </Button>
              </div>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
