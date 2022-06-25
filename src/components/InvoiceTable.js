import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Input } from "reactstrap";
import ActionBtns from "./ActionBtns";
import './InvoiceTable.css';
import { useSelector } from 'react-redux';

const InvoiceTable = () => {
    const state = useSelector((store) => store.pages);
    console.log(state.invoices);

    const [docType, setDocType] = useState('all');

    let invoices = {};
    if(state.invoices.data) {
        if(docType === 'all')
            invoices = state.invoices.data;
        else
            invoices = state.invoices.data.filter(item => item.status === docType);
    }
    
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
                {invoices && Object.keys(invoices).length !== 0 &&
                    <tbody>
                        {invoices.map((invoice =>  
                            <tr key={invoice._id}>
                                <td>
                                    <Input type="checkbox" id={invoice._id}></Input>
                                </td>
                                <td>{invoice.to}</td>
                                <td>{invoice.type}</td>
                                <td>{invoice.invoiceNumber}</td>
                                <td>{new Date(invoice.invoiceDate).toISOString().slice(0,10)}</td>
                                <td>֏2.00</td>
                                <td>֏0.00</td>
                                <td>֏0.00</td>
                                <td>֏2.00</td>
                                <td>֏2.00</td>
                                <td>
                                    <ActionBtns />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                }
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

