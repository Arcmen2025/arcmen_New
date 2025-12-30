// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import './interior.css';
// import Link from 'next/link';
// import AutoSlider from '@/components/slider/slider';
// import { useParams } from 'next/navigation';
// import PreLoader from '@/components/PreLoader';
// const interiorProjects = [
//     {
//         headingTitel: 'Mr.Joseph Sibi',
//         titleUrl: 'elevation-design-architectural',
//         interiorType: 'Elevation Design ',
//         location: 'Thirumullaivoyal',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735623898/arcmen/Architectural%20Design%20Projects/Joseph%20Sibi/joseph-sibi-02.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735623845/arcmen/Architectural%20Design%20Projects/Joseph%20Sibi/joseph-sibi-01.jpg'
//         ]
//     },
//     {
//         headingTitel: 'Dr.Neelkandan',
//         titleUrl: 'interior-design-architectural',
//         interiorType: 'Interior Design',
//         location: 'Peravurani, Thanjavur',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735624316/arcmen/Architectural%20Design%20Projects/neelkandan/neelkandan-02.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735629632/arcmen/Architectural%20Design%20Projects/neelkandan/neelkandan-03.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735629718/arcmen/Architectural%20Design%20Projects/neelkandan/neelkandan-04.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735629764/arcmen/Architectural%20Design%20Projects/neelkandan/neelkandan-01.jpg'
//         ]
//     },
//     {
//         headingTitel: 'Maddena',
//         titleUrl: 'interior-design-valasaravakkam-architectural',
//         interiorType: 'Interior Design',
//         location: 'Valasaravakkam, Chennai',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735630053/arcmen/Architectural%20Design%20Projects/maddena/maddena-01.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735630386/arcmen/Architectural%20Design%20Projects/maddena/maddena-02.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735630458/arcmen/Architectural%20Design%20Projects/maddena/maddena-03.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735630489/arcmen/Architectural%20Design%20Projects/maddena/maddena-04.jpg'
//         ]
//     },
//     {
//         headingTitel: 'Mr.Muralidharan',
//         titleUrl: 'living-room-double-height-interior-design-architectural',
//         interiorType: 'Living Room Double Height Interior Design',
//         location: 'Mayiladuthurai',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735630697/arcmen/Architectural%20Design%20Projects/muralidharan/muralidharan-02.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735630749/arcmen/Architectural%20Design%20Projects/muralidharan/muralidharan-03.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735630791/arcmen/Architectural%20Design%20Projects/muralidharan/muralidharan-04.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735630854/arcmen/Architectural%20Design%20Projects/muralidharan/muralidharan-01.jpg'
//         ]
//     },
//     {
//         headingTitel: 'Mr.Shaul',
//         titleUrl: 'duplex-house-elevation-design-architectural',
//         interiorType: 'Duplex House Elevation Design',
//         location: 'Peravurani, Thanjavur',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735631339/arcmen/Architectural%20Design%20Projects/shaul/shaul-03.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735631389/arcmen/Architectural%20Design%20Projects/shaul/shaul-04.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735631458/arcmen/Architectural%20Design%20Projects/shaul/shaul-01.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735631518/arcmen/Architectural%20Design%20Projects/shaul/shaul-02.jpg'
//         ]
//     },
//     {
//         headingTitel: 'IlayasMr.ilayas',
//         titleUrl: 'duplux-house-elevation-design-peravurani-architectural',
//         interiorType: 'Duplux House Elevation Design',
//         location: 'Kumbakonam',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735639693/arcmen/Architectural%20Design%20Projects/Ilayas/ilyas-04.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735639643/arcmen/Architectural%20Design%20Projects/Ilayas/ilyas-03.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735639607/arcmen/Architectural%20Design%20Projects/Ilayas/ilyas-02.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735639052/arcmen/Architectural%20Design%20Projects/Ilayas/ilyas-01.jpg'
//         ]
//     },
//     {
//         headingTitel: 'Mr.Rajendera Kumar',
//         titleUrl: 'pool-terrace-design-architectural',
//         interiorType: 'Pool Terrace Design',
//         location: ' Besant Nagar, Chennai',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735639973/arcmen/Architectural%20Design%20Projects/Rajendera/rajendra-kumar-01.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735640126/arcmen/Architectural%20Design%20Projects/Rajendera/rajendra-kumar-02.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735640171/arcmen/Architectural%20Design%20Projects/Rajendera/rajendra-kumar-03.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735640309/arcmen/Architectural%20Design%20Projects/Rajendera/rajendra-kumar-04.jpg'
//         ]
//     },
//     {
//         headingTitel: 'MS.Jean interior',
//         titleUrl: 'bedroom-interior-design-architectural',
//         interiorType: 'Bedroom Interior Design',
//         location: '',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735640574/arcmen/Architectural%20Design%20Projects/jean-interior/jean-interior-02.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735640608/arcmen/Architectural%20Design%20Projects/jean-interior/jean-interior-03.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735640642/arcmen/Architectural%20Design%20Projects/jean-interior/jean-interior-04.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735640708/arcmen/Architectural%20Design%20Projects/jean-interior/jean-interior-01.jpg'
//         ]
//     },
//     {
//         headingTitel: 'Mr.Suresh',
//         titleUrl: 'duplex-house-elevation-design-nolambur-architectural',
//         interiorType: 'Duplex House Elevation Design',
//         location: 'Nolambur, Chennai',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735641048/arcmen/Architectural%20Design%20Projects/Suresh/suresh-04.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735640964/arcmen/Architectural%20Design%20Projects/Suresh/Suresh-3.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735641002/arcmen/Architectural%20Design%20Projects/Suresh/suresh-02.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735640919/arcmen/Architectural%20Design%20Projects/Suresh/Suresh%20-%2001.jpg'
//         ]
//     },
//     {
//         headingTitel: 'Mr.Mahaveer',
//         titleUrl: 'duplex-villa-elevation-design-architectural',
//         interiorType: 'Duplex Villa Elevation Design',
//         location: '',
//         sections: [],
//         sliderImages: ['https://res.cloudinary.com/dpflidsbg/image/upload/v1735641343/arcmen/Architectural%20Design%20Projects/Mahaveer/Mahaveer-1.jpg']
//     },
//     {
//         headingTitel: 'House of Glass',
//         titleUrl: 'house-of-glass-front-elevation-design-architectural',
//         interiorType: 'House of Glass Front Elevation Design',
//         location: '',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735641576/arcmen/Architectural%20Design%20Projects/House%20of%20Glass/house-of-glass-01.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735641527/arcmen/Architectural%20Design%20Projects/House%20of%20Glass/house-of-glass-02.jpg'
//         ]
//     },
//     {
//         headingTitel: 'Mr.Balu',
//         titleUrl: 'villa-landscape-design-architectural',
//         interiorType: 'Villa Landscape Design',
//         location: 'Peravurani, Thanjavur',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735641681/arcmen/Architectural%20Design%20Projects/Balu/Balu-01.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735641741/arcmen/Architectural%20Design%20Projects/Balu/Balu-02.jpg'
//         ]
//     },
//     {
//         headingTitel: 'Row House',
//         titleUrl: 'row-house-architectural',
//         interiorType: 'Row House',
//         location: '',
//         sections: [],
//         sliderImages: ['https://res.cloudinary.com/dpflidsbg/image/upload/v1735642034/arcmen/Architectural%20Design%20Projects/Row%20House/Row%20House-01.jpg']
//     },
//     {
//         headingTitel: 'Mr.Sadik',
//         titleUrl: 'villa-elevation-design-sadik-architectural',
//         interiorType: 'Villa Elevation Design',
//         location: '',
//         sections: [],
//         sliderImages: ['https://res.cloudinary.com/dpflidsbg/image/upload/v1735643037/arcmen/Architectural%20Design%20Projects/sadik/sadik01.jpg']
//     },
//     {
//         headingTitel: 'Ayyampettai, Thanjavur',
//         titleUrl: 'duplex-house-elevation-design-front-ayyampettai-architectural',
//         interiorType: 'Duplex House Elevation Design Front',
//         location: 'Ayyampettai, Thanjavur',
//         sections: [],
//         sliderImages: [
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735643160/arcmen/Architectural%20Design%20Projects/Ayyampettai/Ayyampettai%20-%2001.jpg',
//             'https://res.cloudinary.com/dpflidsbg/image/upload/v1735643201/arcmen/Architectural%20Design%20Projects/Ayyampettai/Ayyampettai%20-02.jpg'
//         ]
//     }
// ];

// const Page = () => {
//     const { architectural } = useParams();
//     const [mappedData, setMappedData] = useState(null);

//     useEffect(() => {
//         if (architectural) {
//             const filteredData = interiorProjects.find((val) => val.titleUrl === architectural);
//             setMappedData(filteredData);
//         }
//     }, [architectural]);

//     if (!mappedData) {
//         return <div><PreLoader/></div>; // or any loading indicator
//     }

//     return (
//         <div>
//             <section>
//                 <Container fluid className="head-inter align-content-center">
//                     <Row>
//                         <Col className="text-center p-0 m-0">
//                             <h1 className="p-0 m-0">{mappedData.headingTitel}</h1>
//                             <p className="p-0 m-0">
//                                 <Link href="/">HOME</Link> / <Link href="../architectural-projects"> ARCHITECTURAL PROJECTS </Link> / {mappedData.headingTitel.toUpperCase()}
//                             </p>
//                         </Col>
//                     </Row>
//                 </Container>

//                 <Container>
//                     <Row className="Raja-text">
//                         <Col>
//                             <h2>{mappedData.headingTitel}</h2>
//                             {mappedData?.location ? (
//                                 <h3>
//                                     <strong> Location</strong> : {mappedData.location}
//                                 </h3>
//                             ) : (
//                                 <></>
//                             )}
//                             <h3>
//                                 <strong>Interior Type</strong> : {mappedData.interiorType}
//                             </h3>
//                             {mappedData?.sections.length > 0 ? <h3>“Client Testimonials”</h3> : ''}

//                             {mappedData.sections.map((Testimonialscontent, index) => (
//                                 <p key={index}>{Testimonialscontent}</p>
//                             ))}
//                         </Col>
//                     </Row>
//                 </Container>
//                 {mappedData.sliderImages.length > 0 ? (
//                     <Container>
//                         <Row>
//                             <Col>
//                                 <AutoSlider sliderImages={mappedData.sliderImages} />
//                             </Col>
//                         </Row>
//                     </Container>
//                 ) : (
//                     <></>
//                 )}

//                 {/* <Container>
//                     <Row className="card-Projects">
//                         <Col sm="12 text-center">
//                             <h4>Our Other Projects</h4>
//                         </Col>
//                         <Col sm="12" md={4} className="image-container mb-3">
//                             <div className="project-card">
//                                 <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216348/arcmen/Gallery/interior-design-projects/raja-famaly-tiruttani.jpg" alt="raja-famaly-tiruttani" className="image"></img>
//                                 <div className="overlay">
//                                     <Link href="interior-design-projects/mr-raja-family/">Mr Raja & Family</Link>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col sm="12" md={4} className="image-container mb-3">
//                             <div className="project-card">
//                                 <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216494/arcmen/Gallery/interior-design-projects/moha-family.jpg " className="image"></img>
//                                 <div className="overlay">
//                                     <Link href="interior-design-projects/mr-mohan-family/">Mr Mohan & Family</Link>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col sm="12" md={4} className="image-container mb-3">
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205772/arcmen/Architectural/rajendera-kumar.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                     <Link href="architectural-projects/pool-terrace-design-architectural/">Mr.Rajendera Kumar</Link>
//                                     <p>Besant Nagar, Chennai</p>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container> */}

//                 <Container>
//                     <Row className="card-Projects">
//                         <Col sm="12 text-center">
//                             <h4>Our Other Projects</h4>
//                         </Col>
//                         <Col sm="12" md={4} className="image-container mb-3">
//                             <div className='image-container-div'>
//                                 <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216439/arcmen/Gallery/interior-design-projects/arun-Highlights.jpg" alt="Mr Arun & Family" className="img-fluid w-100" loading="lazy" />
//                                 <div className="centered">
//                                     <Link href="/interior-design-projects/mr-arun-family/">Mr Arun & Family</Link>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col sm="12" md={4} className="image-container mb-3">
//                             <div className='image-container-div'>
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205477/arcmen/Architectural/muralidharan.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     className="img-fluid w-100"
//                                     loading="lazy"
//                                 />
//                                 <div className="centered">
//                                     <Link href="/architectural-projects/living-room-double-height-interior-design-architectural/">Mr.Muralidharan</Link>
//                                     <p>Mayiladuthurai</p>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col sm="12" md={4} className="image-container mb-3">
//                             <div className='image-container-div'>
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216896/arcmen/Gallery/interior-design-projects/mukulrai-induvidul-house.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     className="img-fluid w-100"
//                                     loading="lazy"
//                                 />
//                                 <div className="centered">
//                                     <Link href="/interior-design-projects/individual-house-parrys-interior/">Mr.Mukulrai Induvidul House</Link>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//                 <Container fluid className="Build-page">
//                     <Container>
//                         <Row className="align-items-center">
//                             <Col sm="12" md="6" className="align-self-center build-header">
//                                 <h5>Design & Decor Your Home Interior Easy With Us</h5>
//                                 <p>Call Today for a Free Estimate !</p>
//                             </Col>
//                             <Col sm="12" md="6" className="align-self-center text-center text-lg-end">
//                                 <Link href="../contact-us/" className="color-overlay-link">
//                                     <button className="InteriorPage-button">
//                                         <span className="btn-button"></span>
//                                         GET A FREE QUOTES
//                                     </button>
//                                 </Link>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </Container>
//             </section>
//         </div>
//     );
// };

// export default Page;


// ==========================================================================================================================================================
// ==========================================================================================================================================================
// ==========================================================================================================================================================
// ==========================================================================================================================================================
// ==========================================================================================================================================================
// ==========================================================================================================================================================
// ==========================================================================================================================================================
// ==========================================================================================================================================================

'use client';
import React, { useEffect, useState } from 'react';
import ArchitecturalPage from './ArchitecturalPage';


const Page = () => {
    const architectural = 'duplex-villa-elevation-design-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural}/>
        </div>
    );
};

export default Page;
