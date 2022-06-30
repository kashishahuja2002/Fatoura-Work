import React, { useState } from "react";
import { Container, Row, Dropdown, Button } from "react-bootstrap";
import './Reports.css';
import InvoiceTable from "../InvoiceTable";
import { Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { getFilterData } from "./Redux/reportsAction";

const Reports = () => {
    const dispatch = useDispatch();

    const [docStatus, setDocStatus] = useState('All Documents');
    const [docType, setDocType] = useState('All');

    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const [checkedDocs, setCheckedDocs] = useState([]);

    const handleSearch = () => {
        if(fromDate!==null && toDate!==null) {
            var body = {
                "fromDate": fromDate,
                "endDate": toDate,
                "status": docStatus === "All Documents" ? "all invoices" : docStatus,
                "type": docType === "All" ? "" : docType
            }
            dispatch(getFilterData(body));
        }
    }

    return (
        <Container fluid className="reports">
            <div className="report-box box">
                <Row>
                    <div className="head flex-class">
                        <h5>My Invoices</h5>
                        <div className="dropdowns-div">
                            <div className="input-date">
                                <p><b>Date From</b></p>
                                <Input type="date" className="dropdown-toggle" onChange={(e) => setFromDate(e.target.value)} />
                            </div>
                            <div className="input-date">
                                <p><b>Date To</b></p>
                                <Input type="date" className="dropdown-toggle" onChange={(e) => setToDate(e.target.value)} />
                            </div>
                            <div>
                                <p><b>Status</b></p>
                                <Dropdown align="end" className="white-dropdown">
                                    <Dropdown.Toggle id="dropdown-basic" style={{textTransform: "capitalize"}}>
                                        {docStatus}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => {setDocStatus('All Documents')}}>All Documents</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setDocStatus('overdue')}}>Overdue</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setDocStatus('paid')}}>Paid</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setDocStatus('unpaid')}}>Unpaid</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div>
                                <p><b>Type</b></p>
                                <Dropdown align="end" className="white-dropdown">
                                    <Dropdown.Toggle id="dropdown-basic">
                                        {docType}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => {setDocType('All')}}>All</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {setDocType('Invoice')}}>Invoice</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {setDocType('Bill')}}>Bill</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {setDocType('Quote')}}>Quote</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {setDocType('Purchase Order')}}>Purchase Order</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {setDocType('Receipt')}}>Receipt</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="flex-class">
                                <div>
                                    <Button className="blue-button" onClick={handleSearch}>
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
                    <InvoiceTable docStatus={docStatus} docType={docType} setCheckedDocs={setCheckedDocs} parent="reports" />
                </Row>

            </div>
        </Container>
    );
}

export default Reports;