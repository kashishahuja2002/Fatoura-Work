import React from "react";
import { Container, Table } from "react-bootstrap";
import { Input } from "reactstrap";
import ActionBtns from "./ActionBtns";
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
                            <ActionBtns />
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
                            <ActionBtns />
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
                            <ActionBtns />
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

