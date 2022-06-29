import React, { useEffect } from "react";
import './Subscription.css';
import '../InvoiceTable.css';
import { Container, Row, Button, Col } from "react-bootstrap";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { upgradePlan } from "./Redux/profileActions";
import { useDispatch, useSelector } from "react-redux";

const Subscription = () => {
    const state = useSelector((store) => store.profile);
    const dispatch = useDispatch();

    let plans = {};
    if(state.plans.data) {
        plans = state.plans.data.filter(plan => !plan.isHidden);
    }

    const handleUpgrade = (e) => {
        var body = {
            "planId": e.target.id, 
            "id": state.user.data._id,
            "expiryDate": state.user.data.subscription?.expiryDate ? state.user.data.subscription?.expiryDate : null
        };
        dispatch(upgradePlan("/subscription/subscribePlan", body));
    }

    let subId = null;
    let userPlan = {};
    let expDate = '';
    let invoiceBalance = 0;
    if(state.user.data && state.plans.data) {
        subId = state.user.data.subscription.subscriptionId;
        userPlan = state.plans.data.filter(plan => plan._id === subId);
        let date = new Date(state.user.data.subscription.expiryDate);
        expDate = date.toLocaleString('default', { month: 'long' }) + " " + date.getUTCDate() + ", " + date.getUTCFullYear();
        console.log(userPlan);
        console.log(state);
        if(state.invoice.data)
            invoiceBalance = userPlan[0].features[0]["Form limitation"] - state.invoice.data;
    }
    
    return (
        <Container fluid className="sub">
            <div className="sub-box box">
                <Row className="white-box">
                    <h5>Current Plan Details</h5>
                    <Row className="plan">
                        <Col xs={5} sm={3}>
                            <p>Plan</p>
                            <p>{userPlan[0] ? userPlan[0].planName : ''}</p>
                        </Col>
                        <Col xs={7} sm={3}>
                            <p>Remaining Balance</p>
                            <p className="mb-4">{invoiceBalance} Invoices</p>
                        </Col>
                        <Col xs={5} sm={3}>
                            <p>Price</p>
                            <p>${userPlan[0] ? userPlan[0].planPrice : '0'}.00</p>
                        </Col>
                        <Col xs={7} sm={3}>
                            <p>Expiration Date</p>
                            <p>{expDate}</p>
                        </Col>
                    </Row>  
                </Row>

                <Row className="white-box mt-0">
                    <div className="invoice-table">
                        {plans && Object.keys(plans).length !== 0 
                            ? <>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th colSpan={2} className="rounded-l">Plan Features</th>
                                            <th>
                                                <p>{plans[0].planName}</p>
                                                <p>${plans[0].planPrice}/year</p>
                                            </th>
                                            <th>
                                                <p>{plans[1].planName}</p>
                                                <p>${plans[1].planPrice}/year</p>
                                            </th>
                                            <th className="rounded-r">
                                                <p>{plans[2].planName}</p>
                                                <p>${plans[2].planPrice}/year</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={2}>
                                                <p>Create</p>
                                                <p>(Invoices, Bills, Quotes, Purchase Orders)</p>
                                            </td>
                                            {plans.map(plan => <td key={plan._id}>{plan.features[0]["create"] ? "Yes" : "No"}</td>)}
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Save Invoices</td>
                                            {plans.map(plan => <td key={plan._id}>{plan.features[0]["saveinvoice"] ? "Yes" : "No"}</td>)}
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Get paid through PayPal</td>
                                            {plans.map(plan => <td key={plan._id}>{plan.features[0]["Get Paid through Paypal"] ? "Yes" : "No"}</td>)}
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Send Invoice by email</td>
                                            {plans.map(plan => <td key={plan._id}>{plan.features[0]["Send Invoice by email"] ? "Yes" : "No"}</td>)}
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Search invoices by date range and type</td>
                                            {plans.map(plan => <td key={plan._id}>{plan.features[0]["Search invoices by date range and type"] ? "Yes" : "No"}</td>)}
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Pay now by email</td>
                                            {plans.map(plan => <td key={plan._id}>{plan.features[0]["Pay now by email & SMS"] ? "Yes" : "No"}</td>)}
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Track Payments</td>
                                            {plans.map(plan => <td key={plan._id}>{plan.features[0]["Track payments"] ? "Yes" : "No"}</td>)}
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Export in CSV and PDF</td>
                                            {plans.map(plan => <td key={plan._id}>{plan.features[0]["Export xls"] ? "Yes" : "No"}</td>)}
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Multi-Currency</td>
                                            {plans.map(plan => <td key={plan._id}>{plan.features[0]["Multi currency"] ? "Yes" : "No"}</td>)}
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Sequential Invoice Numbering</td>
                                            {plans.map(plan => <td key={plan._id}>{plan.features[0]["Sequential Invoice Numbering"] ? "Yes" : "No"}</td>)}
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Form Limitation</td>
                                            {plans.map(plan => <td key={plan._id}>{plan.features[0]["Form limitation"]}</td>)}
                                        </tr>
                                        <tr style={{borderColor: "#fff"}}>
                                            <td colSpan={2}></td>
                                            <td>
                                                <Button className="blue-button" id={plans[1].paypalData.planId} onClick={handleUpgrade}>
                                                    Upgrade
                                                    <svg _ngcontent-oqb-c73="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 ms-2 transform rtl:rotate-180"><path _ngcontent-oqb-c73="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                                </Button>
                                            </td>
                                            <td>
                                                <Button className="blue-button second" id={plans[2].paypalData.planId} onClick={handleUpgrade}>
                                                    Upgrade
                                                    <svg _ngcontent-oqb-c73="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 ms-2 transform rtl:rotate-180"><path _ngcontent-oqb-c73="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className="more-form">
                                    <p>Need more forms limit? Contact us <Link to="/profile/help">here</Link></p>
                                </div>
                            </>
                            : <div className="text-center">
                                <h3>No Plans to subscribe! You can wait until admin adds some plans.</h3>
                            </div>
                        }
                    </div>
                </Row>
            </div>
        </Container>
    );
}

export default Subscription;