import React, { useState, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../../resources/img/logo.png';
import './header.scss';

function Header() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);

  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const dropdownRef4 = useRef(null);

  const handleMouseEnter = (showDropdown, setShowDropdown, dropdownRef) => {
    setShowDropdown(true);
    clearTimeout(dropdownRef.current);
  };

  const handleMouseLeave = (showDropdown, setShowDropdown, dropdownRef) => {
    dropdownRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 25); 
  };


  return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p className="brand-text">Əməyin mühafizəsinin idarəetməsində tərəfdaşınız</p>
         </Navbar.Brand>
       
        <Navbar.Collapse id="basic-navbar-nav">


          <Nav className="me-auto">
            <Nav.Link href="/" >Əsas səhifə</Nav.Link>
            <NavDropdown
             title="Haqqımızda" 
             id="basic-nav-dropdown"
             show={showDropdown1}
             onMouseEnter={() => handleMouseEnter(showDropdown1, setShowDropdown1, dropdownRef1)}
             onMouseLeave={() => handleMouseLeave(showDropdown1, setShowDropdown1, dropdownRef1)}
           >
              <NavDropdown.Item href="/about">Haqqımızda məlumat</NavDropdown.Item>
              <NavDropdown.Item href="/contacts">
                Bizimlə əlaqə
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="Xidmətlərimiz" id="basic-nav-dropdown"
            show={showDropdown2}
            onMouseEnter={() => handleMouseEnter(showDropdown2, setShowDropdown2, dropdownRef2)}
            onMouseLeave={() => handleMouseLeave(showDropdown2, setShowDropdown2, dropdownRef2)}
          >
              <NavDropdown.Item href="/beginner">
                Əməyin mühafizəsi üzrə yeni başlayan işçilərə konsultasiya 
              </NavDropdown.Item>
              <NavDropdown.Item href="/documents">
                Sənədlərin hazırlanması
              </NavDropdown.Item>
              <NavDropdown.Item href="/system">
                SƏTƏMM İdarəetmə Sisteminin qurulması
              </NavDropdown.Item>
              <NavDropdown.Item href="/others">
                 Digər xidmətlər
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="Materiallar" id="basic-nav-dropdown"
            show={showDropdown3}
            onMouseEnter={() => handleMouseEnter(showDropdown3, setShowDropdown3, dropdownRef3)}
            onMouseLeave={() => handleMouseLeave(showDropdown3, setShowDropdown3, dropdownRef3)}
          >
                <NavDropdown.Item href="/safety">
                   Əməyin mühafizəsi
                </NavDropdown.Item>
                <NavDropdown.Item href="/fire">
                  Yanğın təhlükəsizliyi
                </NavDropdown.Item>
                <NavDropdown.Item href="/firstaid">
                  İlk tibbi yardım
                </NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="Testlər" id="basic-nav-dropdown"
            
            show={showDropdown4}
            onMouseEnter={() => handleMouseEnter(showDropdown4, setShowDropdown4, dropdownRef4)}
            onMouseLeave={() => handleMouseLeave(showDropdown4, setShowDropdown4, dropdownRef4)}
          >
                <NavDropdown.Item href="/safety">Əməyin mühafizəsi üzrə testlər
                </NavDropdown.Item>
                <NavDropdown.Item href="/fire">
                  Yanğın təhlükəsizliyi üzrə testlər
                </NavDropdown.Item>
                <NavDropdown.Item href="/firstaid">
                  İlk tibbi yardım üzrə testlər
                </NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;
