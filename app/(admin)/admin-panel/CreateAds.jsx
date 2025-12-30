import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createAds, getAllAds } from '@/api/AdsPostingAPI';

const CreateAds = ({ handleClose, setAdsDatas }) => {
    const [posterTitle, setPosterTitle] = useState('');
    const [description, setDescription] = useState('');
    const [postImagePreview, setPosterImagePreview] = useState(null);

    const posterImageRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', posterTitle);
        formData.append('posterImage', posterImageRef.current.files[0]);
        formData.append('subtitleContent', description);

        try {
            const result = await createAds(formData);
            if (result?.data) {
                // console.log(result,"result datas--------->")
                Swal.fire({
                    icon: 'success',
                    title: 'Post Successfully Created',
                    showConfirmButton: true,
                    timer: 32000,
                    text: 'The post has been successfully created.'
                });
                const result2 = await getAllAds();
                if (result2?.data) {
                    
                    setAdsDatas(result2?.data?.posters);
                    handleClose();
                }
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Form not submitted, please try again',
                showConfirmButton: true,
                timer: 32000,
                text: 'Form not submitted, please try again.'
            });
            console.log(error);
        }
    };

    const handleAddTheContent = () => {
        if (!blogContentTitle || !blogContentSection || !blogImageRef.current.files[0]) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Blog Content Title, Blog Content, and Blog Image fields should not be empty.',
                showConfirmButton: true
            });
            return;
        }

        const newContent = {
            blog_content_title: blogContentTitle,
            blog_content: blogContentSection,
            blog_image: blogImageRef.current.files[0]
        };
        setBlogContents([...blogContent, newContent]);
        setBlogContentTitle('');
        setBlogContentSection('');
        blogImageRef.current.value = '';
    };

    const handleDeleteContent = (index) => {
        const newContent = [...blogContent];
        newContent.splice(index, 1);
        setBlogContents(newContent);
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
                <Row className="mb-3 mt-3">
                    <Col>
                        <Form.Group controlId="posterTitle">
                            <Form.Label>Poster Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter the poster title" value={posterTitle} onChange={(e) => setPosterTitle(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="description">
                            <Form.Label>Poster Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Type the poster description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="posterImage">
                            <Form.Label>Upload the poster image</Form.Label>
                            <Form.Control type="file" ref={posterImageRef} onChange={handlePosterImageChange} />
                            {postImagePreview && <img src={postImagePreview} alt="poster image Preview" style={{ marginTop: '10px', maxWidth: '400px' }} />}
                            {!postImagePreview && (
                                    <div style={{ textAlign: 'center', color: '#ccc' }}>
                                        <p>Click to upload image</p>
                                        <p>Size: 1667 x 1917 px</p>
                                    </div>
                                )}
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

export default CreateAds;
