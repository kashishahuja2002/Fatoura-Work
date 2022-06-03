import { React } from 'react';
import './Dashboard.css';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <>
            <Container fluid className="dashboard">
                <Row>
                    <Col xs={12} lg={8} >
                        <div className="dash-box box">
                            <div className="flex-class">
                                <h5>Dashboard</h5>
                                <Dropdown align="end">
                                    <Dropdown.Toggle id="dropdown-basic" className="last">
                                        Last 30 Days 
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Last 30 Days</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Last Quarter</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Last Year</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <Row>
                                <Col xs={12} sm={4}>
                                    <div className="white-box">
                                        <div className="mb-3">
                                            <span className="icon-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>
                                            </span>
                                        </div>
                                        <div>
                                            <h2>1</h2>
                                        </div>
                                        <div>Paid</div>
                                    </div>
                                </Col>

                                <Col xs={12} sm={4}>
                                    <div className="white-box">
                                        <div className="mb-3">
                                            <span className="icon-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                            </span> 
                                        </div>
                                        <div>
                                            <h2>1</h2>
                                        </div>
                                        <div>Unpaid</div>
                                    </div>
                                </Col>

                                <Col xs={12} sm={4}>
                                    <div className="white-box">
                                        <div className="mb-3">
                                            <span className="icon-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </span>   
                                        </div>
                                        <div>
                                            <h2>1</h2>
                                        </div>
                                        <div>Overdue</div>     
                                    </div>
                                </Col>
                            </Row>
                            
                        </div>
                    </Col>

                    <Col xs={12} lg={4} >
                        <div className="pea-box box">
                            <Row>
                                <Col>
                                    <h5>Customer Name</h5>
                                </Col>
                                <Col>
                                    <h5>Invoice Amount</h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <p>abcd</p>
                                </Col>
                                <Col>
                                    <p>Rs. 1234</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <p>wxyz</p>
                                </Col>
                                <Col>
                                    <p>Rs. 5678</p>
                                </Col>
                            </Row>

                            <Row>
                                <a href="#">View more details</a>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <Row className="history-box box">
                    <div className="flex-class dash-box">
                        <h5>History</h5>
                        <div className="flex-class">
                            <Dropdown align="end" className="m-2">
                                <Dropdown.Toggle id="dropdown-basic" className="last">
                                    AED
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">AED</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AMD</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown align="end" className="m-2">
                                <Dropdown.Toggle id="dropdown-basic" className="last">
                                    Current Year
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Current Week</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Last 7 Days</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Current Month</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Last Month</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Last 30 Days</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Current Year</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div> 

                    <Col xs={12} lg={9}>
                        <div>Chart</div>
                    </Col>

                    <Col xs={12} lg={3} className="p-0">
                        <div className="white-box">
                            <p>Sales Report</p>
                            <Row>
                                <Col xs={4} className="p-0">
                                    <span className="icon-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                                    </span> 
                                </Col>
                                <Col xs={8} className="timely">
                                    <div>
                                        0.00
                                    </div>
                                    <div>
                                        Monthly
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={4} className="p-0">
                                    <span className="icon-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                                    </span> 
                                </Col>
                                <Col xs={8} className="timely">
                                    <div>
                                        0.00
                                    </div>
                                    <div>
                                        Monthly
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={4} className="p-0">
                                    <span className="icon-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                                    </span> 
                                </Col>
                                <Col xs={8} className="timely">
                                    <div>
                                        0.00
                                    </div>
                                    <div>
                                        Monthly
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;
