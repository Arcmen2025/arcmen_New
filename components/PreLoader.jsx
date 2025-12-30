// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import '../style/Loading.css'; // Assuming you save the CSS in a separate file

// const PreLoader = () => {
//   return (
//     <Container fluid className="d-flex justify-content-center align-items-center vh-100">
//       <Row>
//         <Col className="text-center">
//           <div className="boxes">
//             <div className="box">
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>
//             <div className="box">
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>
//             <div className="box">
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>
//             <div className="box">
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default PreLoader;

// ==============================================================================================================================================
// ==============================================================================================================================================
// ==============================================================================================================================================
// ==============================================================================================================================================
// ==============================================================================================================================================
// ==============================================================================================================================================
// ==============================================================================================================================================
// ==============================================================================================================================================
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/Loading.css'; // Assuming you save the CSS in a separate file

const PreLoader = () => {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <Row>
                <Col className="text-center">
                    {/* <div className="boxes">
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div> */}

                    <div className="loading">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PreLoader;
