import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const ContactusSComponent = ({ data }) => {
    console.log(data);

    return (
        <>
            <Form>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" disabled value={data?.name} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" disabled value={data?.email} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formMobileNumber">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" disabled value={data?.mobileNumber} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formProjectLocation">
                                <Form.Label>Project Location</Form.Label>
                                <Form.Control type="text" disabled value={data?.projectLocation} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formService">
                                <Form.Label>Service</Form.Label>
                                <Form.Control type="text" disabled value={data?.service} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="text" disabled value={data?.date} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formMessages">
                                <Form.Label>Messages</Form.Label>
                                <Form.Control as="textarea"  rows={5} // Set the number of visible text lines
                                    style={{ width: '100%', resize: 'vertical' }}  disabled value={data?.Messages} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    );
};

export default ContactusSComponent;
