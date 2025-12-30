
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { CSVLink } from 'react-csv';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';

const Export = ({ ExportData, handleClose,exportFileName,titleHeadFields }) => {
    const [returnCondition, setReturnCondition] = useState(false);
    const object = ExportData;

    useEffect(() => {
        setReturnCondition(object.length > 0);
    }, [object]);

    const replaceFunction = (data) => {
        if (typeof data === 'string') {
            return data.replace(/(<([^>]+)>)/gi, '');
        } else {
            return data;
        }
    };

    const handleDownload = () => {
        Swal.fire({
            icon: 'success',
            title: 'Leads Successfully Exported',
            showConfirmButton: true,
            timer: 32000,
            text: 'The Leads have been successfully exported.'
        });
    };

    const fileName = object.length > 0 ? `${exportFileName}.csv` : 'export.csv';

    return (
        <div>
            {returnCondition ? (
                <div>
                    {/* <h1>Export All Data</h1> */}
                    <div style={{ width: '100%', overflow: 'auto', padding: '2%' }} className='mt-4'>
                        <Table striped bordered hover style={{ width: '90%', overflow: 'auto', border: '2px solid blue' }}>
                            <thead>
                                <tr>
                                    {titleHeadFields.map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {object.map((data, index) => (
                                    <tr key={index}>
                                        {Object.keys(data).map((key) => (
                                            <td key={key} style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                                                {replaceFunction(typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key])}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className="csv-button" style={{ marginTop: '20px' }}>
                        <CSVLink data={object} filename={fileName} style={{ textDecoration: 'none' }}>
                            <Button variant="primary"  onClick={handleDownload} >
                                Download
                            </Button>
                        </CSVLink>
                        <Button variant="secondary" onClick={handleClose} style={{ marginLeft: '10px' }}>
                            Cancel
                        </Button>

                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="text-center">No data found</h1>
                </div>
            )}
        </div>
    );
};

export default Export;
