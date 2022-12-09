import React, {useState} from 'react';
//import { v4 as uuid } from 'uuid';
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import {RegisterUser} from '../helpers/api';

const RegistrationForm = ({setData}) => {
    const initialState = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        isAdmin: false
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    function setDataForParent(e) {
        e.preventDefault();
        console.log(e);
        setData(formData);
        RegisterUser(formData);
    }

    return (
        <Form onSubmit={setDataForParent}>
            <Row className="row-cols-lg-auto g-3 align-items-center">
                <Col sm={{
                    offset: 2,
                    size: 5
                }}
                >
                    <FormGroup>
                        <Label
                            //className="visually-hidden"
                            for="username">
                            Username
                        </Label>
                        <Input
                            id="username"
                            name="username"
                            placeholder="username"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
                <Col sm={5}>
                    <FormGroup>
                        <Label
                            //className="visually-hidden"
                            for="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="row-cols-lg-auto g-3 align-items-center">
                <Col sm={{
                    offset: 2,
                    size: 5
                }}
                >
                    <FormGroup>
                        <Label
                            //className="visually-hidden"
                            for="firstName">
                            First Name
                        </Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
                <Col sm={5}>
                    <FormGroup>
                        <Label
                            //className="visually-hidden"
                            for="lastName">
                            Last Name
                        </Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="row-cols-lg-auto g-3 align-items-center">
                <Col sm={{
                    offset: 2,
                    size: 5
                }}
                >
                    <FormGroup>
                        <Label
                            //className="visually-hidden"
                            for="email">
                            Email Address
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            type="email"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
                <Col sm={5}>
                    <Button sm={{
                        offset: 0,
                        size: 5
                    }}>
                        Sign Up
                    </Button>
                </Col>
                
            </Row>
            
           
        </Form>
    )
}

export default RegistrationForm;