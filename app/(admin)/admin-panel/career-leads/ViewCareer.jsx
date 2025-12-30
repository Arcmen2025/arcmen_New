
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { FaFileDownload, FaPrint } from 'react-icons/fa';

const ViewCareer = ({ data }) => {
    const [showResumeModal, setShowResumeModal] = useState(false);
    const [showPortfolioModal, setShowPortfolioModal] = useState(false);

    const handleResumeDownload = () => {
        const file=data?.resume;
        if (data?.resume) {
            // Check if file is served over HTTPS
            if (file.startsWith("http://")) {
              alert("Insecure URL detected, file download might be blocked!");
            }
      
            const link = document.createElement("a");
            link.href = file; // Assuming the file is a URL
      
            // Extract filename from URL if it's a string
            const fileName = file.split("/").pop() || "download";
            link.download = fileName;
      
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
    };

    const handlePortfolioDownload = () => {
        const file=data?.portfolioFile;
        if (file) {
            // Check if file is served over HTTPS
            if (file.startsWith("http://")) {
              alert("Insecure URL detected, file download might be blocked!");
            }
      
            const link = document.createElement("a");
            link.href = file; // Assuming the file is a URL
      
            // Extract filename from URL if it's a string
            const fileName = file.split("/").pop() || "download";
            link.download = fileName;
      
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }

    };

    const handleResumePrint = () => {
        
        if (data.resume) {
            const printWindow = window.print(data.resume, '_blank');
            printWindow()
        }
    };

    const handlePortfolioPrint = () => {
        if (data.portfolioFile) {
            const printWindow = window.open(data.portfolioFile, '_blank');
            printWindow.onload = () => {
                printWindow.print();
            };
        }
    };

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
                                <Form.Control type="text" disabled value={data?.mobile} />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formJobPosition">
                                <Form.Label>Job Position</Form.Label>
                                <Form.Control type="text" disabled value={data?.jobPosition} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formGender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control type="text" disabled value={data?.gender} />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formDOB">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="text" disabled value={data?.dob} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formMaritalStatus">
                                <Form.Label>Marital Status</Form.Label>
                                <Form.Control type="text" disabled value={data?.maritalStatus} />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" disabled value={data?.address} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" disabled value={data?.state} />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" disabled value={data?.city} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formZipCode">
                                <Form.Label>ZIP / Postal Code</Form.Label>
                                <Form.Control type="text" disabled value={data?.zipCode} />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formCreatedAt">
                                <Form.Label>Created At</Form.Label>
                                <Form.Control type="text" disabled value={data?.createdAt} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formResume">
                                <Form.Label>Resume</Form.Label>
                                <Form.Control type="file" disabled />
                                {data?.resume && (
                                    <Button variant="primary" onClick={() => setShowResumeModal(true)}>
                                        View Resume
                                    </Button>
                                )}
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formPortfolioType">
                                <Form.Label>Portfolio Type</Form.Label>
                                <Form.Control type="text" disabled value={data?.portfolioType} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formPortfolioLink">
                                <Form.Label>Portfolio Link</Form.Label>
                                <Form.Control type="text" disabled value={data?.portfolioLink} />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Form.Group controlId="formPortfolioFile">
                                <Form.Label>Portfolio File</Form.Label>
                                <Form.Control type="file" disabled={!data?.portfolioFile} />
                                {data?.portfolioFile && (
                                    <Button variant="primary" onClick={() => setShowPortfolioModal(true)}>
                                        View Portfolio
                                    </Button>
                                )}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-2">
                            <Form.Group controlId="formMessage">
                                <Form.Label>Messages</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    style={{ width: '100%', resize: 'vertical' }}
                                    disabled
                                    value={data?.message}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>

            <Modal show={showResumeModal} onHide={() => setShowResumeModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>View Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data?.resume && (
                        <div>
                            <embed src={data?.resume} type="html" width="100%" height="600px" />
                            <div className="d-flex justify-content-between mt-2">
                                <Button variant="primary" onClick={handleResumeDownload}>
                                    <FaFileDownload /> Download
                                </Button>
                                <Button variant="secondary" onClick={handleResumePrint}>
                                {/* <Button variant="secondary" onClick={"printJS({ printable: 'printJS-page', type: 'html', header: 'Print Terms & Conditions' })"}> */}
                                    <FaPrint /> Print
                                </Button>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>

            <Modal show={showPortfolioModal} onHide={() => setShowPortfolioModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>View Portfolio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data?.portfolioFile && (
                        <div>
                            <embed src={data?.portfolioFile} width="100%" height="600px" />
                            <div className="d-flex justify-content-between mt-2">
                                <Button variant="primary" onClick={handlePortfolioDownload}>
                                    <FaFileDownload /> Download
                                </Button>
                                <Button variant="secondary" onClick={handlePortfolioPrint}>
                                    <FaPrint /> Print
                                </Button>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ViewCareer;
