import React from "react";
import './Subscription.css';
import '../InvoiceTable.css';
import { Container, Row, Button, Col } from "react-bootstrap";
import { Table } from "reactstrap";

const Subscription = () => {
    return (
        <Container fluid className="sub">
            <div className="sub-box box">
                <Row className="white-box">
                    <h5>Current Plan Details</h5>
                    <Row className="plan">
                        <Col xs={5} sm={3}>
                            <p>Plan</p>
                            <p>Basic</p>
                        </Col>
                        <Col xs={7} sm={3}>
                            <p>Remaining Balance</p>
                            <p className="mb-4">5 Invoices</p>
                        </Col>
                        <Col xs={5} sm={3}>
                            <p>Price</p>
                            <p>$140.00</p>
                        </Col>
                        <Col xs={7} sm={3}>
                            <p>Expiration Date</p>
                            <p>Jun 7, 2023</p>
                        </Col>
                    </Row>  
                </Row>

                <Row className="white-box mt-0">
                    <div className="invoice-table">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th colSpan={2} className="rounded-l">Plan Features</th>
                                    <th>
                                        <p>Free</p>
                                        <p>$0/year</p>
                                    </th>
                                    <th>
                                        <p>Basic</p>
                                        <p>$90/year</p>
                                    </th>
                                    <th className="rounded-r">
                                        <p>Pro</p>
                                        <p>$140/year</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>
                                        <p>Create</p>
                                        <p>(Invoices, Bills, Quotes, Purchase Orders)</p>
                                    </td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Save Invoices</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Get paid through PayPal</td>
                                    <td>No</td>
                                    <td>No</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Send Invoice by email</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Search invoices by date range and type</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Pay now by email</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Track Payments</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Export in CSV and PDF</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Multi-Currency</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Sequential Invoice Numbering</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Form Limitation</td>
                                    <td>10</td>
                                    <td>1500</td>
                                    <td>5000</td>
                                </tr>
                                <tr style={{borderColor: "#fff"}}>
                                    <td colSpan={2}></td>
                                    <td>
                                        <Button className="blue-button">
                                            Upgrade
                                            <svg _ngcontent-oqb-c73="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 ms-2 transform rtl:rotate-180"><path _ngcontent-oqb-c73="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </Button>
                                    </td>
                                    <td>
                                        <Button className="blue-button second">
                                            Upgrade
                                            <svg _ngcontent-oqb-c73="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 ms-2 transform rtl:rotate-180"><path _ngcontent-oqb-c73="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        {/* <Row>
                            <Col>
                                <Button className="blue-button">
                                    Upgrade
                                    <svg _ngcontent-oqb-c73="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 ms-2 transform rtl:rotate-180"><path _ngcontent-oqb-c73="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </Button>
                            </Col>
                            <Col>
                                <Button className="blue-button">
                                    Upgrade
                                    <svg _ngcontent-oqb-c73="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 ms-2 transform rtl:rotate-180"><path _ngcontent-oqb-c73="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </Button>
                            </Col>
                        </Row> */}
                        <div className="more-form">
                            <p>Need more forms limit? Contact us <a href="#">here</a></p>
                        </div>
                    </div>
                </Row>
            </div>
        </Container>
    );
}

export default Subscription;