import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Text, TextArea, Select } from 'react-form';
import { bindActionCreators } from 'redux';
import { AddNewClient } from '../../actions';
import axios from 'axios';
class ClientForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FormValue: '',
            projectMembers: ''
        };
    }


    componentDidMount() {
    }

    componentWillMount() {
        // axios.get("http://10.113.34.156:4000/route/getEmployees/")
        //     .then(res => {
        //         for (let i = 0; i < res.data.employees.length; i++) {
        //             let EmpVal = {
        //                 label: res.data.employees[i].name,
        //                 value: res.data.employees[i]._id
        //             }
        //             this.state.projectMembers = [...this.state.projectMembers, EmpVal]
        //         }
        //     })
    }

    SubmitForm(val) {
        this.props.AddNewClient(val);
    }


    render() {
        return (
            <div className="contactformpage">
                <Form onSubmit={val => this.SubmitForm(val)}>
                    {formApi => (
                        <div>
                            <form onSubmit={formApi.submitForm} id="dynamic-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="addressformTitle">  Personal Info  </h4>

                                        <ul className="clientaddForm">
                                            <li>
                                                <label htmlFor="pan">PAN Number</label>
                                                <Text field="pan" className="formField" id="pan" />
                                            </li>
                                            <li>
                                                <label htmlFor="aadhar">Aadhar Number</label>
                                                <Text field="aadhar" className="formField" id="aadhar" />
                                            </li>
                                            <li>
                                                <label htmlFor="clientname">Client Name</label>
                                                <Text field="clientname" className="formField" id="clientname" />
                                            </li>
                                            <li>
                                                <label htmlFor="title">Title</label>
                                                <Text field="title" className="formField" id="title" />
                                            </li>
                                            <li>
                                                <label htmlFor="title">Company</label>
                                                <Text field="company" className="formField" id="company" />
                                            </li>
                                            <li>
                                                <label htmlFor="description">Description</label>
                                                <TextArea className="formField" field="description" />
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="addressformTitle"> Contact Info </h4>
                                        <ul className="clientaddForm">
                                            <li>
                                                <label htmlFor="email">Email Address</label>
                                                <Text field="email" className="formField" id="email" />
                                            </li>
                                            <li>
                                                <label htmlFor="mobile">Contact Number</label>
                                                <Text field="mobile" className="formField" id="mobile" />
                                            </li>
                                            <li>
                                                <label htmlFor="skypeid">Skype Id</label>
                                                <Text field="skypeid" className="formField" id="skypeid" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="addressformTitle">  Shipping Address  </h4>

                                        <ul className="clientaddForm">
                                            <li>
                                                <label htmlFor="shippingaddress1">Address line1</label>
                                                <Text field="shippingaddress1" className="formField" id="shippingaddress1" />
                                            </li>
                                            <li>
                                                <label htmlFor="shippingaddress2">Address line2</label>
                                                <Text field="shippingaddress2" className="formField" id="shippingaddress2" />
                                            </li>
                                            <li>
                                                <label htmlFor="shippingcity">city</label>
                                                <Text field="shippingcity" className="formField" id="shippingcity" />
                                            </li>
                                            <li>
                                                <label htmlFor="shippingstate">state</label>
                                                <Text field="shippingstate" className="formField" id="shippingstate" />
                                            </li>
                                            <li>
                                                <label htmlFor="shippingcountry">Country</label>
                                                <Text field="shippingcountry" className="formField" id="shippingcountry" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="addressformTitle">
                                            Billing Address
                                </h4>

                                        <ul className="clientaddForm">
                                            <li>
                                                <label htmlFor="billingaddress1">Address line1</label>
                                                <Text field="billingaddress1" className="formField" id="billingaddress1" />
                                            </li>
                                            <li>
                                                <label htmlFor="billingaddress2">Address line2</label>
                                                <Text field="billingaddress2" className="formField" id="billingaddress2" />
                                            </li>
                                            <li>
                                                <label htmlFor="billingcity">city</label>
                                                <Text field="billingcity" className="formField" id="billingcity" />
                                            </li>
                                            <li>
                                                <label htmlFor="billingstate">state</label>
                                                <Text field="billingstate" className="formField" id="billingstate" />
                                            </li>
                                            <li>
                                                <label htmlFor="billingcountry">Country</label>
                                                <Text field="billingcountry" className="formField" id="billingcountry" />
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <h4 className="addressformTitle">
                                    Additional Info
                                </h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="clientaddForm">
                                            <li>
                                                <TextArea className="formField" field="additionalnotes" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <button type="submit" className="mb-4 btn btn-primary">Save</button>
                                <button type="button" className="mb-4 btn ">Cancel</button>
                            </form>
                        </div>
                    )}
                </Form>
            </div>



        );
    }

}

function mapStateToProps(state) {
    return {
        projects: state.projects
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AddNewClient: AddNewClient }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);