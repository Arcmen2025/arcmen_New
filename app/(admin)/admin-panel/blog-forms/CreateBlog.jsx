import { createBlog, getAllBlogs, updateBlog } from '@/api/BlogAPIs';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import Swal from 'sweetalert2';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import 'react-quill-new/dist/quill.snow.css';

const CreateBlog = ({ handleClose, id, data, isEditMode, setBlogDatas }) => {
<<<<<<< HEAD
  const[blogHeading, setBlogHeading] = useState('');
  const [blogSubContent, setBlogSubContent] = useState('');
  const [blogContentTitle, setBlogContentTitle] = useState('');
  const[blogContentSection, setBlogContentSection] = useState('');
  const [blogPostCategory, setBlogPostCategory] = useState('');
  const [blogAuthor, setBlogAuthor] = useState('');
  const [blogURL, setBlogURL] = useState('');
  const [blogContent, setBlogContents] = useState([]);

  const[titleImagePreview, setTitleImagePreview] = useState(null);
  const [blogImagePreview, setBlogImagePreview] = useState(null);
  const [activeEdit, setActiveEdit] = useState(false);
  const[editIndex, setEditIndex] = useState(null);
  const [existingImages, setExistingImages] = useState([]); // Restored: Track existing images
=======
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
>>>>>>> 9d6667b08015bf6b811f5053df81f88d34cecd75

  const blogTitleImageRef = useRef();
  const blogImageRef = useRef();

<<<<<<< HEAD
  // Quill toolbar with full link support
  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header:[1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],[{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        ['link'],
        ['blockquote', 'code-block'],
        ['clean']
      ]
    },
    clipboard: {
      matchVisual: false
    }
  }), []);
=======
    const quillModules = useMemo(() => ({
        toolbar: {
            container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ color: [] }, { background: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ align: [] }],
                ['link'],           // ✅ Link button - works perfectly, no z-index issue
                ['blockquote', 'code-block'],
                ['clean']
            ]
        },
        clipboard: {
            matchVisual: false
        }
    }), []);
>>>>>>> 9d6667b08015bf6b811f5053df81f88d34cecd75

  const quillFormats =[
    'header', 'bold', 'italic', 'underline', 'strike',
    'color', 'background', 'list', 'align', 'link',
    'blockquote', 'code-block'
  ];

  useEffect(() => {
    if (isEditMode && data) {
      setBlogHeading(data.title || '');
      setTitleImagePreview(data.titleImage || null);
      setBlogSubContent(data.subtitleContent || '');
      setBlogAuthor(data.author || '');
      setBlogPostCategory(data.category || '');
      setBlogURL(data.blogUrl || '');
      
      // Handle content sections properly
      if (data.contentSections && Array.isArray(data.contentSections)) {
        const formattedContent = data.contentSections.map((section) => ({
          blog_content_title: section.blogTitle || section.blog_content_title || '',
          blog_content: section.content || section.blog_content || '',
          blog_image: section.blogImage || section.blog_image || null,
          _id: section._id 
        }));
        setBlogContents(formattedContent);
        
        // Track existing images for deletion
        const existingImgs = formattedContent
          .filter(section => section.blog_image && typeof section.blog_image === 'string')
          .map(section => section.blog_image);
        setExistingImages(existingImgs);
      }
    }
  }, [isEditMode, data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!blogHeading) return Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Blog heading is required' });
    if (!blogAuthor) return Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Author is required' });
    if (!blogURL) return Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Blog URL is required' });
    if (blogContent.length === 0) return Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Please add at least one content section' });

    const formData = new FormData();
    formData.append('title', blogHeading);
    formData.append('subtitleContent', blogSubContent);
    formData.append('category', blogPostCategory);
    formData.append('author', blogAuthor);
    formData.append('blogUrl', blogURL);

    // RESTORED: Prepare content sections array exactly like working past code
    const blogContentsArray = [];
    const blogImagesArray =[];

    blogContent.forEach((content) => {
      blogContentsArray.push({
        blogTitle: content.blog_content_title,
        content: content.blog_content,
        ...(content._id && { _id: content._id }) // Include _id for edit mode
      });
      
      // Handle new image files ONLY
      if (content.blog_image && content.blog_image instanceof File) {
        blogImagesArray.push(content.blog_image);
      }
    });

    // RESTORED: Handle title image (prevents Multer 'Unexpected Field' crash)
    if (blogTitleImageRef.current?.files[0]) {
      formData.append('titleImage', blogTitleImageRef.current.files[0]);
    } else if (isEditMode && titleImagePreview && typeof titleImagePreview === 'string') {
      formData.append('existingTitleImage', titleImagePreview);
    }

    formData.append('contentSections', JSON.stringify(blogContentsArray));

    // RESTORED: Append new images
    blogImagesArray.forEach((image) => {
      formData.append('blogImages', image);
    });

    // RESTORED: Send existing image URLs to handle deletion if needed
    if (isEditMode && existingImages.length > 0) {
      formData.append('existingImages', JSON.stringify(existingImages));
    }

    try {
      const result = isEditMode 
        ? await updateBlog(formData, id) 
        : await createBlog(formData);
        
      // FIXED BUG: Now checks result.errors strictly to avoid false "success" popups
      if (result && !result?.isError && !result?.errors && !result?.error) {
        Swal.fire({
          icon: 'success',
          title: isEditMode ? 'Blog Successfully Updated' : 'Blog Successfully Created',
          showConfirmButton: true,
          timer: 2000
        });
        
        const response = await getAllBlogs();
        const blogs = response?.data?.blogs ?? response?.blogs ?? (Array.isArray(response) ? response : null);
        if (blogs !== null) {
          setBlogDatas(blogs);
          handleClose();
        }
      } else {
        // Show the actual API error message directly
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: result?.errors || result?.message || 'Form not submitted, please try again'
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Form not submitted, please try again',
        text: error?.response?.data?.errors || error?.response?.data?.message || 'Form not submitted, please try again.'
      });
    }
  };

  const handleAddTheContent = () => {
    if (!blogContentTitle) return Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Blog Content Title should not be empty.', showConfirmButton: true });
    if (!blogContentSection || blogContentSection === '<p><br></p>') return Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Blog Content fields should not be empty.', showConfirmButton: true });

    const file = blogImageRef.current?.files[0];
    const newContent = { blog_content_title: blogContentTitle, blog_content: blogContentSection, blog_image: file || null };
    
    setBlogContents([...blogContent, newContent]);
    setBlogContentTitle('');
    setBlogContentSection('');
    if (blogImageRef.current) blogImageRef.current.value = '';
    setBlogImagePreview(null);
  };

  const handleDeleteContent = (index) => {
    const newContent = [...blogContent];
    const deletedItem = newContent.splice(index, 1)[0];
    
    // RESTORED: If it's an existing image URL, add to removal list
    if (isEditMode && deletedItem.blog_image && typeof deletedItem.blog_image === 'string') {
      setExistingImages(prev =>[...prev, deletedItem.blog_image]);
    }
    setBlogContents(newContent);
  };

  const handleTitleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setTitleImagePreview(URL.createObjectURL(file));
    } else {
      Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Only image files are allowed.', showConfirmButton: true });
      e.target.value = '';
    }
  };

  const handleBlogImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setBlogImagePreview(URL.createObjectURL(file));
    } else {
      Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Only image files are allowed.', showConfirmButton: true });
      e.target.value = '';
    }
  };

  const handleEdit = (datas, index) => {
    setBlogContentTitle(datas?.blog_content_title || '');
    setBlogContentSection(datas?.blog_content || '');
    
    if (datas?.blog_image) {
      if (typeof datas.blog_image === 'string') {
        setBlogImagePreview(datas.blog_image);
      } else if (datas.blog_image instanceof File) {
        setBlogImagePreview(URL.createObjectURL(datas.blog_image));
      }
    } else {
      setBlogImagePreview(null);
    }
    
    setActiveEdit(true);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    if (!blogContentTitle) return Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Blog Content Title should not be empty.', showConfirmButton: true });
    if (!blogContentSection || blogContentSection === '<p><br></p>') return Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Blog Content fields should not be empty.', showConfirmButton: true });
    
    const file = blogImageRef.current?.files[0];
    const originalContent = blogContent[editIndex];
    
    const updatedContent = {
      blog_content_title: blogContentTitle,
      blog_content: blogContentSection,
      blog_image: file || originalContent?.blog_image || null,
      ...(originalContent?._id && { _id: originalContent._id })
    };
    
    setBlogContents((prevContent) => prevContent.map((content, index) => (index === editIndex ? updatedContent : content)));
    
    handleCancelEdit();
  };

  const handleCancelEdit = () => {
    setBlogContentTitle('');
    setBlogContentSection('');
    setBlogImagePreview(null);
    setActiveEdit(false);
    setEditIndex(null);
    if (blogImageRef.current) blogImageRef.current.value = '';
  };

  return (
    <Container className="my-4">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="blogHeading">
              <Form.Label>Blog Heading *</Form.Label>
              <Form.Control type="text" placeholder="Enter the blog Heading" value={blogHeading} onChange={(e) => setBlogHeading(e.target.value)} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="blogAuthor">
              <Form.Label>Author *</Form.Label>
              <Form.Control type="text" placeholder="Enter the author" value={blogAuthor} onChange={(e) => setBlogAuthor(e.target.value)} required />
            </Form.Group>
          </Col>
        </Row>

<<<<<<< HEAD
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="blogSubTtitle">
              <Form.Label>Blog Sub content</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Type the blog sub title content" value={blogSubContent} onChange={(e) => setBlogSubContent(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="blogTitleImage">
              <Form.Label>Upload the Title image</Form.Label>
              <Form.Control type="file" ref={blogTitleImageRef} onChange={handleTitleImageChange} accept="image/*" />
              {titleImagePreview && (
                <div className="mt-2">
                  <img src={titleImagePreview} alt="Title Preview" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
=======
        const newContent = {
            blog_content_title: blogContentTitle,
            blog_content: blogContentSection,
            blog_image: file
        };
        setBlogContents([...blogContent, newContent]);
        setBlogContentTitle('');
        setBlogContentSection('');
        blogImageRef.current.value = '';
        setBlogImagePreview(null);
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
        setBlogImagePreview(
            typeof datas?.blog_image === 'string'
                ? datas?.blog_image
                : datas?.blog_image instanceof File
                    ? URL.createObjectURL(datas?.blog_image)
                    : null
        );
        setActiveEdit(true);
        setEditIndex(index);
    };

    const handleUpdate = () => {
        const newContent = {
            blog_content_title: blogContentTitle,
            blog_content: blogContentSection,
            blog_image: blogImageRef.current.files[0] || blogImagePreview
        };
        setBlogContents((prevContent) =>
            prevContent.map((content, index) => (index === editIndex ? newContent : content))
        );
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
                            <Form.Control
                                type="text"
                                placeholder="Enter the blog Heading"
                                value={blogHeading}
                                onChange={(e) => setBlogHeading(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="blogAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the author"
                                value={blogAuthor}
                                onChange={(e) => setBlogAuthor(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blogSubTtitle">
                            <Form.Label>Blog Sub content</Form.Label>
                            <Form.Control
                                as="textarea"
                                cols={12}
                                rows={10}
                                placeholder="Type the blog sub title content"
                                value={blogSubContent}
                                onChange={(e) => setBlogSubContent(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="blogTitleImage">
                            <Form.Label>Upload the Title image</Form.Label>
                            <Form.Control
                                type="file"
                                ref={blogTitleImageRef}
                                onChange={handleTitleImageChange}
                                accept="image/*"
                            />
                            {titleImagePreview && (
                                <img
                                    src={titleImagePreview}
                                    alt="Title Preview"
                                    style={{ marginTop: '10px', width: '200px', height: '200px', objectFit: 'contain' }}
                                />
                            )}
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
                            <Form.Control
                                type="text"
                                placeholder="Enter the blog URL and it should be unique"
                                value={blogURL}
                                onChange={(e) => setBlogURL(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blogPostCategory">
                            <Form.Label>Blog Post Category</Form.Label>
                            <Form.Control
                                as="select"
                                value={blogPostCategory}
                                onChange={(e) => setBlogPostCategory(e.target.value)}
                            >
                                <option value="">Select the post category</option>
                                <option value="Modular">Modular Kitchen</option>
                                <option value="Interior">Interior Design</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="blog_content_title">
                            <Form.Label>Blog Content Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the blog content title"
                                value={blogContentTitle}
                                onChange={(e) => setBlogContentTitle(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blog_image">
                            <Form.Label>Upload Blog Image</Form.Label>
                            <Form.Control
                                type="file"
                                ref={blogImageRef}
                                onChange={handleBlogImageChange}
                                accept="image/*"
                            />
                            {blogImagePreview && (
                                <img
                                    src={blogImagePreview}
                                    alt="Blog Image Preview"
                                    style={{ marginTop: '10px', width: '200px', height: '200px' }}
                                />
                            )}
                            {!blogImagePreview && (
                                <div style={{ textAlign: 'center', color: '#ccc', marginTop: '10px' }}>
                                    <p>Click to upload image</p>
                                    <p>Size: 500 x 500</p>
                                </div>
                            )}
                        </Form.Group>
                    </Col>
                </Row>

                {/* ✅ React Quill replaces CKEditor — link tooltip is inline, no z-index issues */}
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="blog_content">
                            <Form.Label>Blog Content</Form.Label>
                            <div style={{ background: '#fff' }}>
                                <ReactQuill
                                    theme="snow"
                                    value={blogContentSection}
                                    onChange={(value) => setBlogContentSection(value)}
                                    modules={quillModules}
                                    formats={quillFormats}
                                    placeholder="Write your blog content here..."
                                    style={{ minHeight: '200px' }}
                                />
                            </div>
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
                    <div
                        className="table-responsive mt-4"
                        style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'auto' }}
                    >
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
                                        {/* ✅ Render HTML content correctly from Quill */}
                                        <td
                                            dangerouslySetInnerHTML={{ __html: data.blog_content }}
                                            style={{ maxWidth: '300px', wordBreak: 'break-word' }}
                                        />
                                        <td>
                                            {data.blog_image ? (
                                                <img
                                                    src={
                                                        typeof data.blog_image === 'string'
                                                            ? data.blog_image
                                                            : data.blog_image instanceof File
                                                                ? URL.createObjectURL(data.blog_image)
                                                                : ''
                                                    }
                                                    alt="blog image"
                                                    style={{ width: '100px', height: '100px' }}
                                                />
                                            ) : (
                                                <span>No Image</span>
                                            )}
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
>>>>>>> 9d6667b08015bf6b811f5053df81f88d34cecd75
                </div>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="blog_url">
              <Form.Label>Blog URL *</Form.Label>
              <Form.Control type="text" placeholder="Enter the blog URL and it should be unique" value={blogURL} onChange={(e) => setBlogURL(e.target.value)} required />
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

        {/* Content Section Form */}
        <div className="border p-3 rounded mb-3">
          <h5>Add Blog Content Section</h5>
          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="blog_content_title">
                <Form.Label>Blog Content Title *</Form.Label>
                <Form.Control type="text" placeholder="Enter the blog content title" value={blogContentTitle} onChange={(e) => setBlogContentTitle(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="blog_image">
                <Form.Label>Upload Blog Image</Form.Label>
                <Form.Control type="file" ref={blogImageRef} onChange={handleBlogImageChange} accept="image/*" />
                {blogImagePreview && (
                  <div className="mt-2">
                    <img src={blogImagePreview} alt="Blog Image Preview" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="blog_content">
                <Form.Label>Blog Content *</Form.Label>
                <div style={{ background: '#fff' }}>
                  <ReactQuill theme="snow" value={blogContentSection} onChange={(value) => setBlogContentSection(value)} modules={quillModules} formats={quillFormats} placeholder="Write your blog content here..." style={{ minHeight: '200px' }} />
                </div>
              </Form.Group>
            </Col>
          </Row>

          {activeEdit ? (
            <div className="d-flex justify-content-center gap-2">
              <Button variant="success" onClick={handleUpdate}>Update Content</Button>
              <Button variant="danger" onClick={handleCancelEdit}>Cancel</Button>
            </div>
          ) : (
            <Button variant="primary" onClick={handleAddTheContent}>Add Content Section</Button>
          )}
        </div>

        {/* Display Added Content Sections */}
        {blogContent.length > 0 && (
          <div className="table-responsive mt-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <h5>Added Content Sections ({blogContent.length})</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th style={{ width: '20%' }}>Title</th>
                  <th style={{ width: '40%' }}>Content</th>
                  <th style={{ width: '20%' }}>Image</th>
                  <th style={{ width: '20%' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogContent.map((data, index) => (
                  <tr key={index}>
                    <td>{data.blog_content_title}</td>
                    <td dangerouslySetInnerHTML={{ __html: data.blog_content?.substring(0, 150) + (data.blog_content?.length > 150 ? '...' : '') }} style={{ maxWidth: '300px', wordBreak: 'break-word' }} />
                    <td>
                      {data.blog_image ? (
                        <img
                          src={typeof data.blog_image === 'string' ? data.blog_image : data.blog_image instanceof File ? URL.createObjectURL(data.blog_image) : ''}
                          alt="blog image" style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                        />
                      ) : (<span className="text-muted">No Image</span>)}
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button variant="success" size="sm" onClick={() => handleEdit(data, index)}>Edit</Button>
                        <Button variant="danger" size="sm" onClick={() => handleDeleteContent(index)}>Delete</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}

        <div className="mt-4 d-flex justify-content-end gap-2">
          <Button variant="success" type="submit">{isEditMode ? 'Update Blog' : 'Create Blog'}</Button>
          <Button variant="danger" onClick={handleClose}>Cancel</Button>
        </div>
      </Form>

      <style jsx global>{`
        .ql-editor { min-height: 200px; font-size: 15px; }
        .ql-toolbar { border-radius: 4px 4px 0 0; }
        .ql-container { border-radius: 0 0 4px 4px; }
        .ql-tooltip { z-index: 9999 !important; position: fixed !important; left: 50% !important; transform: translateX(-50%) !important; }
        .ql-tooltip input[type='text'] { pointer-events: all !important; user-select: text !important; }
      `}</style>
    </Container>
  );
};

export default CreateBlog;