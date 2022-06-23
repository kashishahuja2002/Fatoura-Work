import React, { useEffect, useState, useRef } from "react";
import './Profile.css';
import { Container, Row, Button, Col } from "react-bootstrap";
import Avatar from '../../assets/images/avatar.jpg'
import { Input, Label } from "reactstrap";
import Select from 'react-select';
import ModalCustom from "../ModalCustom";
import { useDispatch, useSelector } from "react-redux";
import { updateAvatar, updateCompany, updateUser, updatePassword } from "./Redux/profileActions";
import { useForm } from "react-hook-form";
import InfoModal from "../InfoModal";

const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector((store) => store.profile); 
    // console.log(state);

    const options = [
        { value: 'AED', label: 'AED' },
        { value: 'AFN', label: 'AFN' },
        { value: 'AMD', label: 'AMD' }
    ];

    // Modal
    const [openModal, setOpenModal] = useState(false);
    const [modalSrc, setModalSrc] = useState(null);
    const [modalId, setModalId] = useState(null);

    const modalClosed = () => {
        setOpenModal(false);
    }

    // Avatar
    const handleImageChange = (e) => {
        setModalSrc(e.target.files[0]);
        setModalId(e.target.id);
        e.target.value = null;
        setOpenModal(true);
    };

    const handleImageRemove = (e) => {
        const body = {"data": "removeMyImage"};
        dispatch(updateAvatar(e.target.id, "put", body));
    };

    // React hook form
    useEffect(() => {
        reset({
            firstName: state.user.data ? state.user.data.firstName : '',
            lastName: state.user.data ? state.user.data.lastName: '',
            email: state.user.data ? state.user.data.email: '',
            phoneNumber: state.user.data ? state.user.data.phoneNumber: ''
        }, {
            keepErrors: true, 
            keepDirty: true,
            keepIsSubmitted: false,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: false,
        });

        resetCompany({
            companyName: state.user.data ? state.user.data.companyDetails.companyName : '',
            entityID: state.user.data ? state.user.data.companyDetails.entityID : '',
            companyAddress: state.user.data ? state.user.data.companyDetails.companyAddress : '',
            taxNumber: state.user.data ? state.user.data.taxNumber : '',
            currencyType: state.user.data ? state.user.data.currencyType : '',
            decimalSize: state.user.data ? state.user.data.companyDetails.decimalSize : null,
            qrHeading: state.user.data ? state.user.data.companyDetails.qrHeading : null,
            eSign: state.user.data ? state.user.data.companyDetails.eSign : '',
            qrCode: state.user.data ? state.user.data.companyDetails.qrCode : ''
        }, {
            keepErrors: true, 
            keepDirty: true,
            keepIsSubmitted: false,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: false,
        });
    }, [JSON.stringify(state.user)])

    // User Profile
    const [editProfile, setEditProfile] = useState(false);
    const { register, watch, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });
    watch();

    const onSubmit = (data) => {
        setEditProfile(false);
        console.log(data);
        var body = {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "phoneNumber": data.phoneNumber
        }
        dispatch(updateUser("/users/updateUser", body))
    }
    
    const handleCancleProfile = () => {
        reset({
            firstName: state.user.data.firstName,
            lastName: state.user.data.lastName,
            email: state.user.data.email,
            phoneNumber: state.user.data.phoneNumber
        }, {});
        setEditProfile(false);
    }

    // Password
    const [editPassword, setEditPassword] = useState(false);
    const [showPasswordFailMessage, setShowPasswordFailMessage] = useState(true);
    const { register: registerPassword, watch: watchPassword, handleSubmit: handleSubmitPassword, formState: { errors: errorsPassword }, reset: resetPassword } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });
    watchPassword();
    let validatePassword = watchPassword('newPassword');

    const onSubmitPassword = (data) => {
        setShowPasswordFailMessage(true);
        var body = {
            "oldPassword": data.oldPassword,
            "newPassword": data.newPassword,
            "password": data.password,
            _id: state.user.data._id
        }
        dispatch(updatePassword("/users/changePassword", body))
        if(state.apiSuccess) {
            setShowPasswordFailMessage(false);
            setEditPassword(false);
            resetPassword({
                oldPassword: '',
                newPassword: '',
                password: ''
            }, {});
        }
    }
    
    const handleCanclePassword = () => {
        setShowPasswordFailMessage(false);
        resetPassword({
            oldPassword: '',
            newPassword: '',
            password: ''
        }, {});
        setEditPassword(false);
    }

    // Company
    const [editCompany, setEditCompany] = useState(false);
    const { register: registerCompany, watch: watchCompany, handleSubmit: handleSubmitCompany, formState: { errors: errorsCompany }, reset: resetCompany } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });
    watchCompany();

    const onSubmitCompany = (data) => {
        setEditCompany(false);
        var bodyCompany = {
            companyName: data.companyName,
            entityID: data.entityID,
            companyAddress: data.companyAddress,
            decimalSize: data.decimalSize,
            qrHeading: data.qrHeading,
            eSign: data.eSign,
            qrCode: data.qrCode
        }
        var bodyUser = {
            taxNumber: data.taxNumber,
            currencyType: data.currencyType
        }
        dispatch(updateCompany("/users/updateCompanyDetails", bodyCompany))
        dispatch(updateUser("/users/updateUser", bodyUser))
    }

    const handleCancleCompany = () => {
        resetCompany({
            companyName: state.user.data ? state.user.data.companyDetails.companyName : '',
            entityID: state.user.data ? state.user.data.companyDetails.entityID : '',
            companyAddress: state.user.data ? state.user.data.companyDetails.companyAddress : '',
            taxNumber: state.user.data ? state.user.data.taxNumber : '',
            currencyType: state.user.data ? state.user.data.currencyType : '',
            decimalSize: state.user.data ? state.user.data.companyDetails.decimalSize : null,
            qrHeading: state.user.data ? state.user.data.companyDetails.qrHeading : null,
            eSign: state.user.data ? state.user.data.companyDetails.eSign : '',
            qrCode: state.user.data ? state.user.data.companyDetails.qrCode : ''
        }, {});
        setEditCompany(false);
    }

    // Paypal Info
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const handlePaypalInfo = () => {
        setOpenInfoModal(true);
    }

    const closeInfoModal = () => {
        setOpenInfoModal(false);
    }


    return (
        <Container fluid className="profile">
            <div className="profile-box box">
                {Object.keys(state.user).length !== 0 && 
                    <>
                        <Row className="white-box mt-0">
                            <h5>Profile Picture</h5>

                            <div className="avatar">
                                <img src={state.user.data.profileImageName === null ? Avatar : state.user.data.profileImageName} alt="Profile avatar" className="profile-avatar" />
                                <input type="file" accept="image/*" hidden id="profile-picture" onChange={handleImageChange} />
                                <div>
                                    {state.user.data.profileImageName === null
                                        ? <Label for="profile-picture" className="blue-button m-3">Add Image</Label>
                                        : <>
                                            <Label for="profile-picture" className="blue-button">Change</Label>
                                            <Button className="white-button" id="profile-picture-remove" onClick={handleImageRemove} >Remove</Button>
                                        </>
                                    }
                                </div>
                            </div>

                            <div className="flex-class">
                                <h5>Personal Information</h5>
                                <div className="edit-btn">
                                    {!editProfile 
                                        ? <Button className="blue-button" onClick={() => {setEditProfile(true)}}>Edit</Button>
                                        : <>
                                            <Button className="white-button" onClick={handleCancleProfile}>Cancel</Button>
                                            <Button className="blue-button" onClick={handleSubmit(onSubmit)}>Save</Button>
                                        </>
                                    }
                                </div>
                            </div>

                            <Col xs={12} md={8}>
                                <form>
                                    <div className="profile-input">
                                        <div>
                                            <Label>First Name</Label>
                                            <input type="text" disabled={!editProfile} {...register("firstName", {required: "First Name is required", minLength: {value: 3, message: "Enter minimum 3 characters"} })} />
                                            {errors.firstName && <span className="error-text">{errors.firstName.message}</span>}    
                                        </div>
                                        <div>
                                            <Label>Last Name</Label>
                                            <input type="text" disabled={!editProfile} {...register("lastName", {required: "Last Name is required", minLength: {value: 3, message: "Enter minimum 3 characters"} })} />
                                            {errors.lastName && <span className="error-text">{errors.lastName.message}</span>}
                                        </div>
                                    </div>
                                
                                    <div className="profile-input">
                                        <div>
                                            <Label>Email Address</Label>
                                            <input type="email" disabled value={state.user.data.email} />
                                        </div>
                                        <div>
                                            <Label>Contact Number</Label>
                                            <input type="tel" disabled={!editProfile}  {...register("phoneNumber", {required: "Mobile number is required", pattern: {value: /^\d+$/, message: "Mobile number should only contain digits"}, maxLength: {value: 10, message: "Mobile number should be of 10 digits"}, minLength: {value: 10, message: "Mobile number should be of 10 digits"} })} />
                                            {errors.phoneNumber && <span className="error-text">{errors.phoneNumber.message}</span>}
                                        </div>
                                    </div>
                                </form>

                                <div className="password d-flex flex-row">
                                    <h5>Password Settings</h5>
                                    <div>
                                        {!editPassword 
                                            ?<Button className="blue-button" onClick={() => setEditPassword(true)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={10} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                                            </Button>
                                            : <>
                                                <Button className="blue-button" onClick={handleSubmitPassword(onSubmitPassword)} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                </Button>
                                                <Button className="white-button" onClick={handleCanclePassword}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                                </Button>
                                            </>
                                        }
                                    </div>
                                </div>

                                {showPasswordFailMessage && <span className="error-text">{state.passwordFailMessage}</span> }

                                {editPassword && 
                                    <form>
                                        <div className="password profile-input">
                                            <div>
                                                <Label>Current Password</Label>
                                                <input type="password" {...registerPassword("oldPassword", {required: "Password is required", minLength: {value: 8, message: "Password should be of minimum 8 characters"} })} />
                                                {errorsPassword.oldPassword && <span className="error-text">{errorsPassword.oldPassword.message}</span>}
                                            </div>
                                            <div>
                                                <Label>New Password</Label>
                                                <input type="password" {...registerPassword("newPassword", {required: "Password is required", minLength: {value: 8, message: "Password should be of minimum 8 characters"} })} />
                                                {errorsPassword.newPassword && <span className="error-text">{errorsPassword.newPassword.message}</span>}
                                            </div>
                                            <div>
                                                <Label>Confirm Password</Label>
                                                <input type="password" {...registerPassword("password", {required: "Password is required", validate: (value) => value === validatePassword || "Password does not match"} )} />
                                                {errorsPassword.password && <span className="error-text">{errorsPassword.password.message}</span>}
                                            </div>
                                        </div>
                                    </form>
                                }
                            </Col>
                        </Row>
                    
                        <Row className="white-box mt-0">
                            <h5>Company Logo</h5>

                            <div className="avatar">
                                <img src={state.user.data.companyDetails.companyLogo === null ? Avatar : state.user.data.companyDetails.companyLogo} alt="Company Logo" className="profile-avatar" />
                                <input type="file" accept='image/*' hidden id="company-logo" onChange={handleImageChange} />
                                <div>
                                    {state.user.data.companyDetails.companyLogo == null 
                                        ? <Label for="company-logo" className="blue-button m-3">Add Image</Label>
                                        : <>
                                            <Label for="company-logo" className="blue-button">Change</Label>
                                            <Button className="white-button" id="company-logo-remove" onClick={handleImageRemove}>Remove</Button>
                                        </>
                                    }
                                </div>
                            </div>

                            <div className="flex-class">
                                <h5>Company Settings</h5>
                                <div className="edit-btn">
                                    {!editCompany 
                                        ? <Button className="blue-button" onClick={() => {setEditCompany(true)}}>Edit</Button>
                                        : <>
                                            <Button className="white-button" onClick={handleCancleCompany}>Cancel</Button>
                                            <Button className="blue-button" onClick={handleSubmitCompany(onSubmitCompany)}>Save</Button>
                                        </>
                                    }
                                </div>
                            </div>

                            <Col xs={12} md={8} lg={6} className="company-input">
                                <form>
                                    <div>
                                        <Label>Company Name</Label>
                                        <input disabled={!editCompany} type="text" {...registerCompany("companyName", {required: "Company Name is required", minLength: {value: 3, message: "Enter minimum 3 characters"} })} />
                                        {errorsCompany.companyName && <span className="error-text">{errorsCompany.companyName.message}</span>}
                                    </div>
                                    <div>
                                        <Label>Entity ID</Label>
                                        <input disabled={!editCompany} type="text" {...registerCompany("entityID")} />
                                    </div>
                                    <div>
                                        <Label>Company Address</Label>
                                        <input disabled={!editCompany} type="textarea" rows={4} {...registerCompany("companyAddress", {required: "Company Address is required", minLength: {value: 3, message: "Enter minimum 3 characters"} })} />
                                        {errorsCompany.companyAddress && <span className="error-text">{errorsCompany.companyAddress.message}</span>}
                                    </div>
                                    <div className="profile-input">
                                        <div>
                                            <Label>Tax Number</Label>
                                            <input disabled={!editCompany} type="text" {...registerCompany("taxNumber")} />
                                        </div>
                                        <div className="search-select">
                                            <Label>Currency Selection</Label>
                                            <Select disabled={!editCompany} options={options} placeholder="Select Value" {...registerCompany("currencyType")} />
                                        </div>
                                    </div>
                                    <p>Decimal Settings</p>
                                    <div className="decimal d-flex">
                                        <div>
                                            <Input disabled={!editCompany} type="radio" id="2d" name="decimal" value="2d" {...registerCompany("decimalSize")} />
                                            <Label for="2d">2 Decimals</Label>
                                        </div>
                                        <div>
                                            <Input disabled={!editCompany} type="radio" id="3d" name="decimal" value="3d" {...registerCompany("decimalSize")} />
                                            <Label for="3d">3 Decimals</Label>
                                        </div>
                                    </div>

                                    <h5>QR Code Settings</h5>
                                    <div>
                                        <Label>Heading</Label>
                                        <input disabled={!editCompany} type="text" {...registerCompany("qrHeading")} />
                                    </div>
                                
                                    <div>
                                        <p>Image</p>
                                    </div>
                                    <div className="avatar">
                                        <div className="qr">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-20 w-20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                                        </div>
                                    
                                        <input type="file" hidden id="qrCode" disabled={!editCompany} {...registerCompany("qrCode")} />
                                        <div>
                                            {/* <Label for="qrCode" className="blue-button m-3">Add Image</Label> */}
                                            <Label for="qrCode" className="blue-button">Change</Label>
                                            <Button className="white-button">Remove</Button>
                                        </div>
                                    </div>

                                    <h5>E-Sign Settings</h5>
                                    <div className="avatar">
                                        <div className="e-sign">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-20 w-20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                    
                                        <input type="file" hidden id="eSign" disabled={!editCompany} {...registerCompany("eSign")} />
                                        <div>
                                            {/* <Label for="eSign" className="blue-button m-3">Add Image</Label> */}
                                            <Label for="eSign" className="blue-button">Change</Label>
                                            <Button className="white-button">Remove</Button>
                                        </div>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </>
                }

                <Row className="white-box mb-0">
                    <div className="info">
                        <h5>PayPal Payment Settings</h5>  
                        <a id="paypalInfo" onClick={handlePaypalInfo}>How to?</a>
                    </div>
                    <p>This is a Pro feature. Upgrade your account to configure these settings</p>
                </Row>
            </div>

            {openModal && <ModalCustom openModal={openModal} modalClosed={modalClosed} src={modalSrc} id={modalId} btnValue2="Preview" />}

            {openInfoModal && <InfoModal openInfoModal={openInfoModal} closeInfoModal={closeInfoModal} title="Paypal setup instructions"  btnValue2="Close" />}
        </Container>
    );
}

export default Profile;