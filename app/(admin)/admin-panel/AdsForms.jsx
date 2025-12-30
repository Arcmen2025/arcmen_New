'use client';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { deleteAds, getAllAds, updateAds } from '@/api/AdsPostingAPI';
import './BlogForm.scss';
import { FaEye, FaTrash } from 'react-icons/fa';
import { RiEditBoxFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import CreateAds from './CreateAds';
import EditAds from './EditAds';
import AdsView from './AdsView';
import PreLoader from '@/components/PreLoader';

function AdsForms() {
    const [adsDatas, setAdsDatas] = useState([]);
    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showEditModel, setShowEditModel] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [filterCriteria, setFilterCriteria] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [showModel, setShowModel] = useState(false);
    const [dataPass, setDataPass] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClose = () => {
        setShowCreateModel(false);
        setShowEditModel(false);
        setShowModel(false);
    };

    const handleModelShow = (value) => {
        setDataPass(value);
        setShowModel(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await getAllAds();
                if (result.data && Array.isArray(result.data.posters)) {
                    setAdsDatas(result.data.posters);
                } else {
                    console.error('Unexpected data format:', result.data);
                }
            } catch (e) {
                console.error('Error fetching ads:', e);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops.',
                    text: 'Something went wrong while fetching the ads.',
                    timer: 3000
                });
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [showEditModel]);

    const handleShowCreateModel = () => setShowCreateModel(true);
    const handleShowEditModel = () => setShowEditModel(true);
    const handleEdit = (id, data) => {
        setDataPass(data);
        handleShowEditModel();
    };

    // const handleDelete = async (id) => {
    //     try {
    //         const fetchData = await deleteAds(id);
    //         if (fetchData?.data) {
    //             setAdsDatas(fetchData?.data);
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Delete Successfully.',
    //                 text: 'Poster is successfully deleted.',
    //                 timer: 3000
    //             });
    //             const result = await getAllAds();
    //             if (result?.data && Array.isArray(result.data.posters)) {
    //                 setAdsDatas(result.data.posters);
    //             }
    //         } else {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                 text: 'Something went wrong while removing the poster.',
    //                 timer: 3000
    //             });
    //         }
    //     } catch (error) {
    //         console.error('Error deleting ad:', error);
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'Something went wrong while removing the poster.',
    //             timer: 3000
    //         });
    //     }
    // };


    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this poster!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const fetchData = await deleteAds(id);
                    if (fetchData?.data) {
                        setAdsDatas((prevAdsDatas) => prevAdsDatas.filter((ad) => ad._id !== id));
                        Swal.fire({
                            icon: 'success',
                            title: 'Delete Successfully.',
                            text: 'Poster is successfully deleted.',
                            timer: 3000
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong while removing the poster.',
                            timer: 3000
                        });
                    }
                } catch (error) {
                    console.error('Error deleting ad:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong while removing the poster.',
                        timer: 3000
                    });
                }
            }
        });
    };
    
    const handleChangeStatus = async (id, status, title, subtitleContent, posterImage) => {
        const formData = new FormData();
        formData.append('status', status ? 1 : 0);
        formData.append('title', title);
        formData.append('subtitleContent', subtitleContent);
        formData.append('posterImage', posterImage);

        try {
            const result = await updateAds(formData, id);
            if (result.data) {
                // console.log('Status updated successfully:', result.data);
                setAdsDatas((prevAdsDatas) => prevAdsDatas.map((blog) => (blog._id === id ? { ...blog, status: status ? 1 : 0, title, subtitleContent, posterImage } : blog)));

            } else {
                console.error('Unexpected response:', result);
            }
        } catch (e) {
            console.error('Error updating ad status:', e);
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

    const filteredAds = Array.isArray(adsDatas) ? adsDatas.filter((blog) => blog.title.toLowerCase().includes(filterCriteria.toLowerCase())) : [];

    const sortedAds = [...filteredAds].sort((a, b) => {
        if (sortCriteria === 'title') {
            return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        } else if (sortCriteria === 'date') {
            return sortOrder === 'asc' ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.createdAt) - new Date(a.createdAt);
        }
        return 0;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedAds.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className="">
                <h1 className="text-center mt-5">Poster Datas</h1>
                <div className="d-flex justify-content-end">
                    <Button variant="primary" className="me-5 mb-2" onClick={handleShowCreateModel}>
                        Create Poster
                    </Button>
                </div>

                <Container>
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-between mb-2">
                                <input type="text" placeholder="Filter by title, date" value={filterCriteria} onChange={handleFilterChange} className="form-control me-2" />
                                <select value={sortCriteria} onChange={handleSortChange} className="form-control me-2">
                                    <option value="">Sort By</option>
                                    <option value="title">Title</option>
                                    <option value="createdAt">Date</option>
                                </select>
                                <Button variant="secondary" onClick={handleSortOrderChange}>
                                    {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                                </Button>
                            </div>
                            {loading ? (
                                <PreLoader />
                            ) : (
                                <>
                                    {filteredAds.length > 0 ? (
                                        <Table striped bordered responsive>
                                            <thead>
                                                <tr>
                                                    <th>S.No</th>
                                                    <th>Poster Title</th>
                                                    <th>Poster description</th>
                                                    <th>Poster Image</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>view</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentItems.map((data, index) => (
                                                    <tr key={index}>
                                                        <td>{indexOfFirstItem + index + 1}</td>
                                                        <td>{data?.title}</td>
                                                        <td>{data?.subtitleContent}</td>
                                                        <td>
                                                            <img src={data.posterImage} alt="poster image" style={{ width: '100px' }} />
                                                        </td>
                                                        <td>{new Date(data?.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</td>
                                                        <td>
                                                            <div className="checkbox-wrapper-51">
                                                                <input
                                                                    id={`cbx-${data._id}`}
                                                                    type="checkbox"
                                                                    checked={data?.status === 1}
                                                                    onChange={() => handleChangeStatus(data._id, data.status === 1 ? 0 : 1, data.title, data.subtitleContent, data.posterImage)}
                                                                />
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
                                                            <button onClick={() => handleDelete(data)} style={{ backgroundColor: 'transparent', border: '0px', outline: '0px', width: '100%', textAlign: 'center' }}>
                                                                <FaTrash size={'1rem'} color="red" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    ) : (
                                        <h1 className="text-center">No Data Found</h1>
                                    )}
                                </>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center mb-2">
                            <section>
                                <Button variant="primary" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="me-2">
                                    Previous
                                </Button>
                                <Button variant="primary" onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= adsDatas?.length} className="me-2">
                                    Next
                                </Button>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Modal show={showCreateModel} onHide={handleClose} backdrop="static" keyboard={false} size="xl" dialogClassName="full-width-modal m-auto">
                <Modal.Header closeButton>
                    <Modal.Title>Create Poster</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-5">
                    <CreateAds handleClose={handleClose} setAdsDatas={setAdsDatas} />
                </Modal.Body>
            </Modal>
            <Modal show={showEditModel} onHide={handleClose} backdrop="static" keyboard={false} size="xl" dialogClassName="full-width-modal m-auto">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Poster</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-5">
                    <EditAds data={dataPass} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
            <Modal show={showModel} onHide={handleClose} backdrop="static" keyboard={false} size="xl" dialogClassName="full-width-modal m-auto" >
                <Modal.Header closeButton>
                    <Modal.Title>View Poster</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-5" >
                    <AdsView  data={dataPass} />
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

export default AdsForms;
