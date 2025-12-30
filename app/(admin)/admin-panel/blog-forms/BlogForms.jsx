// 'use client';
// import { Col, Container, Row } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useEffect, useState } from 'react';
// import { deleteBlog, getAllBlogs, updateBlogStatus } from '@/api/BlogAPIs';
// import CreateBlog from './CreateBlog';
// import EditBlog from './EditBlog';
// import './BlogForm.scss';
// import { FaEye, FaTrash } from 'react-icons/fa';
// import { RiEditBoxFill } from 'react-icons/ri';
// import Swal from 'sweetalert2';
// import BlogView from './BlogView';
// import PreLoader from '@/components/PreLoader';

// function BlogForms() {
//     const [blogDatas, setBlogDatas] = useState([]);
//     const [blogData, setBlogData] = useState('');
//     const [showCreateModel, setShowCreateModel] = useState(false);
//     const [showEditModel, setShowEditModel] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(10);
//     const [filterCriteria, setFilterCriteria] = useState('');
//     const [sortCriteria, setSortCriteria] = useState('');
//     const [sortOrder, setSortOrder] = useState('asc');
//     const [showModel, setShowModel] = useState(false);
//     const [dataPass, setDataPass] = useState();
//     const [loading, setLoading] = useState(false);

//     const handleClose = () => {
//         if (showCreateModel) {
//             setShowCreateModel(false);
//         } else if (showEditModel) {
//             setShowEditModel(false);
//         } else if (showModel) {
//             setShowModel(false);
//         }
//     };

//     const handleModelShow = (value) => {
//         setDataPass(value);
//         setShowModel(true);
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const result = await getAllBlogs();
//                 if (result.data && Array.isArray(result.data.blogs)) {
//                     setBlogDatas(result.data.blogs);
//                 } else {
//                     console.error('Unexpected data format:', result.data);
//                 }
//             } catch (e) {
//                 console.error('Error fetching blogs:', e);
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops.',
//                     text: 'Something went wrong while fetching the blogs.',
//                     timer: 3000
//                 });
//                 setBlogDatas([]);
//                 setLoading(false);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, [showEditModel]);

//     const handleShowCreateModel = () => setShowCreateModel(true);
//     const handleShowEditModel = () => setShowEditModel(true);
//     const handleEdit = (id, data) => {
//         setBlogData(id);
//         setDataPass(data);
//         handleShowEditModel();
//     };

//     const handleDelete = async (id) => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: 'You will not be able to recover this blog!',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 try {
//                     const response = await deleteBlog(id);
//                     if (response?.data) {
//                         setBlogDatas((prevBlogDatas) => prevBlogDatas.filter((blog) => blog._id !== id));
//                         Swal.fire({
//                             icon: 'success',
//                             title: 'Deleted Successfully.',
//                             text: 'Blog is successfully deleted.',
//                             timer: 3000
//                         });
//                     } else {
//                         Swal.fire({
//                             icon: 'error',
//                             title: 'Oops.',
//                             text: 'Something went wrong while removing the blog.',
//                             timer: 3000
//                         });
//                     }
//                 } catch (error) {
//                     console.error('Error deleting blog:', error);
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Oops.',
//                         text: 'Something went wrong while removing the blog.',
//                         timer: 3000
//                     });
//                 }
//             }
//         });
//     };
    
//     const handleChangeStatus = async (id, status, title, subtitleContent, posterImage) => {
//         const data = {
//             status: status ? 1 : 0,
           
//         };
    
//         try {
//             const result = await updateBlogStatus(data, id);
//             if (result.data) {
//                 setBlogDatas((prevBlogDatas) =>
//                     prevBlogDatas.map((blog) => (blog._id === id ? { ...blog, status: status ? 1 : 0, title, subtitleContent, posterImage } : blog))
//                 );
//                 // Swal.fire({
//                 //     icon: 'success',
//                 //     title: 'Status update',
//                 //     text: 'Blog status updated successfully',
//                 //     timer: 3000
//                 // });
//             }
//         } catch (e) {
//             console.error('Error updating blog status:', e);
//         }
//     };
    

//     const handleFilterChange = (e) => {
//         setFilterCriteria(e.target.value);
//     };

//     const handleSortChange = (e) => {
//         setSortCriteria(e.target.value);
//     };

//     const handleSortOrderChange = () => {
//         setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//     };

//     const filteredBlogs = Array.isArray(blogDatas)
//         ? blogDatas.filter(
//             (blog) =>
//                 blog.title.toLowerCase().includes(filterCriteria.toLowerCase()) ||
//                 blog.blogUrl.toLowerCase().includes(filterCriteria.toLowerCase()) ||
//                 blog.author.toLowerCase().includes(filterCriteria.toLowerCase()) ||
//                 blog.category.toLowerCase().includes(filterCriteria.toLowerCase())
//         )
//         : [];

//     const sortedBlogs = [...filteredBlogs].sort((a, b) => {
//         if (sortCriteria === 'title') {
//             return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
//         } else if (sortCriteria === 'author') {
//             return sortOrder === 'asc' ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author);
//         } else if (sortCriteria === 'blogUrl') {
//             return sortOrder === 'asc' ? a.blogUrl.localeCompare(b.blogUrl) : b.blogUrl.localeCompare(a.blogUrl);
//         } else if (sortCriteria === 'category') {
//             return sortOrder === 'asc' ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category);
//         } else if (sortCriteria === 'date') {
//             return sortOrder === 'asc' ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.createdAt) - new Date(a.createdAt);
//         }
//         return 0;
//     });

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = sortedBlogs.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     return (
//         <>
//             <section className="">
//                 <h1 className="text-center mt-5">Blog Datas</h1>
//                 <div className="d-flex justify-content-end">
//                     <Button variant="primary" className="me-5 mb-2" onClick={handleShowCreateModel}>
//                         Create Blog
//                     </Button>
//                 </div>

//                 <Container>
//                     <Row>
//                         <Col>
//                             <div className="d-flex justify-content-between mb-2">
//                                 <input type="text" placeholder="Filter by title, author, blog url, or category" value={filterCriteria} onChange={handleFilterChange} className="form-control me-2" />
//                                 <select value={sortCriteria} onChange={handleSortChange} className="form-control me-2">
//                                     <option value="">Sort By</option>
//                                     <option value="title">Title</option>
//                                     <option value="author">Author</option>
//                                     <option value="category">Category</option>
//                                     <option value="createdAt">Date</option>
//                                 </select>
//                                 <Button variant="secondary" onClick={handleSortOrderChange}>
//                                     {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
//                                 </Button>
//                             </div>
//                             {filteredBlogs.length > 0 ? (
//                                 <Table striped bordered responsive>
//                                     <thead>
//                                         <tr>
//                                             <th>S.No</th>
//                                             <th>Blog Title</th>
//                                             <th>Author</th>
//                                             <th>Blog URL</th>
//                                             <th>Blog Category</th>
//                                             <th>Date</th>
//                                             <th>Status</th>
//                                             <th>view</th>
//                                             <th>Edit</th>
//                                             <th>Delete</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {loading ? (
//                                             <tr>
//                                                 <td colSpan="10" className="text-center">
//                                                     <PreLoader />
//                                                 </td>
//                                             </tr>
//                                         ) : (
//                                             currentItems.map((data, index) => (
//                                                 <tr key={index}>
//                                                     <td>{indexOfFirstItem + index + 1}</td>
//                                                     <td>{data?.title}</td>
//                                                     <td>{data?.author}</td>
//                                                     <td>{data?.blogUrl}</td>
//                                                     <td>{data?.category}</td>
//                                                     <td>{new Date(data?.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</td>
//                                                     <td>
//                                                         <div className="checkbox-wrapper-51">
//                                                             <input id={`cbx-${data._id}`} type="checkbox" checked={data?.status === 1} onChange={() => handleChangeStatus(data._id, data.status === 1 ? 0 : 1, data.title, data.subtitleContent, data.titleImage)} />
//                                                             <label className="toggle" htmlFor={`cbx-${data._id}`}>
//                                                                 <span>
//                                                                     <svg viewBox="0 0 10 10" height="10px" width="10px">
//                                                                         <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
//                                                                     </svg>
//                                                                 </span>
//                                                             </label>
//                                                         </div>
//                                                     </td>
//                                                     <td>
//                                                         <button onClick={() => handleModelShow(data)} style={{ backgroundColor: 'transparent', border: '0px', outline: '0px', width: '100%', textAlign: 'center' }}>
//                                                             <FaEye size={'1rem'} />
//                                                         </button>
//                                                     </td>
//                                                     <td>
//                                                         <button onClick={() => handleEdit(data?._id, data)} style={{ backgroundColor: 'transparent', border: '0px', outline: '0px', width: '100%', textAlign: 'center' }}>
//                                                             <RiEditBoxFill size={'25px'} color="blue" />
//                                                         </button>
//                                                     </td>
//                                                     <td>
//                                                         <button onClick={() => handleDelete(data?._id)} style={{ backgroundColor: 'transparent', border: '0px', outline: '0px', width: '100%', textAlign: 'center' }}>
//                                                             <FaTrash size={'1rem'} color="red" />
//                                                         </button>
//                                                     </td>
//                                                 </tr>
//                                             ))
//                                         )}
//                                     </tbody>
//                                 </Table>
//                             ) : (
//                                 <PreLoader />
//                             )}
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col className="d-flex justify-content-center">
//                             <section>
//                                 <Button variant="primary" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="me-2">
//                                     Previous
//                                 </Button>
//                                 <Button variant="primary" onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= blogDatas.length} className="me-2">
//                                     Next
//                                 </Button>
//                             </section>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             <Modal show={showCreateModel} onHide={handleClose} backdrop="static" keyboard={false} size="xl" dialogClassName="full-width-modal m-auto">
//                 <Modal.Header closeButton>
//                     <Modal.Title>Create Blog</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body className='m-auto'>
//                     <CreateBlog handleClose={handleClose} setBlogDatas={setBlogDatas} />
//                 </Modal.Body>
//             </Modal>
//             <Modal show={showEditModel} onHide={handleClose} backdrop="static" keyboard={false} size="xl" dialogClassName="full-width-modal m-auto">
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Blog</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body className='m-auto'>
//                     <EditBlog id={dataPass?._id} data={dataPass} setBlogData={setBlogDatas} handleClose={handleClose} />
//                 </Modal.Body>
//             </Modal>
//             <Modal show={showModel} onHide={handleClose} backdrop="static" keyboard={false} size="xl" dialogClassName="full-width-modal m-auto">
//                 <Modal.Header closeButton>
//                     <Modal.Title>View</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body className='m-auto'>
//                     <BlogView data={dataPass} />
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button onClick={handleClose} variant="danger">
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default BlogForms;

// ====================================================================================
// ====================================================================================
// ====================================================================================
// ====================================================================================
// ====================================================================================

'use client';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { deleteBlog, getAllBlogs, updateBlogStatus } from '@/api/BlogAPIs';
import CreateBlog from './CreateBlog';
import EditBlog from './EditBlog';
import './BlogForm.scss';
import { FaEye, FaTrash } from 'react-icons/fa';
import { RiEditBoxFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import BlogView from './BlogView';
import PreLoader from '@/components/PreLoader';

function BlogForms() {
    const [blogDatas, setBlogDatas] = useState([]);
    const [blogData, setBlogData] = useState('');
    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showEditModel, setShowEditModel] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [filterCriteria, setFilterCriteria] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [showModel, setShowModel] = useState(false);
    const [dataPass, setDataPass] = useState();
    const [loading, setLoading] = useState(false);

    const handleClose = () => {
        if (showCreateModel) {
            setShowCreateModel(false);
        } else if (showEditModel) {
            setShowEditModel(false);
        } else if (showModel) {
            setShowModel(false);
        }
    };

    const handleModelShow = (value) => {
        setDataPass(value);
        setShowModel(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await getAllBlogs();
                if (result.data && Array.isArray(result.data.blogs)) {
                    setBlogDatas(result.data.blogs);
                } else {
                    console.error('Unexpected data format:', result.data);
                }
            } catch (e) {
                console.error('Error fetching blogs:', e);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops.',
                    text: 'Something went wrong while fetching the blogs.',
                    timer: 3000
                });
                setBlogDatas([]);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [showEditModel]);

    const handleShowCreateModel = () => setShowCreateModel(true);
    const handleShowEditModel = () => setShowEditModel(true);
    const handleEdit = (id, data) => {
        setBlogData(id);
        setDataPass(data);
        handleShowEditModel();
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this blog!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await deleteBlog(id);
                    if (response?.data) {
                        setBlogDatas((prevBlogDatas) => prevBlogDatas.filter((blog) => blog._id !== id));
                        Swal.fire({
                            icon: 'success',
                            title: 'Deleted Successfully.',
                            text: 'Blog is successfully deleted.',
                            timer: 3000
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops.',
                            text: 'Something went wrong while removing the blog.',
                            timer: 3000
                        });
                    }
                } catch (error) {
                    console.error('Error deleting blog:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops.',
                        text: 'Something went wrong while removing the blog.',
                        timer: 3000
                    });
                }
            }
        });
    };
    
    const handleChangeStatus = async (id, status, title, subtitleContent, posterImage) => {
        const data = {
            status: status ? 1 : 0,
           
        };
    
        try {
            const result = await updateBlogStatus(data, id);
            if (result.data) {
                setBlogDatas((prevBlogDatas) =>
                    prevBlogDatas.map((blog) => (blog._id === id ? { ...blog, status: status ? 1 : 0, title, subtitleContent, posterImage } : blog))
                );
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Status update',
                //     text: 'Blog status updated successfully',
                //     timer: 3000
                // });
            }
        } catch (e) {
            console.error('Error updating blog status:', e);
        }
    };
    

    const handleFilterChange = (e) => {
        setFilterCriteria(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    const handleSortOrderChange = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const filteredBlogs = Array.isArray(blogDatas)
        ? blogDatas.filter(
            (blog) =>
                blog.title.toLowerCase().includes(filterCriteria.toLowerCase()) ||
                blog.blogUrl.toLowerCase().includes(filterCriteria.toLowerCase()) ||
                blog.author.toLowerCase().includes(filterCriteria.toLowerCase()) ||
                blog.category.toLowerCase().includes(filterCriteria.toLowerCase())
        )
        : [];

        const sortedBlogs = [...filteredBlogs].sort((a, b) => {
            if (sortCriteria === 'title') {
                return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
            } else if (sortCriteria === 'author') {
                return sortOrder === 'asc' ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author);
            } else if (sortCriteria === 'blogUrl') {
                return sortOrder === 'asc' ? a.blogUrl.localeCompare(b.blogUrl) : b.blogUrl.localeCompare(a.blogUrl);
            } else if (sortCriteria === 'category') {
                return sortOrder === 'asc' ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category);
            } else if (sortCriteria === 'createdAt') {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
            }
            return 0;
        });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedBlogs.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className="">
                <h1 className="text-center mt-5">Blog Datas</h1>
                <div className="d-flex justify-content-end">
                    <Button variant="primary" className="me-5 mb-2" onClick={handleShowCreateModel}>
                        Create Blog
                    </Button>
                </div>

                <Container>
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-between mb-2">
                                <input type="text" placeholder="Filter by title, author, blog url, or category" value={filterCriteria} onChange={handleFilterChange} className="form-control me-2" />
                                <select value={sortCriteria} onChange={handleSortChange} className="form-control me-2">
                                    <option value="">Sort By</option>
                                    <option value="title">Title</option>
                                    <option value="author">Author</option>
                                    <option value="category">Category</option>
                                    <option value="createdAt">Date</option>
                                </select>
                                <Button variant="secondary" onClick={handleSortOrderChange}>
                                    {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                                </Button>
                            </div>
                            {filteredBlogs.length > 0 ? (
                                <Table striped bordered responsive>
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Blog Title</th>
                                            <th>Author</th>
                                            <th>Blog URL</th>
                                            <th>Blog Category</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>view</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan="10" className="text-center">
                                                    <PreLoader />
                                                </td>
                                            </tr>
                                        ) : (
                                            currentItems.map((data, index) => (
                                                <tr key={index}>
                                                    <td>{indexOfFirstItem + index + 1}</td>
                                                    <td>{data?.title}</td>
                                                    <td>{data?.author}</td>
                                                    <td>{data?.blogUrl}</td>
                                                    <td>{data?.category}</td>
                                                    <td>{new Date(data?.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</td>
                                                    <td>
                                                        <div className="checkbox-wrapper-51">
                                                            <input id={`cbx-${data._id}`} type="checkbox" checked={data?.status === 1} onChange={() => handleChangeStatus(data._id, data.status === 1 ? 0 : 1, data.title, data.subtitleContent, data.titleImage)} />
                                                            <label className="toggle" htmlFor={`cbx-${data._id}`}>
                                                                <span>
                                                                    <svg viewBox="0 0 10 10" height="10px" width="10px">
                                                                        <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
                                                                    </svg>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => handleModelShow(data)} style={{ backgroundColor: 'transparent', border: '0px', outline: '0px', width: '100%', textAlign: 'center' }}>
                                                            <FaEye size={'1rem'} />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => handleEdit(data?._id, data)} style={{ backgroundColor: 'transparent', border: '0px', outline: '0px', width: '100%', textAlign: 'center' }}>
                                                            <RiEditBoxFill size={'25px'} color="blue" />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => handleDelete(data?._id)} style={{ backgroundColor: 'transparent', border: '0px', outline: '0px', width: '100%', textAlign: 'center' }}>
                                                            <FaTrash size={'1rem'} color="red" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </Table>
                            ) : (
                                <PreLoader />
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center mb-2">
                            <section>
                                <Button variant="primary" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="me-2">
                                    Previous
                                </Button>
                                <Button variant="primary" onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= blogDatas.length} className="me-2">
                                    Next
                                </Button>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Modal show={showCreateModel} onHide={handleClose} backdrop="static" keyboard={false} size="xl" dialogClassName="full-width-modal m-auto">
                <Modal.Header closeButton>
                    <Modal.Title>Create Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body className='m-auto'>
                    <CreateBlog handleClose={handleClose} setBlogDatas={setBlogDatas} />
                </Modal.Body>
            </Modal>
            <Modal show={showEditModel} onHide={handleClose} backdrop="static" keyboard={false} size="xl" dialogClassName="full-width-modal m-auto">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body className='m-auto'>
                    <EditBlog id={dataPass?._id} data={dataPass} setBlogData={setBlogDatas} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
            <Modal show={showModel} onHide={handleClose} backdrop="static" keyboard={false} size="xl" dialogClassName="full-width-modal m-auto">
                <Modal.Header closeButton>
                    <Modal.Title>View</Modal.Title>
                </Modal.Header>
                <Modal.Body className='m-auto'>
                    <BlogView data={dataPass} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="danger">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BlogForms;
