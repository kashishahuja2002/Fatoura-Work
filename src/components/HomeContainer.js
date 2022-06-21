import { React, useEffect, useState } from 'react';
import FatouraLogo from "../assets/images/Fatoura-Logo.png";
import dashboard from "../assets/images/Mask Group 7.svg";
import documents from "../assets/images/Mask Group 392.svg";
import reports from "../assets/images/Mask Group 393.svg";
import SidebarCurve from "../assets/images/SidebarCurve.svg";
import avatar from "../assets/images/avatar.jpg";
import { Navbar, Container, Offcanvas, Nav, Row, Col, Dropdown } from 'react-bootstrap';
import './HomeContainer.css';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './profile/Redux/profileActions';

const HomeContainer = (props) => {
    const navigate = useNavigate();
    const pathname = useLocation().pathname;
    
    const state = useSelector((store) => store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser("/users/getUser"));
    },[]);
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        props.setAuthenticated(false)
        navigate("/auth/login");
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} className="vertical-nav d-none d-lg-block">
                        <Nav defaultActiveKey={pathname} className="flex-column"
                            onSelect={(selectedKey) => navigate(selectedKey)}
                        >
                            <img src={FatouraLogo} alt="Fatoura Logo" className="logo" />
                            <Nav.Link eventKey="/pages/dashboard">
                                <img src={dashboard} alt="Fatoura Logo" className="m-1" />
                                Dashboard
                                <span className="dot"></span>
                                <img src={SidebarCurve} alt="Fatoura Logo" className="m-1 sidebar-curve" width="15px" />
                            </Nav.Link>
                            <Nav.Link eventKey="/pages/myInvoices">
                                <img src={documents} alt="Fatoura Logo" className="m-1" />
                                My Documents
                                <span className="dot"></span>
                                <img src={SidebarCurve} alt="Fatoura Logo" className="m-1 sidebar-curve" width="15px" />
                            </Nav.Link>
                            <Nav.Link eventKey="/pages/myReports">
                                <img src={reports} alt="Fatoura Logo" className="m-1" />
                                My Reports
                                <span className="dot"></span>
                                <img src={SidebarCurve} alt="Fatoura Logo" className="m-1 sidebar-curve" width="15px" />
                            </Nav.Link>
                        </Nav>
                    </Col>

                    <Col xs="12" lg="10" >
                        <Row className="header">    
                            {[false,].map((expand) => (
                                <Navbar key={expand} expand={expand}>
                                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="d-block d-lg-none" />
                                    <Dropdown className="blue-dropdown">
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Create New +
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to="/pages/createEdit?task=create&type=Invoice">Invoice</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/pages/createEdit?task=create&type=Bill">Bill</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/pages/createEdit?task=create&type=Quote">Quote</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/pages/createEdit?task=create&type=Purchase Order">Purchase Order</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className="right-header">
                                        <Dropdown className="blue-dropdown">
                                            <Dropdown.Toggle id="dropdown-basic" className="user" >
                                                <img src={avatar} alt="user" width={32} />
                                                Hi, {state.profile.user.data ? state.profile.user.data.firstName : "User"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
                                                <Dropdown.Item as={Link} to="/profile/subscription">Subscription</Dropdown.Item>
                                                <Dropdown.Item as={Link} to="/profile/help">Help</Dropdown.Item>
                                                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <Navbar.Offcanvas
                                        id={`offcanvasNavbar-expand-${expand}`}
                                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                        placement="start"
                                    >
                                        <Offcanvas.Header>
                                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                                <img src={FatouraLogo} alt="Fatoura Logo" className="logo" />
                                            </Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body className="vertical-nav">
                                            <Nav defaultActiveKey="/pages/dashboard" className="flex-column"
                                                onSelect={(selectedKey) => navigate(selectedKey)}
                                            >
                                                <Nav.Link eventKey="/pages/dashboard">
                                                    <img src={dashboard} alt="Fatoura Logo" className="m-1" />
                                                    Dashboard
                                                    <span className="dot"></span>
                                                    <img src={SidebarCurve} alt="Fatoura Logo" className="m-1 sidebar-curve" width="15px" />
                                                </Nav.Link>
                                                <Nav.Link eventKey="/pages/myInvoices">
                                                    <img src={documents} alt="Fatoura Logo" className="m-1" />
                                                    My Documents
                                                    <span className="dot"></span>
                                                    <img src={SidebarCurve} alt="Fatoura Logo" className="m-1 sidebar-curve" width="15px" />
                                                </Nav.Link>
                                                <Nav.Link eventKey="/pages/myReports">
                                                    <img src={reports} alt="Fatoura Logo" className="m-1" />
                                                    My Reports
                                                    <span className="dot"></span>
                                                    <img src={SidebarCurve} alt="Fatoura Logo" className="m-1 sidebar-curve" width="15px" />
                                                </Nav.Link>
                                            </Nav>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Navbar>
                            ))}
                        </Row>

                        <Outlet />
                        
                    </Col>
                </Row>
            </Container>

            
        </>
    )
}

export default HomeContainer;