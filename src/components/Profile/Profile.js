import React from "react";
import './Profile.css';
import { Container, Row, Button, Col } from "react-bootstrap";
import Avatar from '../../assets/images/avatar.jpg'
import { Input, Label } from "reactstrap";
import Select from 'react-select';

const Profile = () => {
    const options = [
        { value: 'AED', label: 'AED' },
        { value: 'AFN', label: 'AFN' },
        { value: 'AMD', label: 'AMD' }
    ];

    return (
        <Container fluid className="profile">
            <div className="profile-box box">
                <Row className="white-box mt-0">
                    <h5>Profile Picture</h5>

                    <div className="avatar">
                        <img src={Avatar} alt="Profile avatar" className="profile-avatar" />
                    
                        <Label for="profile-picture" className="blue-button m-3">Add Image</Label>
                        <Input type="file" hidden id="profile-picture" />
                        <div>
                            {/* <Label for="profile-picture" className="blue-button">Change</Label>
                            <Button className="white-button">Remove</Button> */}
                        </div>
                    </div>

                    <div className="flex-class">
                        <h5>Personal Information</h5>
                        <div className="edit-btn">
                            {/* <Button className="blue-button">Edit</Button> */}
                            <Button className="white-button">Cancel</Button>
                            <Button className="blue-button">Save</Button>
                        </div>
                    </div>

                    <Col xs={12} md={8}>
                        <div className="profile-input">
                            <div>
                                <Label>First Name</Label>
                                <Input type="text" />
                            </div>
                            <div>
                                <Label>Last Name</Label>
                                <Input type="text" />
                            </div>
                        </div>

                        <div className="profile-input">
                            <div>
                                <Label>Email Address</Label>
                                <Input type="email" />
                            </div>
                            <div>
                                <Label>Contact Number</Label>
                                <Input type="tel" />
                            </div>
                        </div>

                        <div className="password">
                            <h5>Password Settings</h5>
                            <div>
                                <Button className="blue-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                                </Button>
                                <Button className="blue-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </Button>
                                <Button className="white-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </Button>
                            </div>
                        </div>

                        <div className="profile-input">
                            <div>
                                <Label>New Password</Label>
                                <Input type="password" />
                            </div>
                            <div>
                                <Label>Confirm Password</Label>
                                <Input type="password" />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="white-box mt-0">
                    <h5>Company Logo</h5>

                    <div className="avatar">
                        <img src={Avatar} alt="Company Logo" className="profile-avatar" />
                    
                        {/* <Label for="profile-picture" className="blue-button m-3">Add Image</Label> */}
                        <Input type="file" hidden id="company-logo" />
                        <div>
                            <Label for="company-logo" className="blue-button">Change</Label>
                            <Button className="white-button">Remove</Button>
                        </div>
                    </div>

                    <div className="flex-class">
                        <h5>Company Settings</h5>
                        <div className="edit-btn">
                            {/* <Button className="blue-button">Edit</Button> */}
                            <Button className="white-button">Cancel</Button>
                            <Button className="blue-button">Save</Button>
                        </div>
                    </div>

                    <Col xs={12} md={8} lg={6} className="company-input">
                        <div>
                            <Label>Company Name</Label>
                            <Input type="text" />
                        </div>
                        <div>
                            <Label>Entity ID</Label>
                            <Input type="text" />
                        </div>
                        <div>
                            <Label>Company Address</Label>
                            <Input type="textarea" rows={4} />
                        </div>
                        <div className="profile-input">
                            <div>
                                <Label>Tax Number</Label>
                                <Input type="password" />
                            </div>
                            <div className="search-select">
                                <Label>Currency Selection</Label>
                                <Select options={options} placeholder="Select Value" />
                            </div>
                        </div>
                        <p>Decimal Settings</p>
                        <div className="decimal">
                            <Input type="radio" name="decimal" value="2d" />
                            <Label>2 Decimals</Label>
                            <Input type="radio" name="decimal" value="3d" />
                            <Label>3 Decimals</Label>
                        </div>

                        <h5>QR Code Settings</h5>
                        <div>
                            <Label>Heading</Label>
                            <Input type="text" />
                        </div>

                        <div>
                            <p>Image</p>
                        </div>
                        <div className="avatar">
                            <div className="qr">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-20 w-20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                            </div>
                        
                            {/* <Label for="profile-picture" className="blue-button m-3">Add Image</Label> */}
                            <Input type="file" hidden id="profile-picture" />
                            <div>
                                <Label for="profile-picture" className="blue-button">Change</Label>
                                <Button className="white-button">Remove</Button>
                            </div>
                        </div>

                        <h5>E-Sign Settings</h5>
                        <div className="avatar">
                            <div className="e-sign">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-20 w-20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            </div>
                        
                            {/* <Label for="profile-picture" className="blue-button m-3">Add Image</Label> */}
                            <Input type="file" hidden id="profile-picture" />
                            <div>
                                <Label for="profile-picture" className="blue-button">Change</Label>
                                <Button className="white-button">Remove</Button>
                            </div>
                        </div>
                        
                    </Col>
                </Row>

                <Row className="white-box mb-0">
                    <div className="info">
                        <h5>PayPal Payment Settings</h5>  
                        <a>How to?</a>
                    </div>
                    <p>This is a Pro feature. Upgrade your account to configure these settings</p>
                </Row>
            </div>
        </Container>
    );
}

export default Profile;