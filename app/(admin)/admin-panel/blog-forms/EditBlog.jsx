// import { updateBlog, updateBlogContent, deleteBlogContentSection } from '@/api/BlogAPIs';
// import React, { useState, useRef, useEffect } from 'react';
// import Swal from 'sweetalert2';
// import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

// const EditBlog = ({ id, data, handleClose }) => {
//     const [blogHeading, setBlogHeading] = useState('');
//     const [blogSubContent, setBlogSubContent] = useState('');
//     const [blogContentTitle, setBlogContentTitle] = useState('');
//     const [blogContentSection, setBlogContentSection] = useState('');
//     const [blogPostCategory, setBlogPostCategory] = useState('');
//     const [blogAuthor, setBlogAuthor] = useState('');
//     const [blogURL, setBlogURL] = useState('');
//     const [blogContent, setBlogContents] = useState([]);
//     const [titleImagePreview, setTitleImagePreview] = useState(null);
//     const [activeEdit, setActiveEdit] = useState(false);
//     const [editIndex, setEditIndex] = useState(null);
//     const [blogImagePreview, setBlogImagePreview] = useState(null);

//     const blogTitleImageRef = useRef();
//     const blogImageRef = useRef();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const result = {};
//                 if (result.data) {
//                     setBlogHeading(result?.data.title);
//                     setTitleImagePreview(result?.data?.titleImage);
//                     setBlogSubContent(result?.data?.subtitleContent);
//                     setBlogAuthor(result?.data?.author);
//                     setBlogPostCategory(result?.data?.category);
//                     setBlogURL(result?.data?.blogUrl);
//                     setBlogContents(result?.data?.contentSections);
//                 } else {
//                     setBlogHeading(data.title);
//                     setTitleImagePreview(data?.titleImage);
//                     setBlogSubContent(data?.subtitleContent);
//                     setBlogAuthor(data?.author);
//                     setBlogPostCategory(data?.category);
//                     setBlogURL(data?.blogUrl);
//                     setBlogContents(data?.contentSections);
//                 }
//             } catch (e) {
//                 console.log(e);
//             }
//         };
//         fetchData();
//     }, [id, data]);

//     const convertBrToNewline = (html) => {
//         return html.replace(/<br\s*[\/]?>/gi, '\n');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('title', blogHeading);
//         formData.append('subtitleContent', blogSubContent.replace(/\n/g, '<br>')); // Convert newlines to <br>
//         formData.append('category', blogPostCategory);
//         formData.append('author', blogAuthor);
//         formData.append('blogUrl', blogURL);

//         const blogContentsArray = blogContent.map((content) => ({
//             blogTitle: content.blogTitle,
//             content: content.content.replace(/\n/g, '<br>') // Convert newlines to <br>
//         }));

//         if (blogTitleImageRef.current.files[0]) {
//             formData.append('titleImage', blogTitleImageRef.current.files[0]);
//         }

//         formData.append('contentSections', JSON.stringify(blogContentsArray));

//         blogContent.forEach((content, index) => {
//             if (content.blogImage instanceof File) {
//                 formData.append(`blogImages`, content.blogImage);
//             }
//         });

//         try {
//             const result = await updateBlog(formData, id);
//             if (result) {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Blog Successfully Updated',
//                     showConfirmButton: true,
//                     timer: 32000,
//                     text: 'The blog has been successfully updated.'
//                 });
//                 handleClose();
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

//     const handleAddTheContent = async () => {
//         if (!blogContentTitle || !blogContentSection || !blogImageRef.current.files[0]) {
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
//             blogTitle: blogContentTitle,
//             content: blogContentSection.replace(/\n/g, '<br>'), // Convert newlines to <br>
//             blogImage: file
//         };

//         const formData = new FormData();
//         formData.append('blogTitle', blogContentTitle);
//         formData.append('content', newContent.content);
//         formData.append('blogImages', file);

//         const response = await updateBlogContent(formData, id);
//         if (response.data) {
//             // console.log(response.data);
//         }

//         setBlogContents([...blogContent, newContent]);
//         setBlogContentTitle('');
//         setBlogContentSection('');
//         setBlogImagePreview(null);
//         blogImageRef.current.value = '';
//     };

//     const handleDeleteContent = (index, data) => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: 'You will not be able to recover this content section!',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 try {
//                     const response = await deleteBlogContentSection(id, data._id);
//                     if (response.data) {
//                         const newContent = [...blogContent];
//                         newContent.splice(index, 1);
//                         setBlogContents(newContent);
//                         Swal.fire({
//                             icon: 'success',
//                             title: 'Content Section Deleted',
//                             text: 'The content section has been successfully deleted.',
//                             timer: 3000
//                         });
//                     } else {
//                         Swal.fire({
//                             icon: 'error',
//                             title: 'Oops...',
//                             text: 'Something went wrong while deleting the content section.',
//                             timer: 3000
//                         });
//                     }
//                 } catch (error) {
//                     console.error('Error deleting content section:', error);
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: 'Something went wrong while deleting the content section.',
//                         timer: 3000
//                     });
//                 }
//             }
//         });
//     };

//     const handleTitleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setTitleImagePreview(URL.createObjectURL(file));
//         }
//     };

//     const handleBlogImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setBlogImagePreview(URL.createObjectURL(file));
//         }
//     };

//     const handleEdit = (datas, index) => {
//         setActiveEdit(true);
//         setEditIndex(index);
//         setBlogContentTitle(datas?.blogTitle);
//         setBlogContentSection(convertBrToNewline(datas?.content));
//         setBlogImagePreview(typeof datas?.blogImage === 'string' ? datas.blogImage : datas?.blogImage);
//     };

//     const handleUpdate = async () => {
//         const newContent = {
//             blogTitle: blogContentTitle,
//             content: blogContentSection.replace(/\n/g, '<br>'), // Convert newlines to <br>
//             blogImage: blogImageRef.current.files[0] || blogImagePreview
//         };

//         const formData = new FormData();
//         formData.append('blogTitle', blogContentTitle);
//         formData.append('content', newContent.content);
//         formData.append('sectionId', blogContent[editIndex]._id);

//         // Append the blogImage only if it is being updated
//         if (blogImageRef.current.files[0]) {
//             formData.append('blogImages', blogImageRef.current.files[0]);
//         }

//         const response = await updateBlogContent(formData, id);
//         if (response.data) {
//             // console.log(response.data);
//         }

//         setBlogContents((prevContent) => prevContent.map((content, index) => (index === editIndex ? newContent : content)));
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
//                         <Form.Group controlId="blogTitleImage">
//                             <Form.Label>Upload the Title image</Form.Label>
//                             <Form.Control type="file" ref={blogTitleImageRef} onChange={handleTitleImageChange} accept="image/*" />
//                             {titleImagePreview && <img src={titleImagePreview} alt="Title Preview" style={{ marginTop: '10px', width: '200px', height: '200px', objectFit: 'contain' }} />}
//                             {!titleImagePreview && (
//                                 <div style={{ textAlign: 'center', color: '#ccc' }}>
//                                     <p>Click to upload image</p>
//                                     <p>Size: 1088 x 736</p>
//                                 </div>
//                             )}
//                         </Form.Group>
//                     </Col>
//                 </Row>

//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="blogAuthor">
//                             <Form.Label>Author</Form.Label>
//                             <Form.Control type="text" placeholder="Enter the author" value={blogAuthor} onChange={(e) => setBlogAuthor(e.target.value)} />
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="blogSubTtitle">
//                             <Form.Label>Blog Sub content</Form.Label>
//                             <Form.Control as="textarea" placeholder="Type the blog sub title content" value={blogSubContent} onChange={(e) => setBlogSubContent(e.target.value)} />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="blogTitle">
//                             <Form.Label>Blog Content Title</Form.Label>
//                             <Form.Control type="text" placeholder="Enter the blog content title" value={blogContentTitle} onChange={(e) => setBlogContentTitle(e.target.value)} />
//                         </Form.Group>
//                     </Col>
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
//                 </Row>
//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="blogImage">
//                             <Form.Label>Upload Blog Image</Form.Label>
//                             <Form.Control type="file" ref={blogImageRef} onChange={handleBlogImageChange} accept="image/*" />
//                             {blogImagePreview && <img src={blogImagePreview} alt="Blog Image Preview" style={{ marginTop: '10px', width: '200px', height: '200px' }} />}
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Row className="mb-3">
//                     <Col>
//                         <Form.Group controlId="content">
//                             <Form.Label>Blog Content</Form.Label>
//                             <Form.Control as="textarea" placeholder="Enter the blog content" value={convertBrToNewline(blogContentSection)} onChange={(e) => setBlogContentSection(e.target.value)} cols={12} rows={5} />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <Form.Group controlId="blog_url">
//                             <Form.Label>Blog URL</Form.Label>
//                             <Form.Control type="text" placeholder="Enter the blog URL and it should be unique" value={blogURL} onChange={(e) => setBlogURL(e.target.value)} />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 {activeEdit ? (
//                     <section className="d-flex justify-content-center mt-4">
//                         <div>
//                             <Button variant="success" className="me-2" onClick={handleUpdate}>
//                                 Update
//                             </Button>
//                             <Button variant="danger" className="me-2" onClick={handleCancelEdit}>
//                                 Cancel
//                             </Button>
//                         </div>
//                     </section>
//                 ) : (
//                     <Button variant="primary" className="mt-3" onClick={handleAddTheContent}>
//                         Add Content
//                     </Button>
//                 )}
//                 {blogContent.length > 0 && (
//                     <div className="table-responsive mt-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
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
//                                         <td>{data.blogTitle}</td>
//                                         <td dangerouslySetInnerHTML={{ __html: data.content }} />
//                                         <td>
//                                             <img
//                                                 src={typeof data.blogImage === 'string' ? data.blogImage : data?.blogImage === null ? data?.blogImage : URL?.createObjectURL(data?.blogImage)}
//                                                 alt="blog image"
//                                                 style={{ width: '100px', height: '100px' }}
//                                             />
//                                         </td>
//                                         <td>
//                                             <Button variant="success" onClick={() => handleEdit(data, index)}>
//                                                 Edit
//                                             </Button>
//                                         </td>
//                                         <td>
//                                             <Button variant="danger" onClick={() => handleDeleteContent(index, data)}>
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

// export default EditBlog;
// // ===============================================================================================
// // ===============================================================================================
// // ===============================================================================================
// // ===============================================================================================
// // ===============================================================================================
// // ===============================================================================================


import { updateBlog, updateBlogContent, deleteBlogContentSection } from '@/api/BlogAPIs';
import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

const EditBlog = ({ id, data, handleClose }) => {
    const [blogHeading, setBlogHeading] = useState('');
    const [blogSubContent, setBlogSubContent] = useState('');
    const [blogContentTitle, setBlogContentTitle] = useState('');
    const [blogContentSection, setBlogContentSection] = useState('');
    const [blogPostCategory, setBlogPostCategory] = useState('');
    const [blogAuthor, setBlogAuthor] = useState('');
    const [blogURL, setBlogURL] = useState('');
    const [blogContent, setBlogContents] = useState([]);
    const [titleImagePreview, setTitleImagePreview] = useState(null);
    const [activeEdit, setActiveEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [blogImagePreview, setBlogImagePreview] = useState(null);

    const blogTitleImageRef = useRef();
    const blogImageRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = {};
                if (result.data) {
                    setBlogHeading(result?.data.title);
                    setTitleImagePreview(result?.data?.titleImage);
                    setBlogSubContent(result?.data?.subtitleContent);
                    setBlogAuthor(result?.data?.author);
                    setBlogPostCategory(result?.data?.category);
                    setBlogURL(result?.data?.blogUrl);
                    setBlogContents(result?.data?.contentSections);
                } else {
                    setBlogHeading(data.title);
                    setTitleImagePreview(data?.titleImage);
                    setBlogSubContent(data?.subtitleContent);
                    setBlogAuthor(data?.author);
                    setBlogPostCategory(data?.category);
                    setBlogURL(data?.blogUrl);
                    setBlogContents(data?.contentSections);
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [id, data]);

    const convertBrToNewline = (html) => {
        return html.replace(/<br\s*[\/]?>/gi, '\n');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', blogHeading);
        formData.append('subtitleContent', blogSubContent.replace(/\n/g, '<br>')); // Convert newlines to <br>
        formData.append('category', blogPostCategory);
        formData.append('author', blogAuthor);
        formData.append('blogUrl', blogURL);

        const blogContentsArray = blogContent.map((content) => ({
            blogTitle: content.blogTitle,
            content: content.content.replace(/\n/g, '<br>') // Convert newlines to <br>
        }));

        if (blogTitleImageRef.current.files[0]) {
            formData.append('titleImage', blogTitleImageRef.current.files[0]);
        }

        formData.append('contentSections', JSON.stringify(blogContentsArray));

        blogContent.forEach((content, index) => {
            if (content.blogImage instanceof File) {
                formData.append(`blogImages`, content.blogImage);
            }
        });

        try {
            const result = await updateBlog(formData, id);
            if (result) {
                Swal.fire({
                    icon: 'success',
                    title: 'Blog Successfully Updated',
                    showConfirmButton: true,
                    timer: 32000,
                    text: 'The blog has been successfully updated.'
                });
                handleClose();
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

    const handleAddTheContent = async () => {
        if ( !blogContentSection || !blogImageRef.current.files[0]) {
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
            blogTitle: blogContentTitle,
            content: blogContentSection.replace(/\n/g, '<br>'), // Convert newlines to <br>
            blogImage: file
        };

        const formData = new FormData();
        formData.append('blogTitle', blogContentTitle);
        formData.append('content', newContent.content);
        formData.append('blogImages', file);

        const response = await updateBlogContent(formData, id);
        if (response.data) {
            // console.log(response.data);
        }

        setBlogContents([...blogContent, newContent]);
        setBlogContentTitle('');
        setBlogContentSection('');
        setBlogImagePreview(null);
        blogImageRef.current.value = '';
    };

    const handleDeleteContent = (index, data) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this content section!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await deleteBlogContentSection(id, data._id);
                    if (response.data) {
                        const newContent = [...blogContent];
                        newContent.splice(index, 1);
                        setBlogContents(newContent);
                        Swal.fire({
                            icon: 'success',
                            title: 'Content Section Deleted',
                            text: 'The content section has been successfully deleted.',
                            timer: 3000
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong while deleting the content section.',
                            timer: 3000
                        });
                    }
                } catch (error) {
                    console.error('Error deleting content section:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong while deleting the content section.',
                        timer: 3000
                    });
                }
            }
        });
    };

    const handleTitleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setTitleImagePreview(URL.createObjectURL(file));
        }
    };

    const handleBlogImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBlogImagePreview(URL.createObjectURL(file));
        }
    };

    const handleEdit = (datas, index) => {
        setActiveEdit(true);
        setEditIndex(index);
        setBlogContentTitle(datas?.blogTitle);
        setBlogContentSection(convertBrToNewline(datas?.content));
        setBlogImagePreview(typeof datas?.blogImage === 'string' ? datas.blogImage : datas?.blogImage);
    };

    const handleUpdate = async () => {
        const newContent = {
            blogTitle: blogContentTitle,
            content: blogContentSection.replace(/\n/g, '<br>'), // Convert newlines to <br>
            blogImage: blogImageRef.current.files[0] || blogImagePreview
        };

        const formData = new FormData();
        formData.append('blogTitle', blogContentTitle);
        formData.append('content', newContent.content);
        formData.append('sectionId', blogContent[editIndex]._id);

        // Append the blogImage only if it is being updated
        if (blogImageRef.current.files[0]) {
            formData.append('blogImages', blogImageRef.current.files[0]);
        }

        const response = await updateBlogContent(formData, id);
        if (response.data) {
            // console.log(response.data);
        }

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
        <Container className="my-4 edit-blog-container">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="blogHeading">
                            <Form.Label>Blog Heading</Form.Label>
                            <Form.Control type="text" placeholder="Enter the blog Heading" value={blogHeading} onChange={(e) => setBlogHeading(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
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
                    <Col md={6}>
                        <Form.Group controlId="blogAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Enter the author" value={blogAuthor} onChange={(e) => setBlogAuthor(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="blogSubTtitle">
                            <Form.Label>Blog Sub content</Form.Label>
                            <Form.Control as="textarea" placeholder="Type the blog sub title content" value={blogSubContent} onChange={(e) => setBlogSubContent(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="blogTitle">
                            <Form.Label>Blog Content Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter the blog content title" value={blogContentTitle} onChange={(e) => setBlogContentTitle(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="blogPostCategory">
                            <Form.Label>Blog Post Category</Form.Label>
                            <Form.Control as="select" value={blogPostCategory} onChange={(e) => setBlogPostCategory(e.target.value)}>
                                <option value="">Select the post category</option>
                                <option value="Modular">Modular Kitchen</option>
                                <option value="Interior">Interior Design</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="blogImage">
                            <Form.Label>Upload Blog Image</Form.Label>
                            <Form.Control type="file" ref={blogImageRef} onChange={handleBlogImageChange} accept="image/*" />
                            {blogImagePreview && <img src={blogImagePreview} alt="Blog Image Preview" style={{ marginTop: '10px', width: '200px', height: '200px' }} />}
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={12}>
                        <Form.Group controlId="content">
                            <Form.Label>Blog Content</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter the blog content" value={convertBrToNewline(blogContentSection)} onChange={(e) => setBlogContentSection(e.target.value)} cols={12} rows={10} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group controlId="blog_url">
                            <Form.Label>Blog URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter the blog URL and it should be unique" value={blogURL} onChange={(e) => setBlogURL(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                {activeEdit ? (
                    <section className="d-flex justify-content-center mt-4">
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
                    <div className="table-responsive mt-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
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
                                        <td>{data.blogTitle}</td>
                                        <td dangerouslySetInnerHTML={{ __html: data.content }} />
                                        <td>
                                            <img
                                                src={typeof data.blogImage === 'string' ? data.blogImage : data?.blogImage === null ? data?.blogImage : URL?.createObjectURL(data?.blogImage)}
                                                alt="blog image"
                                                style={{ width: '100px', height: '100px' }}
                                            />
                                        </td>
                                        <td>
                                            <Button variant="success" onClick={() => handleEdit(data, index)}>
                                                Edit
                                            </Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDeleteContent(index, data)}>
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

export default EditBlog;
