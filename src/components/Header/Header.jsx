import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import Firebase auth methods
import { auth } from "../../constants/firebase"; // Your Firebase config
import logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Firebase Authentication: Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the logged-in user
      } else {
        setUser(null); // No user is logged in
      }
    });
    return () => unsubscribe();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear the user state
      navigate("/home"); // Redirect to home page after logout
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  const nav_links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];

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
              {user ? (
                // If user is logged in, show user name and logout button
                <div className="nav_user_info d-flex align-items-center gap-3">
                  <span className="user_name">Hello, {user.name || user.email}</span>
                  <Button className="btn logout_btn" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                // If not logged in, show login/register buttons
                <div className="nav_btns d-flex align-items-center gap-3">
                  <Link to="/login" className="btn_link">
                    <Button className="btn secondary_btn">Login</Button>
                  </Link>
                  <Link to="/register" className="btn_link">
                    <Button className="btn primary_btn">Register</Button>
                  </Link>
                </div>
              )}
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
