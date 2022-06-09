import React from "react";
import './CreateEdit.css';
import './View.css';
import { Button, Input, Container, Col, Row, Label, Table} from "reactstrap";


const View = (props) => {

    const billingAddress = `{props.type} Billing Address
{props.type} Billing Address
{props.type} Billing Address
{props.type} Billing Address
{props.type} Billing Address
{props.type} Billing Address`;

    return (
        <Container fluid className="view">
            <div className="view-box box">
                <Row>
                    <div className="view-head">
                        <div>
                            <Button className="white-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width={17} viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 me-2 transform rtl:rotate-180"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                Back
                            </Button>
                        </div>
                        <div>
                            <Button className="blue-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width={17} fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                Edit
                            </Button>
                            <Button className="blue-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width={17} fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                                Copy
                            </Button>
                            <Button className="blue-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width={17} fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                Download
                            </Button>
                            <Button className="blue-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width={17} fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                Delete
                            </Button>
                            <Button className="blue-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width={17} fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                Send by email
                            </Button>
                            <Button className="blue-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width={17} fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                Payments
                            </Button>
                        </div>
                    </div>
                </Row>

                <div className="view-body">
                    <Row>
                        <h4 className="text-center">{props.type.toUpperCase()}</h4>
                    </Row>

                    <Row>
                        <Col xs={12} sm={7}>
                            <p><b>{props.type} Number: </b>INV2022-00002</p>
                            <p><b>{props.type} Date: </b>09-06-2022</p>
                            <p><b>Reference Number: </b>{props.type} Reference Number</p>
                            <p><b>Due Date: </b>10-06-2022</p>
                            <div className="bdr-btm mt15">
                                <p><b>Client Name</b></p>
                            </div>
                            <div className="bdr-btm mb15">
                                <p className="mt-1 mb-1"><b>{props.type} Customer Name</b></p>
                                <p><b>Billing Address:</b></p>
                                <pre>{billingAddress}</pre>
                                <p><b>Shipping Address:</b></p>
                                <pre>{billingAddress}</pre>
                            </div>
                        </Col>
                        <Col xs={12} sm={5}>
                            <div className="img-box mb15">
                                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="Company Logo" />
                            </div>
                            <p><b>{props.type} Company Name</b></p>
                            <pre>{billingAddress}</pre>
                            {props.type === "Invoice" && <p><b>Entity ID: </b>{props.type} Entity Id</p> }
                            <p><b>Tax Number: </b>{props.type} Tax Number</p>
                        </Col>
                    </Row>

                    <Row className="bdr-btm mb15">
                        <p><b>Description</b></p>
                        <p>{props.type} Description</p>
                    
                        <div className="invoice-table">
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th className="rounded-l">Item Name</th>
                                        <th>SKU</th>
                                        <th>Quantity</th>
                                        <th>Unit Price</th>
                                        <th>Total Amount</th>
                                        <th className="rounded-r">Tax</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>sdfxc</td>
                                        <td>fdczx</td>
                                        <td>1</td>
                                        <td>$1.00</td>
                                        <td>$1.00</td>
                                        <td>No Tax</td>
                                    </tr>
                                    <tr>
                                        <td>sdfxc</td>
                                        <td>fdczx</td>
                                        <td>1</td>
                                        <td>$1.00</td>
                                        <td>$1.00</td>
                                        <td>No Tax</td>
                                    </tr>
                                    <tr>
                                        <td>sdfxc</td>
                                        <td>fdczx</td>
                                        <td>1</td>
                                        <td>$1.00</td>
                                        <td>$1.00</td>
                                        <td>No Tax</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>

                    <Row>
                        <Col xs={12} sm={7}>
                            <p><b>Currency: </b>AED</p>
                        </Col>
                        <Col xs={12} sm={5} className="total-table">
                            <div className="flex-class">
                                <p><b>Subtotal:</b></p>
                                <p>د.إ14.00</p>
                            </div>
                            <div className="flex-class">
                                <p><b>Discount (10.00%):</b></p>
                                <p>-د.إ1.40</p>
                            </div>
                            <div className="flex-class">
                                <p><b>Discount Subtotal:</b></p>
                                <p>د.إ12.60</p>
                            </div>
                            <div className="mt-2 mb-2 bdr-btm"></div>
                            <div className="flex-class">
                                <p><b>Total:</b></p>
                                <p><b>د.إ12.60</b></p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <p><b>Terms and Conditions</b></p>
                        <pre>{billingAddress}</pre>
                    </Row>

                    {props.type === "Invoice" && 
                        <>
                            <Row>
                                <p><b>Digitally signed document</b></p>
                                <div className="img-box e-sign">
                                    <img src="https://static.cdn.wisestamp.com/wp-content/uploads/2020/08/Oprah-Winfrey-Signature-1.png" alt="E-Sign" />
                                </div>
                            </Row>
                            
                            <Row>
                                <div className="flex-class">
                                    <div className="qr">
                                        E-{props.type}
                                        <div className="btm-qr">
                                            <img src="https://www.pngall.com/wp-content/uploads/2/QR-Code-PNG-Picture.png" alt="E-Invoice" />
                                        </div>
                                    </div>
                                    <div className="qr">
                                        {props.type} QR Code Heading
                                        <div className="btm-qr">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcxm1tSJphluNimxurlape3Q9nhLcX3_apA&usqp=CAU" alt="QR Code" />
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </>
                    }

                </div>
            </div>
        </Container>
    );
}

export default View;