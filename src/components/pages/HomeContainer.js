import { React } from 'react';
import FatouraLogo from "../../assets/images/Fatoura-Logo.png";
import dashboard from "../../assets/images/Mask Group 7.svg";
import documents from "../../assets/images/Mask Group 392.svg";
import reports from "../../assets/images/Mask Group 393.svg";
import SidebarCurve from "../../assets/images/SidebarCurve.svg";
import avatar from "../../assets/images/avatar.jpg";
import { Navbar, Container, Offcanvas, Nav, Row, Col, Dropdown } from 'react-bootstrap';
import './HomeContainer.css';
import Dashboard from './Dashboard';

const HomeContainer = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} className="vertical-nav d-none d-lg-block">
                        <Nav defaultActiveKey="/pages/dashboard" className="flex-column">
                            <img src={FatouraLogo} alt="Fatoura Logo" className="logo" />
                            <Nav.Link eventKey="/pages/dashboard">
                                <img src={dashboard} alt="Fatoura Logo" className="m-1" />
                                Dashboard
                                <span className="dot"></span>
                                <img src={SidebarCurve} alt="Fatoura Logo" className="m-1 sidebar-curve" width="15px" />
                            </Nav.Link>
                            <Nav.Link eventKey="/pages/documents">
                                <img src={documents} alt="Fatoura Logo" className="m-1" />
                                My Documents
                                <span className="dot"></span>
                                <img src={SidebarCurve} alt="Fatoura Logo" className="m-1 sidebar-curve" width="15px" />
                            </Nav.Link>
                            <Nav.Link eventKey="/pages/reports">
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
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" className="create-new">
                                            Create New +
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Invoice</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Bill</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Quote</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Purchase Order</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className="right-header">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic" className="user" >
                                                <img src={avatar} alt="user" width={32} />
                                                Hi, Kashish
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Subscription</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
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
                                            <Nav defaultActiveKey="/pages/dashboard" className="flex-column">
                                                <Nav.Link eventKey="/pages/dashboard">
                                                    <img src={dashboard} alt="Fatoura Logo" className="m-1" />
                                                    Dashboard
                                                    <span className="dot"></span>
                                                    <img src={SidebarCurve} alt="Fatoura Logo" className="m-1 sidebar-curve" width="15px" />
                                                </Nav.Link>
                                                <Nav.Link eventKey="/pages/documents">
                                                    <img src={documents} alt="Fatoura Logo" className="m-1" />
                                                    My Documents
                                                    <span className="dot"></span>
                                                    <img src={SidebarCurve} alt="Fatoura Logo" className="m-1 sidebar-curve" width="15px" />
                                                </Nav.Link>
                                                <Nav.Link eventKey="/pages/reports">
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

                        <Dashboard />
                        
                    </Col>
                </Row>
            </Container>

            
        </>
    )
}

export default HomeContainer;