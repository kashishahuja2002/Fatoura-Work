import React, { useState } from "react";
import { Button, Input, Container, Col, Row, Label, Table} from "reactstrap";
import '../InvoiceTable.css';
import './CreateEdit.css';

import Select from 'react-select';
import ModalCustom from "../ModalCustom";
import { useSearchParams } from "react-router-dom";

const CreateEdit = () => {
    const [searchParams] = useSearchParams();
    const task = searchParams.get('task');
    const type = searchParams.get('type');

    const [openModal, setOpenModal] = useState(false);

    const modalClosed = () => {
        setOpenModal(false);
    }

    const options = [
        { value: 'AED', label: 'AED' },
        { value: 'AFN', label: 'AFN' },
        { value: 'AMD', label: 'AMD' }
    ];

    const imageUpload = (e) => {
        setOpenModal(true);
    }

    return (
        <Container fluid className="create-edit">
            <div className="ce-box box">
                <Row>
                    <div className="ce-head">
                        <span className="plus">
                            {task === "create" ? 
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" width={25} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            }
                        </span>
                        <h4>{task.toUpperCase()} - {type}</h4>
                    </div>
                </Row>

                <div className="ce-body">
                    <Row>
                        <Col xs={12} sm={8} className="bdr-btm mb15">
                            <div className="mb15">
                                <Label>{type} Number</Label>
                                <Input type="text" />
                            </div>
                            <div className="mb15">
                                <Label>{type} Date</Label>
                                <Input type="date" />
                            </div>
                            <div className="mb15">
                                <Label>Due Date</Label>
                                <Input type="date" />
                            </div>
                            <div className="mb15">
                                <Label>Reference Number</Label>
                                <Input type="text" />
                            </div>
                            <div className="mb15">
                                <h5 className="bdr-btm">Client Name</h5>
                            </div>
                            <div className="mb15">
                                <Label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 me-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    Customer Name
                                </Label>
                                <Input type="text" />
                            </div>
                            <div className="mb15">
                                <Label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 me-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                    Billing Address
                                </Label>
                                <Input type="textarea" rows={5} />
                            </div>
                            <div className="mb15">
                                <Label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 me-1"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
                                    Shipping Address
                                </Label>
                                <Input type="textarea" rows={5} />
                            </div>
                        </Col>

                        <Col xs={12} sm={4}>
                            <div className="mb15 file">
                                <p>Company Logo</p>
                                <div className="white-box mb15">
                                    <Label for="companyLogo" className="d-non">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mx-auto"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            <p>Add Company Logo</p>
                                        </div>
                                    </Label>
                                    
                                    <Input  type="file" accept="image/*" id="companyLogo" onChange={imageUpload} hidden />
                                    <img src="https://cdn.pixabay.com/photo/2015/05/27/02/58/buddha-785863__340.jpg" className="d-none" alt="Company Logo" />
                                </div>
                                <div className="d-non file-btn">
                                    <Label for="changeLogo" className="blue-button">Change</Label>
                                    <Input type="file" accept="image/*" id="changeLogo" hidden />
                                    <Button className="white-button">Remove</Button>
                                </div>
                            </div>
                            <div className="mb15">
                                <Label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 me-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    Company Name
                                </Label>
                                <Input type="text" />
                            </div>
                            <div className="mb15">
                                <Label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 me-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                    Company Address
                                </Label>
                                <Input type="textarea" rows={5} />
                            </div>
                            {type === "Invoice" && 
                                <div className="mb15">
                                    <Label>Entity ID</Label>
                                    <Input type="text" />
                                </div>
                            }
                            <div className="mb15">
                                <Label>Tax Number</Label>
                                <Input type="text" />
                            </div>
                        </Col>
                    </Row>

                    <div className="mb15">
                        <Label>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 me-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                            Description
                        </Label>
                        <Input type="text" />
                    </div>

                    <div className="invoice-table mb15">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th className="rounded-l">Item Name</th>
                                    <th>SKU</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Total Amount</th>
                                    <th>Tax</th>
                                    <th className="rounded-r">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>sdfxc</td>
                                    <td>fdczx</td>
                                    <td>1</td>
                                    <td>$1.00</td>
                                    <td>$1.00</td>
                                    <td>
                                        <Button className="blue-button">No Tax</Button>
                                    </td>
                                    <td>
                                        <div className="m-0">
                                            <button className="action-btn">
                                                <svg _ngcontent-okh-c70="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4"><path _ngcontent-okh-c70="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                            </button>
                                            <button className="action-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>sdfxc</td>
                                    <td>fdczx</td>
                                    <td>1</td>
                                    <td>$1.00</td>
                                    <td>$1.00</td>
                                    <td>
                                        <Button className="blue-button">No Tax</Button>
                                    </td>
                                    <td>
                                        <div className="m-0">
                                            <button className="action-btn">
                                                <svg _ngcontent-okh-c70="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4"><path _ngcontent-okh-c70="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                            </button>
                                            <button className="action-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>sdfxc</td>
                                    <td>fdczx</td>
                                    <td>1</td>
                                    <td>$1.00</td>
                                    <td>$1.00</td>
                                    <td>
                                        <Button className="blue-button">No Tax</Button>
                                    </td>
                                    <td>
                                        <div className="m-0">
                                            <button className="action-btn">
                                                <svg _ngcontent-okh-c70="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4"><path _ngcontent-okh-c70="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                            </button>
                                            <button className="action-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="tbl-btm-btn mb15 mt15">
                            <Button className="blue-button">+ Add more items</Button>
                            <Button className="blue-button">Saved item list</Button>
                        </div>
                    </div>

                    <div className="mb15">
                        <Row>
                            <Col xs={12} md={6} className="search-select flex-class">
                                <Label>Currency:</Label>
                                <Select options={options} placeholder="Select Value" />
                            </Col>
                            <Col xs={12} md={6} className="total-table">
                                <div className="flex-class">
                                    <p>Subtotal:</p>
                                    <p>$20.00</p>
                                </div>
                                <div className="flex-class">
                                    <p>Discount (%):</p>
                                    <Input type="number" />
                                    <p>-$0.00</p>
                                </div>
                                <div className="flex-class bdr-btm">
                                    <p>Discount Subtotal:</p>
                                    <p>$20.00</p>
                                </div>
                                <div className="flex-class mt15">
                                    <h5>Total:</h5>
                                    <h5>$20.00</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="mb15 bdr-btm">
                        <p><svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w- me-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> If you are going accept payments via PayPal, you may need to convert amount to equivalent USD amount which is accept by PayPal. To know more about PayPal accepted currencies <a href="https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/">Click here</a></p>
                    </div>

                    <Row className = {type === "Invoice" ? "bdr-btm mb15" : "mb15"} >
                        <Col xs={12} sm={type === "Invoice" ? 8 : 12} >
                            <div className="mb15">
                                <Label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 me-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    Terms and Conditions
                                </Label>
                                <Input type="textarea" rows={10} />
                            </div>
                        </Col>
                        {type === "Invoice" &&
                            <Col xs={12} sm={4} className="file">
                                <Label>QR Code</Label>
                                <div className="mb15">
                                    <p>Heading</p>
                                    <Input type="text" />
                                </div>
                                <div className="mb15">
                                    <p>Image</p>
                                    <div className="white-box mb15">
                                        <Label for="companyLogo" className="d-non">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mx-auto"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                                <p>Add QR Code</p>
                                            </div>
                                        </Label>
                                        <Input type="file" accept="image/*" id="companyLogo" hidden />
                                        <img src="https://cdn.pixabay.com/photo/2015/05/27/02/58/buddha-785863__340.jpg" className="d-none" alt="Company Logo" />
                                    </div>
                                    <div className="d-non file-btn">
                                        <Label for="changeLogo" className="blue-button">Change</Label>
                                        <Input type="file" accept="image/*" id="changeLogo" hidden />
                                        <Button className="white-button">Remove</Button>
                                    </div>
                                </div>
                            </Col>
                        }
                    </Row>
                    
                    {type === "Invoice" && 
                        <>
                            <Row>
                                <Col xs={12} sm={8} >
                                    <div className="mb15 file">
                                        <p>E-Sign</p>
                                        <div className="white-box mb15">
                                            <Label for="companyLogo" className="d-non">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mx-auto"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                                    <p>Add E-Sign</p>
                                                </div>
                                            </Label>
                                            <Input type="file" accept="image/*" id="companyLogo" hidden />
                                            <img src="https://cdn.pixabay.com/photo/2015/05/27/02/58/buddha-785863__340.jpg" className="d-none" alt="Company Logo" />
                                        </div>
                                        <div className="d-non file-btn">
                                            <Label for="changeLogo" className="blue-button">Change</Label>
                                            <Input type="file" accept="image/*" id="changeLogo" hidden />
                                            <Button className="white-button">Remove</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </>
                    }

                    <Row>
                        <div className="btm-btn">
                            <Button className="blue-button">Save {type}</Button>
                            <Button className="white-button">Discard</Button>
                        </div>
                    </Row>
                
                </div>
            </div> 
            {openModal && <ModalCustom openModal={openModal} modalClosed={modalClosed} />}
        </Container>
    );
}

export default CreateEdit;