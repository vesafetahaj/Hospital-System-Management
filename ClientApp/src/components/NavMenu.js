    import React, { Component } from 'react';
    import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
    import { Link } from 'react-router-dom';
    import './NavMenu.css';
    

    export class NavMenu extends Component {
      static displayName = NavMenu.name;

      constructor (props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
          };
          this.state = {
              activeLink: ""
          };
      }
        
       

      toggleNavbar () {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }

        render() {
           
          return (
              
          <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                    <NavbarBrand tag={Link} to="/">
                        <div style={{ maxWidth: "350px" }}>
                        <img src="logo-no-background.png" alt='Logo' id="logoSpitalit"/>
                    </div></NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                <ul className="navbar-nav flex-grow">
                  <NavItem>
                                <NavLink tag={Link} className={this.state.activeLink === "/" ? "text-dark active" : "text-dark"}
                                    to="/"
                                    onClick={() => this.setState({ activeLink: "/" })}>Home</NavLink>
                  </NavItem>
                  <NavItem>
                                <NavLink tag={Link} className={this.state.activeLink === "/sherbimet" ? "text-dark active" : "text-dark"}
                                    to="/sherbimet"
                                    onClick={() => this.setState({ activeLink: "/sherbimet" })}>Services</NavLink>
                  </NavItem>
                  <NavItem>
                                <NavLink tag={Link} className={this.state.activeLink === "/aboutus" ? "text-dark active" : "text-dark"}
                                    to="/aboutus"
                                    onClick={() => this.setState({ activeLink: "/aboutus" })}>About Us</NavLink>
                  </NavItem>
                  <NavItem>
                                <NavLink tag={Link} className={this.state.activeLink === "/contactus" ? "text-dark active" : "text-dark"}
                                    to="/contactus"
                                    onClick={() => this.setState({ activeLink: "/contactus" })} >Contact Us</NavLink>
                  </NavItem>
                  <NavItem>
                                <NavLink tag={Link} className={this.state.activeLink === "/login" ? "text-dark active" : "text-dark"}
                                    to="/login"
                                    onClick={() => this.setState({ activeLink: "/login" })} id="last">Log In</NavLink>
                  </NavItem>
                 </ul>
              
                    </Collapse>

                
               

                </Navbar>

            </header>

        );
            
        }
    }
