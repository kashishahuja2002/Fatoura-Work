import React, { useEffect } from "react";
import { Container, Row, Dropdown, Button } from "react-bootstrap";
import './Documents.css';
import InvoiceTable from "../InvoiceTable";
import { useDispatch } from "react-redux";
import { getInvoices } from "./Redux/documentsAction";

const Documents = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInvoices());
    }, [])

    return (
        <Container fluid className="documents">
            <div className="doc-box box">
                <Row>
                    <div className="head flex-class">
                        <h5>My Invoices</h5>
                        <div className="dropdowns-div">
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
                            <Button className="blue-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width={17} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 me-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                                Copy
                            </Button>
                            <Button className="blue-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width={17} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 me-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                Delete
                            </Button>
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

export default Documents;