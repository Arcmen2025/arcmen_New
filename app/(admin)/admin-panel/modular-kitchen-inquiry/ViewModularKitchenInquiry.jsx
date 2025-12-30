import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const ViewModularKitchenInquiry = ({ data }) => {
    return (
        <>
            <Form>
                <Container>
                    <Row>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" disabled value={data?.name} />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" disabled value={data?.email} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formMobileNumber">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" disabled value={data?.phone} />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formProjectLocation">
                                <Form.Label>Project Location</Form.Label>
                                <Form.Control type="text" disabled value={data?.projectLocation} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formProjectBudget">
                                <Form.Label>Budget</Form.Label>
                                <Form.Control type="text" disabled value={data?.budget} />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formCreatedAt">
                                <Form.Label>CreatedAt</Form.Label>
                                <Form.Control type="text" disabled value={data?.createdAt} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-2">
                            <Form.Group controlId="formModifiedAt">
                                <Form.Label>Last Modified</Form.Label>
                                <Form.Control type="text" disabled value={data?.updatedAt} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-2">
                            <Form.Group controlId="formMessage">
                                <Form.Label>Messages</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5} // Set the number of visible text lines
                                    style={{ width: '100%', resize: 'vertical' }}
                                    disabled
                                    value={data?.message}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    );
};

export default ViewModularKitchenInquiry;
