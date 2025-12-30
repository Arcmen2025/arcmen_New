import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const ViewQuickService = ({ data }) => {
    return (
        <>
            <Form>
                <Container>
                    <Row>
                        <Col md={6} className='mb-2'>
                            <Form.Group controlId="formName">
                                <Form.Label>Service</Form.Label>
                                <Form.Control type="text" disabled value={data?.serviceName} />
                            </Form.Group>
                        </Col>
                        <Col md={6} className='mb-2'>
                            <Form.Group controlId="formMobileNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" disabled value={data?.mobile} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className='mb-2'>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" disabled value={data?.email} />
                            </Form.Group>
                        </Col>
                        <Col md={6} className='mb-2'>
                            <Form.Group controlId="formCreatedAt">
                                <Form.Label>CreatedAt</Form.Label>
                                <Form.Control type="text" disabled value={data?.createdAt} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mb-2'>
                            <Form.Group controlId="formModifiedAt">
                                <Form.Label>Last Modified</Form.Label>
                                <Form.Control type="text" disabled value={data?.updatedAt} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    );
};

export default ViewQuickService;
