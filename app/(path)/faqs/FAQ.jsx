// // 'use client';
// // import React from 'react';
// // import { Col, Container, Row, Accordion } from 'react-bootstrap';
// // import './FAQ.scss';
// // import Image from 'next/image';

// // const FAQ = () => {
// //     return (
// //         <div>
// //             <section>
// //                 <Row>
// //                     <Col md={12} sd={12}>
// //                         <Image
// //                             quality={100}
// //                             src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735281303/arcmen/FAQ/wall-furniture-design.jpg"
// //                             width={800} // Specify the width in pixels
// //                             height={600} // Specify the height in pixels
// //                             alt="FAQ"
// //                             loading="lazy"
// //                             style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
// //                         />
// //                     </Col>
// //                 </Row>
// //             </section>
// //             <section className="">
// //                 <Container className="">
// //                     <Row>
// //                         <Col className="">
// //                             <div className="w-100 ">
// //                                 <div className="d-flex justify-content-center flex-column align-items-center p-5">
// //                                     <div className="">
// //                                         <h4 style={{ fontWeight: '700', fontSize: '1.4117647058824' }}>FAQs On Interior Design Service In Chennai</h4>
// //                                     </div>

// //                                     <div style={{ width: '80%', maxWidth: '80%' }}>
// //                                         <div className="w-100 pt-2">
// //                                             <p style={{ fontSize: '1.1rem', lineHeight: '2rem', textAlign: 'center' }}>
// //                                                 Get the answers to common queries about interior design services, offering insights into process, pricing, and customization options, tailored to suit your unique style and needs.
// //                                             </p>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </Col>
// //                     </Row>
// //                 </Container>
// //             </section>
// //             <section>
// //                 <Container style={{ padding: '30px',boxShadow: '0px 16px 48px 0px rgba(0, 0, 0, 0.176)' }}>
// //                     <Row>
// //                         <Col md={6} sd={12}>
// //                             <Accordion flush>
// //                                 <Accordion.Item eventKey="0">
// //                                     <Accordion.Header className='faq-accodion-header'>Accordion Item #1</Accordion.Header>
// //                                     <Accordion.Body>
// //                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
// //                                         ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// //                                         mollit anim id est laborum.
// //                                     </Accordion.Body>
// //                                 </Accordion.Item>
// //                                 <Accordion.Item eventKey="1">
// //                                     <Accordion.Header className='faq-accodion-header'>Accordion Item #2</Accordion.Header>
// //                                     <Accordion.Body>
// //                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
// //                                         ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// //                                         mollit anim id est laborum.
// //                                     </Accordion.Body>
// //                                 </Accordion.Item>
// //                             </Accordion>
// //                         </Col>
// //                         <Col md={6} sd={12}>
// //                             <Accordion flush>
// //                                 <Accordion.Item eventKey="0">
// //                                     <Accordion.Header className='faq-accodion-header'>Accordion Item #1</Accordion.Header>
// //                                     <Accordion.Body>
// //                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
// //                                         ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// //                                         mollit anim id est laborum.
// //                                     </Accordion.Body>
// //                                 </Accordion.Item>
// //                                 <Accordion.Item eventKey="1">
// //                                     <Accordion.Header className='faq-accodion-header'>Accordion Item #2</Accordion.Header>
// //                                     <Accordion.Body>
// //                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
// //                                         ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// //                                         mollit anim id est laborum.
// //                                     </Accordion.Body>
// //                                 </Accordion.Item>
// //                             </Accordion>
// //                         </Col>
// //                     </Row>
// //                 </Container>
// //             </section>
// //         </div>
// //     );
// // };

// // export default FAQ;
// // ======================================================================================================================================
// // ======================================================================================================================================
// // ======================================================================================================================================
// // ======================================================================================================================================
// // ======================================================================================================================================


// 'use client';
// import React from 'react';
// import { Col, Container, Row, Accordion } from 'react-bootstrap';
// import './FAQ.scss';
// import Image from 'next/image';

// const faqItems = [
//     {
//         question: "1. What time to Approach My Home interior design?",
//         answer: "Customer Can Approach us any time for Interior design. After the completion of building (Or) Before Painting Finalizing (Or) under construction, especially before the brickwork work is better to start the interior design (or) during the Home plan’s finalizing."
//     },
//     {
//         question: "2. What Advantage & benefit to Book Arcmen interior Designer?",
//         answer: [
//             "We are the expert team of Architect & Interior designer in Chennai region. Our designer and execution fine works makes us stand as the best Interior Decorator in Chennai of 27 years.",
//             "Customer can join and involve as design Partner.",
//             "Architectural Drawing & 3D Assures, What You Can See in Design We Will Deliver So customer can easily understand and visualize previously of transformation",
//             "Factory finish material and premium German brand fittings."
//         ]
//     },
//     {
//         question: "3. Why to need visit Arcmen experience centre & Design studio?",
//         answer: [
//             "Customer to physically access the products so as to develop trust and a more personalized relationship.",
//             "Get Experience with the Different Material & Models Details, Interactive Experience with our expert, Inspiration and Ideas.",
//             "Build Trust in why to choose Arcmen and more than get Clarity of pricing transparency of products."
//         ]
//     },
//     {
//         question: "4. How long time will it take to complete my home interior project?",
//         answer: "45 days completed project Installation and handover (Others said about only Delivery)\n\nHowever, the completion timeline may vary from project to project. Factors such as material availability of pan India or international, more themed work, Volume of Luxuries projects, etc., play an important role in determining the timeline. But once we committed the timeline of project we should before to finish."
//     },
//     {
//         question: "5. Do you provide after sales support? How many years of warranty do you provide?",
//         answer: [
//             "Yes, we ensure lifetime support after completion of a project. Just give us a call at +91 9962 99 8008-8001 and we will send our service team to resolve.",
//             "We Provide warranty of 10 years on wood work materials. Mechanism, Electrical, Appliances, and Accessories warranty covers by manufacturer’s Warranty."
//         ]
//     },
//     {
//         question: "6. Arcmen provided Preliminary Estimate is that final?",
//         answer: "Yes of course, but the estimate only is not enough for fully finished interiors. Client finalize after 2D and 3D Designs Then Send to final Cost."
//     },
//     {
//         question: "7. Arcmen will charge 2D & 3D designs cost of interior design?",
//         answer: "Its free of design cost Are you executing the entire work of labour with material with us. Or not we charge the cost for design, its start from Rs.85 per Sq.ft"
//     },
//     {
//         question: "8. Can you send 3D designs & Detail Drawings before order confirmation of my home interior?",
//         answer: "No, But We are sending a Mood board presentation to our new customer. Customers pay Rs.20K from starting the presentation. If the client is not satisfied with this design Arcmen will refund the Rs.15K amount to the customer."
//     },
//     {
//         question: "9. What kind of Plywood and Boards used?",
//         answer: [
//             "Hi Quality of ISI Standard Calibrated Waterproof Plywood, BWR&MR Grade Plywood. HDHMR Boards.",
//             "We promise our Clients have never used MDF Panels and Particle boards."
//         ]
//     },
//     {
//         question: "10. What is the Minimum order Value? What Budget start from 2BHK & 3BHK?",
//         answer: [
//             "Yes, we have the starting package Rs.3 lacks",
//             "2BHK Budget Starts Rs.3,50,000/- and ends depending of client Value",
//             "3BHK Budget Starts Rs.4,80,000/- and ends depending of client Value"
//         ]
//     },
//     {
//         question: "11. Arcmen which type of Service is provided Home interior Decor?",
//         answer: "We are the expert of turnkey home interior decorator, We doing entire Home Interiors include renovations Like:- All type of Wall Décor, Different type Ceiling décor, Modern storage solutions, Modular kitchen, Wardrobes, Mosquito net, Wallpaper, Soft furnishings, Curtains, Bedroom Interior, Kids room interior and much more."
//     },
//     {
//         question: "12. How we trust Arcmen could complete our dream home interior project?",
//         answer: [
//             "100% Satisfied customer, trusted interior designer firm in Chennai More than 10yrs.",
//             "27 years of business background and running second Generation of pioneering.",
//             "We are registered firm and own assets of all units and own team of workers of this field, so we never withdraw our business during life time."
//         ]
//     },
//     {
//         question: "13. What are the other services that you can provide?",
//         answer: "Yes, we doing Multiple Services of residential projects 1.Turnkey Interior design and Décor of home interior 2.Architectural design services 3.premiuim Modular Kitchen Manufacturer 4.Turnkey construction (Its include Architecture + Construction + Interior design & Décor)"
//     },
//     {
//         question: "14. Site Visit is free or Chargeable?",
//         answer: "Within Chennai Limits absolutely free to visit your site, outside of Chennai and other districts of Tamilnadu or States of India will be chargeable."
//     },
//     {
//         question: "15. Arcmen is make price of product and projects is perfect cost?",
//         answer: "Yes truly, we make exact cost of your project and entire interior product because we surrender before entire work drawing, perspective 3D pre view, material detail chart so customer can guess entire work cost easily."
//     },
//     {
//         question: "16. Why we can’t provide huge bulky offer like more than 10% on interior works?",
//         answer: [
//             "Corporate interiors and Multicity franchise interior companies hike the actual cost of project costs and then give a discount on a seasonal basis to attract 25% to 15%, but we never do this for our customers.",
//             "One more reason to remain our promise, the entire Design cost is free including your home interior décor work, so we are flexible truly of the customer.",
//             "Definitely we reduce cost in our margin never for clients pricing. That’s the reason."
//         ]
//     },
//     {
//         question: "17. How does you calculate my home Interior decor project Handover Date?",
//         answer: [
//             "Once customer finalized the all design and materials then the project is ready to do interior work, Then the Date Count will Starts, we calculate only on Arcmen firm working days.",
//             "If Clients postpone the days as per their requirement but the days also change accordingly."
//         ]
//     },
//     {
//         question: "18. Can you start my home interior design project immediately?",
//         answer: "If you have done Flooring and the first base painting for your home interiors, we start the Home interior Décor to Execute."
//     },
//     {
//         question: "19. Arcmen doing interior Designing Services only?",
//         answer: "Yes, we doing Architectural interior Design services with detailed 2D & 3D. Price Start’s from Rs.85 per Sq.ft"
//     },
//     {
//         question: "20. How much does home interiors cost?",
//         answer: [
//             "The cost of home interiors varies depending on the scope of the project & the design requirements. At Arcmen, we provide customized design solutions to meet your budget and design preferences.",
//             "2BHK Budget Starts Rs.3,50,000/- and ends depending of client Value.",
//             "3BHK Budget Starts Rs.4,80,000/- and ends depending of client Value"
//         ]
//     },
//     {
//         question: "21. What is the process of working with Arcmen interior? And how it works?",
//         answer: "We follow a step-by-step process that includes consultation, site measurement, conceptual design, 3D rendering, and installation. Our designers work closely with you to understand your design preferences and deliver a space that reflects your personality and lifestyle. For more detail visit how it works www.arcmeninterior.com"
//     }
// ];

// const FAQ = () => {
//     return (
//         <div>
//             <section>
//                 <Row>
//                     <Col md={12} sd={12}>
//                         <Image
//                             quality={100}
//                             src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735281303/arcmen/FAQ/wall-furniture-design.jpg"
//                             width={800} // Specify the width in pixels
//                             height={600} // Specify the height in pixels
//                             alt="FAQ"
//                             loading="lazy"
//                             style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
//                         />
//                     </Col>
//                 </Row>
//             </section>
//             <section className="">
//                 <Container className="">
//                     <Row>
//                         <Col className="">
//                             <div className="w-100 ">
//                                 <div className="d-flex justify-content-center flex-column align-items-center p-5 faqs-second-section-main-div">
//                                     <div className="">
//                                         <h4 style={{ fontWeight: '700', fontSize: '1.4117647058824' }}>FAQs On Interior Design Service In Chennai</h4>
//                                     </div>

//                                     <div className='faqs-second-section-div' >
//                                         <div className="w-100 pt-2">
//                                             <p className='faqs-second-section-p'>
//                                                 Get the answers to common queries about interior design services, offering insights into process, pricing, and customization options, tailored to suit your unique style and needs.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//             <section>
//                 <Container style={{ padding: '30px', boxShadow: '0px 16px 48px 0px rgba(0, 0, 0, 0.176)' }}>
//                     <Row>
//                         <Col md={6} sd={12}>
//                             <Accordion flush>
//                                 {faqItems.slice(0, 11).map((item, index) => (
//                                     <Accordion.Item eventKey={index.toString()} key={index}>
//                                         <Accordion.Header className='faq-accodion-header'>{item.question}</Accordion.Header>
//                                         <Accordion.Body className='faq-accodion-body'>
//                                             {Array.isArray(item.answer) ? (
//                                                 <ul>
//                                                     {item.answer.map((point, idx) => (
//                                                         <li key={idx}>{point}</li>
//                                                     ))}
//                                                 </ul>
//                                             ) : (
//                                                 <p>{item.answer}</p>
//                                             )}
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                 ))}
//                             </Accordion>
//                         </Col>
//                         <Col md={6} sd={12}>
//                             <Accordion flush>
//                                 {faqItems.slice(11).map((item, index) => (
//                                     <Accordion.Item eventKey={index.toString()} key={index}>
//                                         <Accordion.Header className='faq-accodion-header'>{item.question}</Accordion.Header>
//                                         <Accordion.Body className='faq-accodion-body'>
//                                             {Array.isArray(item.answer) ? (
//                                                 <ul>
//                                                     {item.answer.map((point, idx) => (
//                                                         <li key={idx}>{point}</li>
//                                                     ))}
//                                                 </ul>
//                                             ) : (
//                                                 <p>{item.answer}</p>
//                                             )}
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                 ))}
//                             </Accordion>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </div>
//     );
// };

// export default FAQ;



















































'use client';
import React from 'react';
import { Col, Container, Row, Accordion } from 'react-bootstrap';
import './FAQ.scss';
import Image from 'next/image';
import Link from 'next/link';

const faqItems = [
    {
        question: "1. What time to Approach My Home interior design?",
        answer: "Customer Can Approach us any time for Interior design. After the completion of building (Or) Before Painting Finalizing (Or) under construction, especially before the brickwork work is better to start the interior design (or) during the Home plan’s finalizing."
    },
    {
        question: "2. What Advantage & benefit to Book Arcmen interior Designer?",
        answer: [
            "We are the expert team of Architect & Interior designer in Chennai region. Our designer and execution fine works makes us stand as the best Interior Decorator in Chennai of 27 years.",
            "Customer can join and involve as design Partner.",
            "Architectural Drawing & 3D Assures, What You Can See in Design We Will Deliver So customer can easily understand and visualize previously of transformation",
            "Factory finish material and premium German brand fittings."
        ]
    },
    {
        question: "3. Why to need visit Arcmen experience centre & Design studio?",
        answer: [
            "Customer to physically access the products so as to develop trust and a more personalized relationship.",
            "Get Experience with the Different Material & Models Details, Interactive Experience with our expert, Inspiration and Ideas.",
            "Build Trust in why to choose Arcmen and more than get Clarity of pricing transparency of products."
        ]
    },
    {
        question: "4. How long time will it take to complete my home interior project?",
        answer: "45 days completed project Installation and handover (Others said about only Delivery)\n\nHowever, the completion timeline may vary from project to project. Factors such as material availability of pan India or international, more themed work, Volume of Luxuries projects, etc., play an important role in determining the timeline. But once we committed the timeline of project we should before to finish."
    },
    {
        question: "5. Do you provide after sales support? How many years of warranty do you provide?",
        answer: [
            "Yes, we ensure lifetime support after completion of a project. Just give us a call at +91 9962 99 8008-8001 and we will send our service team to resolve.",
            "We Provide warranty of 10 years on wood work materials. Mechanism, Electrical, Appliances, and Accessories warranty covers by manufacturer’s Warranty."
        ]
    },
    {
        question: "6. Arcmen provided Preliminary Estimate is that final?",
        answer: "Yes of course, but the estimate only is not enough for fully finished interiors. Client finalize after 2D and 3D Designs Then Send to final Cost."
    },
    {
        question: "7. Arcmen will charge 2D & 3D designs cost of interior design?",
        answer: "Its free of design cost Are you executing the entire work of labour with material with us. Or not we charge the cost for design, its start from Rs.85 per Sq.ft"
    },
    {
        question: "8. Can you send 3D designs & Detail Drawings before order confirmation of my home interior?",
        answer: "No, But We are sending a Mood board presentation to our new customer. Customers pay Rs.20K from starting the presentation. If the client is not satisfied with this design Arcmen will refund the Rs.15K amount to the customer."
    },
    {
        question: "9. What kind of Plywood and Boards used?",
        answer: [
            "High Quality of ISI Standard Calibrated Waterproof Plywood, BWR&MR Grade Plywood. HDHMR Boards.",
            "We promise our Clients have never used MDF Panels and Particle boards."
        ]
    },
    {
        question: "10. What is the Minimum order Value? What Budget start from 2BHK & 3BHK?",
        answer: [
            "Yes, we have the starting package Rs.3 lacks",
            "2BHK Budget Starts Rs.3,50,000/- and ends depending of client Value",
            "3BHK Budget Starts Rs.4,80,000/- and ends depending of client Value"
        ]
    },
    {
        question: "11. Arcmen which type of Service is provided Home interior Decor?",
        answer: "We are the expert of turnkey home interior decorator, We doing entire Home Interiors include renovations Like:- All type of Wall Décor, Different type Ceiling décor, Modern storage solutions, Modular kitchen, Wardrobes, Mosquito net, Wallpaper, Soft furnishings, Curtains, Bedroom Interior, Kids room interior and much more."
    },
    {
        question: "12. How we trust Arcmen could complete our dream home interior project?",
        answer: [
            "100% Satisfied customer, trusted interior designer firm in Chennai More than 10yrs.",
            "27 years of business background and running second Generation of pioneering.",
            "We are registered firm and own assets of all units and own team of workers of this field, so we never withdraw our business during life time."
        ]
    },
    {
        question: "13. What are the other services that you can provide?",
        answer: "Yes, we doing Multiple Services of residential projects 1.Turnkey Interior design and Décor of home interior 2.Architectural design services 3.premiuim Modular Kitchen Manufacturer 4.Turnkey construction (Its include Architecture + Construction + Interior design & Décor)"
    },
    {
        question: "14. Site Visit is free or Chargeable?",
        answer: "Within Chennai Limits absolutely free to visit your site, outside of Chennai and other districts of Tamilnadu or States of India will be chargeable."
    },
    {
        question: "15. Arcmen is make price of product and projects is perfect cost?",
        answer: "Yes truly, we make exact cost of your project and entire interior product because we surrender before entire work drawing, perspective 3D pre view, material detail chart so customer can guess entire work cost easily."
    },
    {
        question: "16. Why we can’t provide huge bulky offer like more than 10% on interior works?",
        answer: [
            "Corporate interiors and Multicity franchise interior companies hike the actual cost of project costs and then give a discount on a seasonal basis to attract 25% to 15%, but we never do this for our customers.",
            "One more reason to remain our promise, the entire Design cost is free including your home interior décor work, so we are flexible truly of the customer.",
            "Definitely we reduce cost in our margin never for clients pricing. That’s the reason."
        ]
    },
    {
        question: "17. How does you calculate my home Interior decor project Handover Date?",
        answer: [
            "Once customer finalized the all design and materials then the project is ready to do interior work, Then the Date Count will Starts, we calculate only on Arcmen firm working days.",
            "If Clients postpone the days as per their requirement but the days also change accordingly."
        ]
    },
    {
        question: "18. Can you start my home interior design project immediately?",
        answer: "If you have done Flooring and the first base painting for your home interiors, we start the Home interior Décor to Execute."
    },
    {
        question: "19. Arcmen doing interior Designing Services only?",
        answer: "Yes, we doing Architectural interior Design services with detailed 2D & 3D. Price Start’s from Rs.85 per Sq.ft"
    },
    {
        question: "20. How much does home interiors cost?",
        answer: [
            "The cost of home interiors varies depending on the scope of the project & the design requirements. At Arcmen, we provide customized design solutions to meet your budget and design preferences.",
            "2BHK Budget Starts Rs.3,50,000/- and ends depending of client Value.",
            "3BHK Budget Starts Rs.4,80,000/- and ends depending of client Value"
        ]
    },
    {
        question: "21. What is the process of working with Arcmen interior? And how it works?",
        answer: "We follow a step-by-step process that includes consultation, site measurement, conceptual design, 3D rendering, and installation. Our designers work closely with you to understand your design preferences and deliver a space that reflects your personality and lifestyle. For more detail visit how it works www.arcmeninterior.com"
    }
];

const FAQ = () => {
    return (
        <div>
            <section>
                <Row>
                    <Col md={12} sd={12}>
                        <Image
                            quality={100}
                            src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735281303/arcmen/FAQ/wall-furniture-design.jpg"
                            width={800} // Specify the width in pixels
                            height={600} // Specify the height in pixels
                            alt="FAQ"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </Col>
                </Row>
            </section>
            <section className="">
                <Container className="">
                    <Row>
                        <Col className="">
                            <div className="w-100 ">
                                <div className="d-flex justify-content-center flex-column align-items-center p-5 faqs-second-section-main-div">
                                    <div className="">
                                        <h4 style={{ fontWeight: '700', fontSize: '1.4117647058824' }}>FAQs On Interior Design Service In Chennai</h4>
                                    </div>
                                    <div className='faqs-second-section-div' >
                                        <div className="w-100 pt-2">
                                            <p className='faqs-second-section-p'>
                                                Get the answers to common queries about interior design services, offering insights into process, pricing, and customization options, tailored to suit your unique style and needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container style={{ padding: '30px', boxShadow: '0px 16px 48px 0px rgba(0, 0, 0, 0.176)' }}>
                    <Row>
                        <Col md={6} sd={12}>
                            <Accordion flush defaultActiveKey="0">
                                {faqItems.slice(0, 11).map((item, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Accordion.Header className='faq-accodion-header'>{item.question}</Accordion.Header>
                                        <Accordion.Body className='faq-accodion-body'>
                                            {Array.isArray(item.answer) ? (
                                                <ul>
                                                    {item.answer.map((point, idx) => (
                                                        <li key={idx}>{point}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>{item.answer}</p>
                                            )}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                        <Col md={6} sd={12}>
                            <Accordion flush>
                                {faqItems.slice(11).map((item, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Accordion.Header className='faq-accodion-header'>{item.question}</Accordion.Header>
                                        <Accordion.Body className='faq-accodion-body'>
                                            {Array.isArray(item.answer) ? (
                                                <ul>
                                                    {item.answer.map((point, idx) => (
                                                        <li key={idx}>{point}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>{item.answer}</p>
                                            )}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="Build-Décor">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={8} className="align-self-center">
                            <h5>Ready To Design Your Dream Home?</h5>
                            <p>Arcmen The Best Interior Designer In Chennai</p>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="align-self-center">
                            <div id="" className="color-overlay-button">
                                <Link href="https://www.wa.me/+919962998008" target='_blank' className="color-overlay-link">
                                    <span className="ue-color-overlay"></span>
                                    <span className="ue-btn-txt">Book Your Free Consultation now!</span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};



export default FAQ;
