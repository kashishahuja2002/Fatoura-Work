import React from "react";
import { Container, Row, Dropdown, Button } from "react-bootstrap";
import './Reports.css';
import InvoiceTable from "./InvoiceTable";
import { Input } from "reactstrap";

const Reports = () => {
    return (
        <Container fluid className="reports">
            <div className="report-box box">
                <Row>
                    <div className="head flex-class">
                        <h5>My Invoices</h5>
                        <div className="dropdowns-div">
                            <div className="input-date">
                                <p><b>Date From</b></p>
                                <Input type="date" className="dropdown-toggle" />
                            </div>
                            <div className="input-date">
                                <p><b>Date To</b></p>
                                <Input type="date" className="dropdown-toggle" />
                            </div>
                            <div>
                                <p><b>Status</b></p>
                                <Dropdown align="end" className="white-dropdown">
                                    <Dropdown.Toggle id="dropdown-basic">
                                        All Documents 
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">All Documents</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Overdue</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Paid</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Unpaid</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Waste Bin</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div>
                                <p><b>Type</b></p>
                                <Dropdown align="end" className="white-dropdown">
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Invoice
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Invoice</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Bill</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Quote</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Purchase Order</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Receipt</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="flex-class">
                                <div>
                                    <Button className="blue-button">
                                        Search
                                    </Button>
                                </div>
                                <div>
                                    <Dropdown align="end" className="blue-dropdown">
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Export
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">PDF</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">XLS</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>

                <Row>
                    <InvoiceTable />
                </Row>

            </div>
        </Container>
    );
}

export default Reports;