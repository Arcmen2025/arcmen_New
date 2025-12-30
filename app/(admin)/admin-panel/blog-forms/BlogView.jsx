// import React from 'react';
// import { Form, Container, Row, Col, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const BlogView = ({ data }) => {
//     return (
//         <Container className="my-4">
//             <Form>
//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="blogHeading">
//                             <Form.Label>Blog Heading</Form.Label>
//                             <Form.Control type="text" placeholder="Enter the blog Heading" defaultValue={data?.title} readOnly />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="blogDate">
//                             <Form.Label>Blog Date</Form.Label>
//                             {/* <Form.Control type="text" placeholder="Enter the blog date" defaultValue={data?.createdAt} readOnly /> */}
//                             <Form.Control type="text" placeholder="Enter the blog date" defaultValue={new Date(data?.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })} readOnly />
//                         </Form.Group>
//                     </Col>
//                 </Row>

//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="blogSubTtitle">
//                             <Form.Label>Blog Sub content</Form.Label>
//                             <Form.Control as="textarea" placeholder="Type the blog sub title content" cols={12} rows={10} defaultValue={data?.subtitleContent} readOnly />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="blogTitleImage">
//                             <Form.Label>Upload the Title image</Form.Label>
//                             <Form.Control type="file" disabled />
//                             {data?.titleImage && <img src={data?.titleImage} alt="Title Preview" style={{ marginTop: '10px', width: '200px', height: '200px', objectFit: 'contain' }} />}
//                         </Form.Group>
//                     </Col>
//                 </Row>

//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="blogAuthor">
//                             <Form.Label>Author</Form.Label>
//                             <Form.Control type="text" placeholder="Enter the author" defaultValue={data?.author} readOnly />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="blogPostCategory">
//                             <Form.Label>Blog Post Category</Form.Label>
//                             <Form.Control as="select" defaultValue={data?.category} disabled>
//                                 <option value="">{data?.category}</option>
//                                 {/* Add category options here */}
//                             </Form.Control>
//                         </Form.Group>
//                     </Col>
//                 </Row>

//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="blogUrl">
//                             <Form.Label>Blog URL</Form.Label>
//                             <Form.Control type="text" placeholder="Enter the blog URL and it should be unique" defaultValue={data?.blogUrl} readOnly />
//                         </Form.Group>
//                     </Col>
//                 </Row>


//                 {data?.contentSections?.length > 0 && (
//                     <div className="table-responsive mt-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
//                         <Table striped bordered hover>
//                             <thead>
//                                 <tr>
//                                     <th>Blog Content Title</th>
//                                     <th>Blog Content</th>
//                                     <th>Blog Image</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data?.contentSections?.map((datas, index) => (
//                                     <tr key={index}>
//                                         <td>{datas.blogTitle}</td>
//                                         <td><div dangerouslySetInnerHTML={{ __html: datas.content }}>{datas.content}</div></td>
//                                         <td>
//                                             <img src={datas.blogImage} alt="blog image" style={{ width: '100px' }} />
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </Table>
//                     </div>
//                 )}
//             </Form>
//         </Container>
//     );
// };

// export default BlogView;



// ==============================================================================
// ==============================================================================
// ==============================================================================

import React from 'react';
import { Form, Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogView = ({ data }) => {
    return (
        <Container className="my-4">
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blogHeading">
                            <Form.Label>Blog Heading</Form.Label>
                            <Form.Control type="text" placeholder="Enter the blog Heading" defaultValue={data?.title} readOnly />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="blogDate">
                            <Form.Label>Blog Date</Form.Label>
                            <Form.Control type="text" placeholder="Enter the blog date" defaultValue={new Date(data?.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })} readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blogSubTtitle">
                            <Form.Label>Blog Sub content</Form.Label>
                            <Form.Control as="textarea" placeholder="Type the blog sub title content" cols={12} rows={10} defaultValue={data?.subtitleContent} readOnly />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="blogTitleImage">
                            <Form.Label>Upload the Title image</Form.Label>
                            <Form.Control type="file" disabled />
                            {data?.titleImage && <img src={data?.titleImage} alt="Title Preview" style={{ marginTop: '10px', width: '200px', height: '200px', objectFit: 'contain' }} />}
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blogAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Enter the author" defaultValue={data?.author} readOnly />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="blogPostCategory">
                            <Form.Label>Blog Post Category</Form.Label>
                            <Form.Control as="select" defaultValue={data?.category} disabled>
                                <option value="">{data?.category}</option>
                                {/* Add category options here */}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blogUrl">
                            <Form.Label>Blog URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter the blog URL and it should be unique" defaultValue={data?.blogUrl} readOnly />
                        </Form.Group>
                    </Col>
                </Row>

                {data?.contentSections?.length > 0 && (
                    <div className="table-responsive mt-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Blog Content Title</th>
                                    <th>Blog Content</th>
                                    <th>Blog Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.contentSections?.map((datas, index) => (
                                    <tr key={index}>
                                        <td>{datas.blogTitle}</td>
                                        <td>
                                            <div dangerouslySetInnerHTML={{ __html: datas.content }}></div>
                                        </td>
                                        <td>
                                            <img src={datas.blogImage} alt="blog image" style={{ width: '100px' }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                )}
            </Form>
        </Container>
    );
};

export default BlogView;
