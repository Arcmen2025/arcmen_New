import { updateAds } from '@/api/AdsPostingAPI';
import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditAds = ({ id, data, handleClose }) => {
    const [posterTitle, setPosterTitle] = useState(data.title);
    const [posterDescription, setPosterDescription] = useState(data.subtitleContent);
    const [posterImagePreview, setPosterImagePreview] = useState(data.posterImage);

    const posterImageRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', posterTitle);
        formData.append('subtitleContent', posterDescription);

        // Only append the image if a new one is selected
        if (posterImageRef.current.files[0]) {
            formData.append('posterImage', posterImageRef.current.files[0]);
        }

        try {
            const result = await updateAds(formData, data._id);
            if (result) {
                Swal.fire({
                    icon: 'success',
                    title: 'Poster Successfully Updated',
                    showConfirmButton: true,
                    timer: 32000,
                    text: 'The Poster has been successfully updated.'
                });
                handleClose();
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Sorry, please try again',
                showConfirmButton: true,
                timer: 32000,
                text: 'Poster changes could not be updated, please try again.'
            });
            console.log(error);
        }
    };

    const handlePosterImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPosterImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <Container className="my-4">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="posterTitle">
                            <Form.Label>Poster Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter the poster title" value={posterTitle} onChange={(e) => setPosterTitle(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="posterDescription">
                            <Form.Label>Poster Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Type the poster description" value={posterDescription} onChange={(e) => setPosterDescription(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="posterImage">
                            <Form.Label>Upload the Poster image</Form.Label>
                            <Form.Control type="file" ref={posterImageRef} onChange={handlePosterImageChange} />
                            {posterImagePreview && <img src={posterImagePreview} alt="Poster Preview" style={{ marginTop: '10px', maxWidth: '100%', height: '250px', objectFit: 'contain' }} />}
                            
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-flex justify-content-center">
                    <div>
                        <Button variant="success" type="submit" className="m-2">
                            Save
                        </Button>
                        <Button variant="danger" className="m-2" onClick={handleClose}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Form>
        </Container>
    );
};

export default EditAds;
