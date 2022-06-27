import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Input } from "reactstrap";
import ActionBtns from "./ActionBtns";
import './InvoiceTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalByCurrency, getTotalByCurrencyStatus } from "./pages/Redux/documentsAction";

const InvoiceTable = (props) => {
    const state = useSelector((store) => store.pages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotalByCurrency());
        dispatch(getTotalByCurrencyStatus('paid'));
        dispatch(getTotalByCurrencyStatus('unpaid'));
        dispatch(getTotalByCurrencyStatus('overdue'));
    }, []);

    const [balanceDue, setBalanceDue] = useState({});
    useEffect(() => {
        var bd;
        if(state.totalByCurrencyStatus.unpaid.data && state.totalByCurrencyStatus.overdue.data) {
            let c1 = state.totalByCurrencyStatus.unpaid;
            let c2 = state.totalByCurrencyStatus.overdue;
            let len = c1.length;
            bd = {...c1};
            for(let i=0; i<len; i++) {
                bd.data[i][0].total = (c1.data[i][0].total + c2.data[i][0].total) +2;
            }
            setBalanceDue(bd);
        }
        else if(state.totalByCurrencyStatus.unpaid.data)
            setBalanceDue(state.totalByCurrencyStatus.unpaid);
        else if(state.totalByCurrencyStatus.overdue.data)
            setBalanceDue(state.totalByCurrencyStatus.overdue);

    }, [state.totalByCurrencyStatus.unpaid.data, state.totalByCurrencyStatus.overdue.data]);

    let invoices = {};
    if(state.invoices.data) {
        if(props.docType === 'all')
            invoices = state.invoices.data;
        else if(props.docType ==='deleted') {
            if(state.deletedInvoices.data)
                invoices = state.deletedInvoices.data;
        }
        else
            invoices = state.invoices.data.filter(item => item.status === props.docType);
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
                                <td className="text-center">{invoice.subTotal == (null || 0) ? "0.00" : invoice.subTotal}{invoice.currencySymbol}</td>
                                <td className="text-center">{invoice.totalTax == (null || 0) ? "0.00" : invoice.totalTax}{invoice.currencySymbol}</td>
                                <td className="text-center">{invoice.receiptAmount == null ? "0.00" : invoice.receiptAmount}{invoice.currencySymbol}</td>
                                <td className="text-center">{invoice.dueAmount == (null || 0) ? "0.00" : invoice.dueAmount}{invoice.currencySymbol}</td>
                                <td className="text-center">{invoice.totalAmount == (null || 0) ? "0.00" : invoice.totalAmount}{invoice.currencySymbol}</td>
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
                        {state.totalByCurrency.data && state.totalByCurrency.data.map(curr => 
                            <p key={curr[0]._id}><b>{curr[0].total == 0 ? '0.00' : curr[0].total} {curr[0]._id}</b></p>
                        )}
                    </div>
                </div>
                <div className="flex-class">
                    <h5>Paid Amount</h5>
                    <div>
                        {state.totalByCurrencyStatus.paid.data && state.totalByCurrencyStatus.paid.data.map(curr => 
                            <p key={curr[0]._id}><b>{curr[0].total == 0 ? '0.00' : curr[0].total} {curr[0]._id}</b></p>
                        )}
                    </div>
                </div>
                <div className="flex-class">
                    <h5>Balance Due</h5>
                    <div>
                        {balanceDue.data && balanceDue.data.map(curr => 
                            <p key={curr[0]._id}><b>{curr[0].total == 0 ? '0.00' : curr[0].total} {curr[0]._id}</b></p>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default InvoiceTable;

