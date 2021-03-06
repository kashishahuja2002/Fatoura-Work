import { React } from 'react';
import './Dashboard.css';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Link } from "react-router-dom";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
) 

const Dashboard = () => {

    var data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }

    return (
        <Container fluid className="dashboard">
            <Row>
                <Col xs={12} lg={8} >
                    <div className="dash-box box">
                        <div className="flex-class white-dropdown">
                            <h5>Dashboard</h5>
                            <Dropdown align="end">
                                <Dropdown.Toggle id="dropdown-basic">
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
                                    <div>
                                        <div className="mb-3">
                                            <span className="icon-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path></svg>
                                            </span>
                                        </div>
                                        <div>
                                            <h2>1</h2>
                                        </div>
                                        <div>Paid</div>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={4}>
                                <div className="white-box">
                                    <div>
                                        <div className="mb-3">
                                            <span className="icon-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                            </span> 
                                        </div>
                                        <div>
                                            <h2>1</h2>
                                        </div>
                                        <div>Unpaid</div>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={4}>
                                <div className="white-box">
                                    <div>
                                        <div className="mb-3">
                                            <span className="icon-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </span>   
                                        </div>
                                        <div>
                                            <h2>1</h2>
                                        </div>
                                        <div>Overdue</div>     
                                    </div>
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
                            <Link to="/pages/myInvoices">View more details</Link>
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row className="history-box box">
                <div className="flex-class dash-box">
                    <h5>History</h5>
                    <div className="flex-class white-dropdown">
                        <Dropdown align="end" className="m-2">
                            <Dropdown.Toggle id="dropdown-basic">
                                AED
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">AED</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">AMD</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown align="end" className="m-2">
                            <Dropdown.Toggle id="dropdown-basic">
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
                    <Bar 
                        data={data}
                        height={400}
                        options={options}
                    />
                </Col>

                <Col xs={12} lg={3} className="p-0">
                    <div className="white-box">
                        <p>Sales Report</p>
                        <Row>
                            <Col xs={4} className="p-0">
                                <span className="icon-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
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
    )
}

export default Dashboard;
