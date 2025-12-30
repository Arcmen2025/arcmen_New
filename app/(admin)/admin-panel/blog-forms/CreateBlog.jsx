// import { createBlog, getAllBlogs, updateBlog } from '@/api/BlogAPIs';
// import React, { useState, useRef, useEffect } from 'react';
// import Swal from 'sweetalert2';
// import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CreateBlog = ({ handleClose, id, data, isEditMode,setBlogDatas }) => {
//     const [blogHeading, setBlogHeading] = useState('');
//     const [blogSubContent, setBlogSubContent] = useState('');
//     const [blogContentTitle, setBlogContentTitle] = useState('');
//     const [blogContentSection, setBlogContentSection] = useState('');
//     const [blogPostCategory, setBlogPostCategory] = useState('');
//     const [blogAuthor, setBlogAuthor] = useState('');
//     const [blogURL, setBlogURL] = useState('');
//     const [blogContent, setBlogContents] = useState([]);

//     const [titleImagePreview, setTitleImagePreview] = useState(null);
//     const [blogImagePreview, setBlogImagePreview] = useState(null);
//     const [activeEdit, setActiveEdit] = useState(false);
//     const [editIndex, setEditIndex] = useState(null);

//     const blogTitleImageRef = useRef();
//     const blogImageRef = useRef();

//     useEffect(() => {
//         if (isEditMode && data) {
//             setBlogHeading(data.title);
//             setTitleImagePreview(data.titleImage);
//             setBlogSubContent(data.subtitleContent);
//             setBlogAuthor(data.author);
//             setBlogPostCategory(data.category);
//             setBlogURL(data.blogUrl);
//             setBlogContents(data.contentSections);
//         }
//     }, [isEditMode, data]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('title', blogHeading);
//         formData.append('subtitleContent', blogSubContent);
//         formData.append('category', blogPostCategory);
//         formData.append('author', blogAuthor);
//         formData.append('blogUrl', blogURL);

//         const blogContentsArray = [];
//         const blogImagesArray = [];

//         blogContent.forEach((content, index) => {
//             blogContentsArray.push({
//                 blogTitle: content.blog_content_title,
//                 content: content.blog_content
//             });
//             blogImagesArray.push(content.blog_image);
//         });

//         // Append the titleImage to the FormData
//         if (blogTitleImageRef.current.files[0]) {
//             formData.append('titleImage', blogTitleImageRef.current.files[0]);
//         }

//         formData.append('contentSections', JSON.stringify(blogContentsArray));

//         blogImagesArray.forEach((image, index) => {
//             formData.append(`blogImages`, image);
//         });

//         try {
//             const result = isEditMode ? await updateBlog(formData, id) : await createBlog(formData);
//             if (result?.data) {
//                 Swal.fire({
//                     icon: 'success',
//                     title: isEditMode ? 'Blog Successfully Updated' : 'Blog Successfully Created',
//                     showConfirmButton: true,
//                     timer: 32000,
//                     text: isEditMode ? 'The blog has been successfully updated.' : 'The blog has been successfully created.'
//                 });
//                 const response=await getAllBlogs();
//                 if(response?.data){
//                     setBlogDatas(response?.data?.blogs);
//                     handleClose();
//                 }
//             }

//         } catch (error) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Form not submitted, please try again',
//                 showConfirmButton: true,
//                 timer: 32000,
//                 text: 'Form not submitted, please try again.'
//             });
//             console.log(error);
//         }
//     };

//     const handleAddTheContent = () => {
//         if (!blogContentSection || !blogImageRef.current.files[0]) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Validation Error',
//                 text: 'Blog Content Title, Blog Content, and Blog Image fields should not be empty.',
//                 showConfirmButton: true
//             });
//             return;
//         }

//         const file = blogImageRef.current.files[0];
//         if (!file.type.startsWith('image/')) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Validation Error',
//                 text: 'Only image files are allowed.',
//                 showConfirmButton: true
//             });
//             return;
//         }

//         const newContent = {
//             blog_content_title: blogContentTitle,
//             blog_content: blogContentSection,
//             blog_image: file
//         };
//         setBlogContents([...blogContent, newContent]);
//         setBlogContentTitle('');
//         setBlogContentSection('');
//         blogImageRef.current.value = '';
//         setBlogImagePreview(null); // Clear the preview after adding the content
//     };

//     const handleDeleteContent = (index) => {
//         const newContent = [...blogContent];
//         newContent.splice(index, 1);
//         setBlogContents(newContent);
//     };

//     const handleTitleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//             setTitleImagePreview(URL.createObjectURL(file));
//         } else {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Validation Error',
//                 text: 'Only image files are allowed.',
//                 showConfirmButton: true
//             });
//             e.target.value = '';
//         }
//     };

//     const handleBlogImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//             setBlogImagePreview(URL.createObjectURL(file));
//         } else {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Validation Error',
//                 text: 'Only image files are allowed.',
//                 showConfirmButton: true
//             });
//             e.target.value = '';
//         }
//     };

//     const handleEdit = (datas, index) => {
//         setBlogContentTitle(datas?.blog_content_title);
//         setBlogContentSection(datas?.blog_content);
//         setBlogImagePreview(typeof datas?.blog_image === 'string' ? datas?.blog_image : URL.createObjectURL(datas?.blog_image));
//         setActiveEdit(true);
//         setEditIndex(index);
//     };

//     const handleUpdate = () => {
//         const newContent = {
//             blog_content_title: blogContentTitle,
//             blog_content: blogContentSection,
//             blog_image: blogImageRef.current.files[0] || blogImagePreview
//         };
//         setBlogContents((prevContent) =>
//             prevContent.map((content, index) => (index === editIndex ? newContent : content))
//         );
//         setBlogContentTitle('');
//         setBlogContentSection('');
//         setBlogImagePreview(null);
//         setActiveEdit(false);
//         setEditIndex(null);
//         blogImageRef.current.value = '';
//     };

//     const handleCancelEdit = () => {
//         setBlogContentTitle('');
//         setBlogContentSection('');
//         setBlogImagePreview(null);
//         setActiveEdit(false);
//         setEditIndex(null);
//         blogImageRef.current.value = '';
//     };

//     return (
//         <Container className="my-4">
//             <Form onSubmit={handleSubmit}>
//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="blogHeading">
//                             <Form.Label>Blog Heading</Form.Label>
//                             <Form.Control type="text" placeholder="Enter the blog Heading" value={blogHeading} onChange={(e) => setBlogHeading(e.target.value)} />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="blogAuthor">
//                             <Form.Label>Author</Form.Label>
//                             <Form.Control type="text" placeholder="Enter the author" value={blogAuthor} onChange={(e) => setBlogAuthor(e.target.value)} />
//                         </Form.Group>
//                     </Col>
//                 </Row>

//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="blogSubTtitle">
//                             <Form.Label>Blog Sub content</Form.Label>
//                             <Form.Control as="textarea" cols={12} rows={10} placeholder="Type the blog sub title content" value={blogSubContent} onChange={(e) => setBlogSubContent(e.target.value)} />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="blogTitleImage" >
//                             <Form.Label>Upload the Title image</Form.Label>
//                             <Form.Control type="file" ref={blogTitleImageRef}  onChange={handleTitleImageChange} accept="image/*" />
//                             {titleImagePreview && <img src={titleImagePreview} alt="Title Preview" style={{ marginTop: '10px', width: '200px', height: '200px', objectFit: 'contain' }} />}
//                             {/* {titleImagePreview && <img src={titleImagePreview} alt="Title Preview" style={{ marginTop: '10px', objectFit: 'contain' }} />} */}
//                                 {!titleImagePreview && (
//                                     <div style={{ textAlign: 'center', color: '#ccc' }}>
//                                         <p>Click to upload image</p>
//                                         <p>Size: 1088 x 736</p>
//                                     </div>
//                                 )}
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Row className='mb-3'>
//                     <Col>
//                         <Form.Group controlId="blog_url">
//                             <Form.Label>Blog URL</Form.Label>
//                             <Form.Control type="text" placeholder="Enter the blog URL and its should be an unique" value={blogURL} onChange={(e) => setBlogURL(e.target.value)} />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="blogPostCategory">
//                             <Form.Label>Blog Post Category</Form.Label>
//                             <Form.Control as="select" value={blogPostCategory} onChange={(e) => setBlogPostCategory(e.target.value)}>
//                                 <option value="">Select the post category</option>
//                                 <option value="Modular">Modular Kitchen</option>
//                                 <option value="Interior">Interior Design</option>
//                             </Form.Control>
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="blog_content_title">
//                             <Form.Label>Blog Content Title</Form.Label>
//                             <Form.Control type="text" placeholder="Enter the blog content title" value={blogContentTitle} onChange={(e) => setBlogContentTitle(e.target.value)} />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="blog_content">
//                             <Form.Label>Blog Content</Form.Label>
//                             <Form.Control  as="textarea" cols={12} rows={10} placeholder="Enter the blog content" value={blogContentSection} onChange={(e) => setBlogContentSection(e.target.value)} />
//                         </Form.Group>
//                     </Col>

//                     <Col>
//                         <Form.Group controlId="blog_image">
//                             <Form.Label>Upload Blog Image</Form.Label>
//                             <Form.Control type="file" ref={blogImageRef} onChange={handleBlogImageChange} accept="image/*" />
//                             {blogImagePreview && <img src={blogImagePreview} alt="Blog Image Preview" style={{ marginTop: '10px', width: '200px', height: '200px' }} />}
//                             {!blogImagePreview && (
//                                     <div style={{ textAlign: 'center', color: '#ccc' }}>
//                                         <p>Click to upload image</p>
//                                         <p>Size: 500 x 500</p>
//                                     </div>
//                                 )}
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 {activeEdit ? (
//                     <section className='d-flex justify-content-center'>
//                         <div>
//                             <Button variant="success" className='me-2' onClick={handleUpdate}>Update</Button>
//                             <Button variant='danger' className='me-2' onClick={handleCancelEdit}>Cancel</Button>
//                         </div>
//                     </section>
//                 ) : (
//                     <Button variant="primary" className="mt-3" onClick={handleAddTheContent}>
//                         Add Content
//                     </Button>
//                 )}
//                 {blogContent.length > 0 && (
//                     <div className="table-responsive mt-4" style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'auto' }}>
//                         <Table striped bordered hover>
//                             <thead>
//                                 <tr>
//                                     <th>Blog Content Title</th>
//                                     <th>Blog Content</th>
//                                     <th>Blog Image</th>
//                                     <th>Edit</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {blogContent.map((data, index) => (
//                                     <tr key={index}>
//                                         <td>{data.blog_content_title}</td>
//                                         <td>{data.blog_content}</td>
//                                         <td>
//                                             <img src={typeof data.blog_image === 'string' ? data.blog_image : URL.createObjectURL(data.blog_image)} alt="blog image" style={{ width: '100px', height: '100px' }} />
//                                         </td>
//                                         <td>
//                                             <Button variant="success" onClick={() => handleEdit(data, index)}>
//                                                 Edit
//                                             </Button>
//                                         </td>
//                                         <td>
//                                             <Button variant="danger" onClick={() => handleDeleteContent(index)}>
//                                                 Delete
//                                             </Button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </Table>
//                     </div>
//                 )}
//                 <div className="m-3">
//                     <Button variant="success" type="submit" className="m-2">
//                         Save
//                     </Button>
//                     <Button variant="danger" className="m-2" onClick={handleClose}>
//                         Cancel
//                     </Button>
//                 </div>
//             </Form>
//         </Container>
//     );
// };

// export default CreateBlog;

// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================

import { createBlog, getAllBlogs, updateBlog } from '@/api/BlogAPIs';
import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateBlog = ({ handleClose, id, data, isEditMode, setBlogDatas }) => {
    const [blogHeading, setBlogHeading] = useState('');
    const [blogSubContent, setBlogSubContent] = useState('');
    const [blogContentTitle, setBlogContentTitle] = useState('');
    const [blogContentSection, setBlogContentSection] = useState('');
    const [blogPostCategory, setBlogPostCategory] = useState('');
    const [blogAuthor, setBlogAuthor] = useState('');
    const [blogURL, setBlogURL] = useState('');
    const [blogContent, setBlogContents] = useState([]);

    const [titleImagePreview, setTitleImagePreview] = useState(null);
    const [blogImagePreview, setBlogImagePreview] = useState(null);
    const [activeEdit, setActiveEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const blogTitleImageRef = useRef();
    const blogImageRef = useRef();

    useEffect(() => {
        if (isEditMode && data) {
            setBlogHeading(data.title);
            setTitleImagePreview(data.titleImage);
            setBlogSubContent(data.subtitleContent);
            setBlogAuthor(data.author);
            setBlogPostCategory(data.category);
            setBlogURL(data.blogUrl);
            setBlogContents(data.contentSections);
        }
    }, [isEditMode, data]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', blogHeading);
        formData.append('subtitleContent', blogSubContent.replace(/\n/g, '<br>')); // Convert newlines to <br>
        formData.append('category', blogPostCategory);
        formData.append('author', blogAuthor);
        formData.append('blogUrl', blogURL);

        const blogContentsArray = [];
        const blogImagesArray = [];

        blogContent.forEach((content, index) => {
            blogContentsArray.push({
                blogTitle: content.blog_content_title,
                content: content.blog_content.replace(/\n/g, '<br>') // Convert newlines to <br>
            });
            blogImagesArray.push(content.blog_image);
        });

        // Append the titleImage to the FormData
        if (blogTitleImageRef.current.files[0]) {
            formData.append('titleImage', blogTitleImageRef.current.files[0]);
        }

        formData.append('contentSections', JSON.stringify(blogContentsArray));

        blogImagesArray.forEach((image, index) => {
            formData.append(`blogImages`, image);
        });

        try {
            const result = isEditMode ? await updateBlog(formData, id) : await createBlog(formData);
            if (result?.data) {
                Swal.fire({
                    icon: 'success',
                    title: isEditMode ? 'Blog Successfully Updated' : 'Blog Successfully Created',
                    showConfirmButton: true,
                    timer: 32000,
                    text: isEditMode ? 'The blog has been successfully updated.' : 'The blog has been successfully created.'
                });
                const response = await getAllBlogs();
                if (response?.data) {
                    setBlogDatas(response?.data?.blogs);
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
        if (!blogContentSection || !blogImageRef.current.files[0]) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Blog Content Title, Blog Content, and Blog Image fields should not be empty.',
                showConfirmButton: true
            });
            return;
        }

        const file = blogImageRef.current.files[0];
        if (!file.type.startsWith('image/')) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Only image files are allowed.',
                showConfirmButton: true
            });
            return;
        }

        const newContent = {
            blog_content_title: blogContentTitle,
            blog_content: blogContentSection,
            blog_image: file
        };
        setBlogContents([...blogContent, newContent]);
        setBlogContentTitle('');
        setBlogContentSection('');
        blogImageRef.current.value = '';
        setBlogImagePreview(null); // Clear the preview after adding the content
    };

    const handleDeleteContent = (index) => {
        const newContent = [...blogContent];
        newContent.splice(index, 1);
        setBlogContents(newContent);
    };

    const handleTitleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setTitleImagePreview(URL.createObjectURL(file));
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Only image files are allowed.',
                showConfirmButton: true
            });
            e.target.value = '';
        }
    };

    const handleBlogImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setBlogImagePreview(URL.createObjectURL(file));
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Only image files are allowed.',
                showConfirmButton: true
            });
            e.target.value = '';
        }
    };

    const handleEdit = (datas, index) => {
        setBlogContentTitle(datas?.blog_content_title);
        setBlogContentSection(datas?.blog_content);
        setBlogImagePreview(typeof datas?.blog_image === 'string' ? datas?.blog_image : URL.createObjectURL(datas?.blog_image));
        setActiveEdit(true);
        setEditIndex(index);
    };

    const handleUpdate = () => {
        const newContent = {
            blog_content_title: blogContentTitle,
            blog_content: blogContentSection,
            blog_image: blogImageRef.current.files[0] || blogImagePreview
        };
        setBlogContents((prevContent) => prevContent.map((content, index) => (index === editIndex ? newContent : content)));
        setBlogContentTitle('');
        setBlogContentSection('');
        setBlogImagePreview(null);
        setActiveEdit(false);
        setEditIndex(null);
        blogImageRef.current.value = '';
    };

    const handleCancelEdit = () => {
        setBlogContentTitle('');
        setBlogContentSection('');
        setBlogImagePreview(null);
        setActiveEdit(false);
        setEditIndex(null);
        blogImageRef.current.value = '';
    };

    return (
        <Container className="my-4">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blogHeading">
                            <Form.Label>Blog Heading</Form.Label>
                            <Form.Control type="text" placeholder="Enter the blog Heading" value={blogHeading} onChange={(e) => setBlogHeading(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="blogAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Enter the author" value={blogAuthor} onChange={(e) => setBlogAuthor(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blogSubTtitle">
                            <Form.Label>Blog Sub content</Form.Label>
                            <Form.Control as="textarea" cols={12} rows={10} placeholder="Type the blog sub title content" value={blogSubContent} onChange={(e) => setBlogSubContent(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="blogTitleImage">
                            <Form.Label>Upload the Title image</Form.Label>
                            <Form.Control type="file" ref={blogTitleImageRef} onChange={handleTitleImageChange} accept="image/*" />
                            {titleImagePreview && <img src={titleImagePreview} alt="Title Preview" style={{ marginTop: '10px', width: '200px', height: '200px', objectFit: 'contain' }} />}
                            {!titleImagePreview && (
                                <div style={{ textAlign: 'center', color: '#ccc' }}>
                                    <p>Click to upload image</p>
                                    <p>Size: 1088 x 736</p>
                                </div>
                            )}
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blog_url">
                            <Form.Label>Blog URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter the blog URL and its should be an unique" value={blogURL} onChange={(e) => setBlogURL(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blogPostCategory">
                            <Form.Label>Blog Post Category</Form.Label>
                            <Form.Control as="select" value={blogPostCategory} onChange={(e) => setBlogPostCategory(e.target.value)}>
                                <option value="">Select the post category</option>
                                <option value="Modular">Modular Kitchen</option>
                                <option value="Interior">Interior Design</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="blog_content_title">
                            <Form.Label>Blog Content Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter the blog content title" value={blogContentTitle} onChange={(e) => setBlogContentTitle(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blog_image">
                            <Form.Label>Upload Blog Image</Form.Label>
                            <Form.Control type="file" ref={blogImageRef} onChange={handleBlogImageChange} accept="image/*" />
                            {blogImagePreview && <img src={blogImagePreview} alt="Blog Image Preview" style={{ marginTop: '10px', width: '200px', height: '200px' }} />}
                            {!blogImagePreview && (
                                <div style={{ textAlign: 'center', color: '#ccc',marginTop:'10px' }}>
                                    <p>Click to upload image</p>
                                    <p>Size: 500 x 500</p>
                                </div>
                            )}
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blog_content">
                            <Form.Label>Blog Content</Form.Label>
                            <Form.Control as="textarea" cols={12} rows={10} placeholder="Enter the blog content" value={blogContentSection} onChange={(e) => setBlogContentSection(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                {activeEdit ? (
                    <section className="d-flex justify-content-center">
                        <div>
                            <Button variant="success" className="me-2" onClick={handleUpdate}>
                                Update
                            </Button>
                            <Button variant="danger" className="me-2" onClick={handleCancelEdit}>
                                Cancel
                            </Button>
                        </div>
                    </section>
                ) : (
                    <Button variant="primary" className="mt-3" onClick={handleAddTheContent}>
                        Add Content
                    </Button>
                )}
                {blogContent.length > 0 && (
                    <div className="table-responsive mt-4" style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Blog Content Title</th>
                                    <th>Blog Content</th>
                                    <th>Blog Image</th>
                                    <th>Edit</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogContent.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.blog_content_title}</td>
                                        <td>{data.blog_content}</td>
                                        <td>
                                            <img src={typeof data.blog_image === 'string' ? data.blog_image : URL.createObjectURL(data.blog_image)} alt="blog image" style={{ width: '100px', height: '100px' }} />
                                        </td>
                                        <td>
                                            <Button variant="success" onClick={() => handleEdit(data, index)}>
                                                Edit
                                            </Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDeleteContent(index)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                )}
                <div className="m-3">
                    <Button variant="success" type="submit" className="m-2">
                        Save
                    </Button>
                    <Button variant="danger" className="m-2" onClick={handleClose}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default CreateBlog;
