import React from 'react';
import { Form, Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdsView = ({ data }) => {
    return (
        <Container className="my-4">
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="posterHeading">
                            <Form.Label>Poster Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter the blog Heading" defaultValue={data?.title} readOnly />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="blogDate">
                            <Form.Label>Poster Date</Form.Label>
                            <Form.Control type="text" placeholder="Enter the blog date" defaultValue={new Date(data?.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })} readOnly />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="posterDescription">
                            <Form.Label>Poster description</Form.Label>
                            <Form.Control as="textarea" placeholder="Type the poster description" defaultValue={data?.subtitleContent} readOnly />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="posterImage">
                            <Form.Label>Upload the poster image</Form.Label>
                            <Form.Control type="file" disabled />
                            {data?.posterImage && <img src={data?.posterImage} alt="image Preview" style={{ marginTop: '10px', maxWidth: '100%', height: '250px', objectFit: 'contain' }} />}
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default AdsView;
