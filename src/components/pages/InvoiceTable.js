import React from "react";
import { Container, Table } from "react-bootstrap";
import { Input } from "reactstrap";
import './InvoiceTable.css';

const InvoiceTable = () => {
    return (
        <Container fluid className="invoice-table">
            <Table responsive>
                <thead>
                    <tr>
                        <th className="rounded-l">
                            <Input type="checkbox"></Input>
                        </th>
                        <th>Customer Name</th>
                        <th>Type</th>
                        <th>Invoice #</th>
                        <th>Date Issued</th>
                        <th>Amount</th>
                        <th>Tax</th>
                        <th>Amount Paid</th>
                        <th>Amount Due</th>
                        <th>Total Amount</th>
                        <th className="rounded-r">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Input type="checkbox"></Input>
                        </td>
                        <td>Mark</td>
                        <td>Invoice</td>
                        <td>INV2022-000012</td>
                        <td>2022-06-06</td>
                        <td>֏2.00</td>
                        <td>֏0.00</td>
                        <td>֏0.00</td>
                        <td>֏2.00</td>
                        <td>֏2.00</td>
                        <td>
                            <div>
                                <button className="action-btn">
                                    <svg _ngcontent-okh-c70="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path _ngcontent-okh-c70="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </button>
                                <button className="action-btn">
                                    <svg _ngcontent-okh-c70="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path _ngcontent-okh-c70="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Input type="checkbox"></Input>
                        </td>
                        <td>Mark</td>
                        <td>Invoice</td>
                        <td>INV2022-000012</td>
                        <td>2022-06-06</td>
                        <td>֏2.00</td>
                        <td>֏0.00</td>
                        <td>֏0.00</td>
                        <td>֏2.00</td>
                        <td>֏2.00</td>
                        <td>
                            <div>
                                <button className="action-btn">
                                    <svg _ngcontent-okh-c70="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path _ngcontent-okh-c70="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </button>
                                <button className="action-btn">
                                    <svg _ngcontent-okh-c70="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path _ngcontent-okh-c70="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Input type="checkbox"></Input>
                        </td>
                        <td>Mark</td>
                        <td>Invoice</td>
                        <td>INV2022-000012</td>
                        <td>2022-06-06</td>
                        <td>֏2.00</td>
                        <td>֏0.00</td>
                        <td>֏0.00</td>
                        <td>֏2.00</td>
                        <td>֏2.00</td>
                        <td>
                            <div>
                                <button className="action-btn">
                                    <svg _ngcontent-okh-c70="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path _ngcontent-okh-c70="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </button>
                                <button className="action-btn">
                                    <svg _ngcontent-okh-c70="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path _ngcontent-okh-c70="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className="bottom">
                <div className="flex-class">
                    <h5>Total</h5>
                    <div>
                        <p><b>0.00 AMD</b></p>
                        <p><b>0.00 AED</b></p>
                    </div>
                </div>
                <div className="flex-class">
                    <h5>Paid Amount</h5>
                    <div>
                        <p><b>0.00 AMD</b></p>
                        <p><b>0.00 AED</b></p>
                    </div>
                </div>
                <div className="flex-class">
                    <h5>Balance Due</h5>
                    <div>
                        <p><b>0.00 AMD</b></p>
                        <p><b>0.00 AED</b></p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default InvoiceTable;

