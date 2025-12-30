'use client';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { contactUsDeleteAPI, contactUsGetAllAPI } from '@/api/ArcmenFormAPI';
import Export from '@/components/Export';
import { FaTrash } from 'react-icons/fa';
import ContactusSComponent from './ContactusSComponent';
import { FaEye } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

function AdminPage() {
    const [contactusData, setContactusData] = useState([
        { name: 'sam', email: 'sam@gmail.com', mobileNumber: '1234567', projectLocation: 'chennai', service: 'kango', message: 'demo message showing', createdAt: '2024-11-24T07:31:42.187Z',updatedAt:'2024-12-24T07:31:42.187Z' },
        { name: 'kishore', email: 'kishore@gmail.com', mobileNumber: '1234567890', projectLocation: 'bangalore', service: 'kango', message: 'demo2 message showing', createdAt: '2024-04-24T07:31:42.187Z',updatedAt:'2024-12-24T07:31:42.187Z' },
    ]);
    const [show, setShow] = useState(false);
    const [showModel, setShowModel] = useState(false);
    const [dataPass, setDataPass] = useState();
    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [filterField, setFilterField] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [selectedLeads, setSelectedLeads] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const handleClose = () => {
        setShow(false);
        setShowModel(false);
    };
    const handleShow = () => setShow(true);
    const handleModelShow = (data) => {
        setShowModel(true);
        setDataPass(data);
    };

    const containedField = ['name', 'email', 'mobileNumber','projectLocation','service','messages','createdAt','updatedAt'];
    const titleHeadFields = ['S.No', 'Name', 'Email', 'Mobile Number','Project Location','Service','Messages','Created Date','Last Modified'];

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await contactUsGetAllAPI();
    //             if (response) setContactusData(response?.data);
    //             else {
    //                 setContactusData([]);
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    const handleDelete = async (id) => {
        try {
            const fetchData = await contactUsDeleteAPI(id);
            if (fetchData) {
                setContactusData(fetchData?.data);
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    };

    const filterDataForExport = () => {
        return selectedLeads.map((item, index) => {
            const filteredItem = { sno: index + 1 };
            containedField.forEach((field) => {
                if (item.hasOwnProperty(field)) {
                    filteredItem[field] = item[field];
                }
            });
            return filteredItem;
        });
    };

    const exportData = filterDataForExport();

    const handleSort = (field) => {
        let order;
        if (sortField === field) {
            if (sortOrder === 'asc') {
                order = 'desc';
            } else if (sortOrder === 'desc') {
                order = null;
            } else {
                order = 'asc';
            }
        } else {
            order = 'asc';
        }
        setSortField(field);
        setSortOrder(order);
    };

    const handleFilterChange = (value) => {
        setFilterValue(value);
        setCurrentPage(1); // Reset to the first page when filters change
    };

    const filteredData = contactusData.filter((item) => {
        if (!filterField || !filterValue) return true;
        return item[filterField]?.toLowerCase().includes(filterValue.toLowerCase());
    });

    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortField || !sortOrder) return 0;
        const order = sortOrder === 'asc' ? 1 : -1;
        return a[sortField] > b[sortField] ? order : -order;
    });

    const handleSelectLead = (lead) => {
        setSelectedLeads((prevSelectedLeads) => {
            if (prevSelectedLeads.includes(lead)) {
                return prevSelectedLeads.filter((l) => l !== lead);
            } else {
                return [...prevSelectedLeads, lead];
            }
        });
    };

    const handleSelectAll = () => {
        if (selectedLeads.length === sortedData.length) {
            setSelectedLeads([]);
        } else {
            setSelectedLeads([...sortedData]);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className="">
                <h1 className="text-center mt-5">Contact Us Leads</h1>
                <div className="d-flex justify-content-end">
                    <Button variant="primary" className="me-5 mb-2" onClick={handleShow}>
                        Export Data ({selectedLeads.length})
                    </Button>
                </div>

                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Control className="mb-3" as="select" value={filterField} onChange={(e) => setFilterField(e.target.value)}>
                                            <option value="">Select Field</option>
                                            <option value="name">Name</option>
                                            <option value="email">Email</option>
                                            <option value="mobileNumber">Mobile Number</option>
                                            <option value="projectLocation">Project Location</option>
                                            <option value="service">Service</option>
                                            <option value="createdAt">createdAt</option>
                                            <option value="updatedAt">updatedAt</option>
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Control className="mb-3" type="text" placeholder="Filter" value={filterValue} onChange={(e) => handleFilterChange(e.target.value)} />
                                    </Col>
                                </Row>
                            </Form>
                            {currentItems?.length > 0 ? (
                                <Table striped bordered responsive>
                                    <thead>
                                        <tr>
                                            <th>
                                                <Form.Check type="checkbox" onChange={handleSelectAll} checked={selectedLeads.length === sortedData.length} />
                                            </th>
                                            <th>S.No</th>
                                            <th onClick={() => handleSort('name')}>Name {sortField === 'name' && (sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : '↑↓')}</th>
                                            <th onClick={() => handleSort('email')}>Email {sortField === 'email' && (sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : '↑↓')}</th>
                                            <th onClick={() => handleSort('mobileNumber')}>Mobile Number {sortField === 'mobileNumber' && (sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : '↑↓')}</th>
                                            <th onClick={() => handleSort('projectLocation')}>Project Location {sortField === 'projectLocation' && (sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : '↑↓')}</th>
                                            <th onClick={() => handleSort('service')}>Service {sortField === 'service' && (sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : '↑↓')}</th>
                                            <th onClick={() => handleSort('createdAt')}>Created Date {sortField === 'createdAt' && (sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : '↑↓')}</th>
                                            <th onClick={() => handleSort('updatedAt')}>Last Modified {sortField === 'updatedAt' && (sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : '↑↓')}</th>
                                            <th>View</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems?.map((data, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <Form.Check type="checkbox" onChange={() => handleSelectLead(data)} checked={selectedLeads.includes(data)} />
                                                </td>
                                                <td>{indexOfFirstItem + index + 1}</td>
                                                <td>{data?.name}</td>
                                                <td>{data?.email}</td>
                                                <td>{data?.mobileNumber}</td>
                                                <td>{data?.projectLocation}</td>
                                                <td>{data?.service}</td>
                                                <td>{data?.createdAt}</td>
                                                <td>{data?.updatedAt}</td>
                                                <td>
                                                    <button onClick={() => handleModelShow(data)} style={{ backgroundColor: 'transparent', border: '0px', outline: '0px', width: '100%', textAlign: 'center' }}>
                                                        <FaEye size={'1rem'} />
                                                    </button>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDelete(data?.id)} style={{ backgroundColor: 'transparent', border: '0px', outline: '0px', width: '100%', textAlign: 'center' }}>
                                                        <FaTrash size={'1rem'} color="red" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            ) : (
                                <>
                                    <Table striped bordered responsive>
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile Number</th>
                                                <th>Project Location</th>
                                                <th>Service</th>
                                                <th>Created Date</th>
                                                <th>Last Modified</th>
                                                <th>View</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={10}>
                                                    <h1 className="text-center">No Leads Found</h1>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </>
                            )}
                            <div className="d-flex justify-content-center mt-3 mb-5">
                                <Button variant="primary" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                                    Previous
                                </Button>
                                {Array.from({ length: Math.ceil(sortedData.length / itemsPerPage) }, (_, i) => (
                                    <Button key={i} variant={currentPage === i + 1 ? 'primary' : 'outline-primary'} onClick={() => paginate(i + 1)} className="mx-1">
                                        {i + 1}
                                    </Button>
                                ))}
                                <Button variant="primary" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(sortedData.length / itemsPerPage)}>
                                    Next
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Contacts Lead Export</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Export ExportData={exportData} handleClose={handleClose} exportFileName={'Contact Us'} titleHeadFields={titleHeadFields} />
                </Modal.Body>
            </Modal>
            <Modal show={showModel} onHide={handleClose} backdrop="static" keyboard={false} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>View</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactusSComponent data={dataPass} />
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

export default AdminPage;
