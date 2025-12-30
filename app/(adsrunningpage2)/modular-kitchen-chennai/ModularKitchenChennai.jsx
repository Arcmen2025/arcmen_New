
'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ModularKitchenChennai = () => {
    const [activeTab1, setActiveTab1] = useState('tab1-1');
    const [activeTab2, setActiveTab2] = useState('tab2-1');
    const [visibleRows, setVisibleRows] = useState({
        tab1_1: 1,
        tab1_2: 1,
        tab1_3: 1,
        tab1_4: 1,
        tab1_5: 1,
        tab1_6: 1,
        tab1_7: 1,
        tab2_1: 1,
        tab2_2: 1,
        tab2_3: 1,
        tab2_4: 1,
        tab2_5: 1,
        tab2_6: 1,
        tab2_7: 1,
        tab2_8: 1,
        tab2_9: 1,
        tab2_10: 1,
        tab2_11: 1,
        tab2_12: 1
    });

    const loadMore = (tabId) => {
        setVisibleRows((prev) => ({
            ...prev,
            [tabId]: prev[tabId] + 1
        }));
    };

    const images = {
        tab1_1: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735553027/arcmen/modular-kitchen-chennai/Island-kitchen-5.jpg', alt: 'Island Kitchen' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735554993/arcmen/modular-kitchen-chennai/Island-kitchen-2.jpg', alt: 'Island Kitchen' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735555047/arcmen/modular-kitchen-chennai/Island-kitchen-4.jpg', alt: 'Island Kitchen' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735555082/arcmen/modular-kitchen-chennai/Island-kitchen-3.jpg', alt: 'Island Kitchen' }
        ],
        tab1_2: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735555278/arcmen/modular-kitchen-chennai/luxuary-glass-1.jpg', alt: 'Luxury' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735555225/arcmen/modular-kitchen-chennai/luxuary-glass-7.jpg', alt: 'Luxury' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735555173/arcmen/modular-kitchen-chennai/uxuary-glass-8.jpg', alt: 'Luxury' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735555346/arcmen/modular-kitchen-chennai/luxuary-glass-5.jpg', alt: 'Luxury' }
        ],
        tab1_3: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735555517/arcmen/modular-kitchen-chennai/retro-modular-kitchen-1.jpg', alt: 'Retro' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735553127/arcmen/modular-kitchen-chennai/retro-modular-kitchen-5.jpg', alt: 'Retro' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735555781/arcmen/modular-kitchen-chennai/retro-modular-kitchen-4.jpg', alt: 'Retro' }
        ],
        tab1_4: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735555972/arcmen/modular-kitchen-chennai/ultra-g-rich-1.png', alt: 'Rich' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735553173/arcmen/modular-kitchen-chennai/ultra-g-rich.png', alt: 'Rich' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735555832/arcmen/modular-kitchen-chennai/ihbua91wdlcy0dshugt7.jpg', alt: 'Rich' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735553064/arcmen/modular-kitchen-chennai/ultra-g-rich-5.jpg', alt: 'Rich' }
        ],
        tab1_5: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735797336/arcmen/modular-kitchen-chennai/ecoglass-1.jpg', alt: 'Glass' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735798939/arcmen/modular-kitchen-chennai/ecoglass-2.jpg', alt: 'Glass' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735799024/arcmen/modular-kitchen-chennai/ecoglass-3.jpg', alt: 'Glass' }
        ],
        tab1_6: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735799526/arcmen/modular-kitchen-chennai/ecoamaze-2.jpg', alt: 'Ecoamaze' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735799804/arcmen/modular-kitchen-chennai/ecoamaze-1.jpg', alt: 'Ecoamaze' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735799583/arcmen/modular-kitchen-chennai/ecoamaze-4.jpg', alt: 'Ecoamaze' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735799478/arcmen/modular-kitchen-chennai/ecoamaze-3.jpg', alt: 'Ecoamaze' }
        ],
        tab1_7: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735797336/arcmen/modular-kitchen-chennai/ecoglass-1.jpg', alt: 'Ecodura' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735799526/arcmen/modular-kitchen-chennai/ecoamaze-2.jpg', alt: 'Ecodura' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735799478/arcmen/modular-kitchen-chennai/ecoamaze-3.jpg', alt: 'Ecodura' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735799583/arcmen/modular-kitchen-chennai/ecoamaze-4.jpg', alt: 'Ecodura' }
        ],
        tab2_1: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735556775/arcmen/modular-kitchen-chennai/Canister-1.jpg', alt: 'cansiter' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735556832/arcmen/modular-kitchen-chennai/Canister-2.jpg', alt: 'cansiter' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735556869/arcmen/modular-kitchen-chennai/Canister-3.jpg', alt: 'cansiter' }
        ],
        tab2_2: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735557003/arcmen/modular-kitchen-chennai/corner-solution-1.jpg', alt: 'Corner-solution' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735557043/arcmen/modular-kitchen-chennai/corner-solution-2.jpg', alt: 'Corner-solution' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735557129/arcmen/modular-kitchen-chennai/corner-solution-3.jpg', alt: 'Corner-solution' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735557090/arcmen/modular-kitchen-chennai/corner-solution-4.jpg', alt: 'Corner-solution' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735557165/arcmen/modular-kitchen-chennai/corner-solution-5.jpg', alt: 'Corner-solution' }
        ],
        tab2_3: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735799951/arcmen/modular-kitchen-chennai/Counter-top-1.jpg', alt: 'Counter-top' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735800000/arcmen/modular-kitchen-chennai/Counter-top-2.jpg', alt: 'Counter-top' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735557276/arcmen/modular-kitchen-chennai/Counter-top-3.jpg', alt: 'Counter-top' }
        ],
        tab2_4: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735800989/arcmen/modular-kitchen-chennai/Cutlery-organizer-3.jpg', alt: 'Cutlery-organizer' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735801146/arcmen/modular-kitchen-chennai/Cutlery-organizer-4.jpg', alt: 'Cutlery-organizer' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735800158/arcmen/modular-kitchen-chennai/cutlery-organizer-1.jpg', alt: 'Cutlery-organizer' }
        ],
        tab2_5: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735801333/arcmen/modular-kitchen-chennai/Plate-organizer-5.jpg', alt: 'Plate-organizer' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735801429/arcmen/modular-kitchen-chennai/Plate-organizer-2.jpg', alt: 'Plate-organizer' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735801481/arcmen/modular-kitchen-chennai/Plate-organizer-1.jpg', alt: 'Plate-organizer' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735801620/arcmen/modular-kitchen-chennai/Plate-organizer-4.jpg', alt: 'Plate-organizer' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735801793/arcmen/modular-kitchen-chennai/Plate-organizer-3.jpg', alt: 'Plate-organizer' }
        ],
        tab2_6: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735801864/arcmen/modular-kitchen-chennai/pull-out-4.jpg', alt: 'Pull-Out' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735801936/arcmen/modular-kitchen-chennai/pull-out-2.png', alt: 'Pull-Out' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802044/arcmen/modular-kitchen-chennai/pull-out-3.jpg', alt: 'Pull-Out' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802113/arcmen/modular-kitchen-chennai/pull-out-1.jpg', alt: 'Pull-Out' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802173/arcmen/modular-kitchen-chennai/pull-out-5.png', alt: 'Pull-Out' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802237/arcmen/modular-kitchen-chennai/pull-out-6.png', alt: 'Pull-Out' }
        ],
        tab2_7: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802395/arcmen/modular-kitchen-chennai/roller-shutroller-1.jpg', alt: 'Roller-shutter' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802510/arcmen/modular-kitchen-chennai/roller-shutroller-3.jpg', alt: 'Roller-shutter' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802461/arcmen/modular-kitchen-chennai/roller-shutroller-4.jpg', alt: 'Roller-shutter' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802586/arcmen/modular-kitchen-chennai/roller-shutroller-2.jpg', alt: 'Roller-shutter' }
        ],
        tab2_8: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802676/arcmen/modular-kitchen-chennai/tall-units-1.jpg', alt: 'Tall-Units' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802743/arcmen/modular-kitchen-chennai/tall-units-4.jpg', alt: 'Tall-Units' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802798/arcmen/modular-kitchen-chennai/tall-units-3.jpg', alt: 'Tall-Units' }
        ],
        tab2_9: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735802967/arcmen/modular-kitchen-chennai/sink-zone-1.jpg', alt: 'Sink-Zone' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735803013/arcmen/modular-kitchen-chennai/sink-zone-2.jpg', alt: 'Sink-Zone' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735803083/arcmen/modular-kitchen-chennai/sink-zone-3.jpg', alt: 'Sink-Zone' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735803135/arcmen/modular-kitchen-chennai/sink-zone-4.jpg', alt: 'Sink-Zone' }
        ],
        tab2_10: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735803249/arcmen/modular-kitchen-chennai/wall-units-1.jpg', alt: 'Wall-units' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735803306/arcmen/modular-kitchen-chennai/wall-units-3.jpg', alt: 'Wall-units' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735803358/arcmen/modular-kitchen-chennai/wall-units-2.jpg', alt: 'Wall-units' }
        ],
        tab2_11: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735803427/arcmen/modular-kitchen-chennai/Wicker.jpg', alt: 'Wicker-Basket' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735803537/arcmen/modular-kitchen-chennai/Wicker-01.png', alt: 'Wicker-Basket' }
        ],
        tab2_12: [
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735803822/arcmen/modular-kitchen-chennai/cove-light.png', alt: 'Lighting' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735803917/arcmen/modular-kitchen-chennai/Spotlight.png', alt: 'Lighting' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735804437/arcmen/modular-kitchen-chennai/Spot-light-2.png', alt: 'Lighting' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735804120/arcmen/modular-kitchen-chennai/Spot-light-1.png', alt: 'Lighting' },
            { src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1735804028/arcmen/modular-kitchen-chennai/cove-light-01.png', alt: 'Lighting' }
        ]
    };


    const contentSection = {
        tab1_1: { title: 'Island Kitchen Design' ,  content: 'Arcmen Interior Island modular Kitchen Studio we done many iconic Island modular Kitchens in Chennai, Best island Modular Kitchen designer in Chennai & Tamilnadu.' },
        tab1_2: { title: 'Luxury Glass Modular Kitchen' , content: 'This Fully Glass Modular Kitchen made by Saint Gobin Frameless Border Glass Shutters, which gives fashionable finish & reflects the morning sun shine light in your house.' },
        tab1_3: { title: 'Retro Modular Kitchen' , content: 'Be inspired by vintage kitchens that will never date, Making a stylish retro style Modular kitchen with our guide, is based on the original English Modular kitchen design Concepts.' },
        tab1_4: { title: 'G-Rich Modular Kitchens', content: 'Rich and attractive acrylic mirror shine glossy modular kitchen reflects ultimate shine in your kitchen style.' },
        tab1_5: { title: 'Eco Glass Modular Kitchens', content: 'Elevate your kitchen to a realm of modern elegance while embracing eco-friendly living.' },
        tab1_6: { title: 'Eco Amaze' ,content: 'Best modular kitchen interior in chennai, Assure best in design, price & Quality materials' },
        tab1_7: { title: 'Ecodura Modular Kitchen', content: 'Affordable, Durable, Simple yet Stunning: The laminated “Ecodura” range offers Unlimited Shades & Finish, offers to a without expensive price tag.' }
    };


    const getActiveContent = () => {
        if (activeTab1 !== 'tab1-1') {
            return contentSection[`tab1_${activeTab1.split('-')[1]}`];
        }
        if (activeTab2 !== 'tab2-1') {
            return contentSection[`tab2_${activeTab2.split('-')[1]}`];
        }
        return contentSection.tab1_1;
    };

    const activeContent = getActiveContent();

    return (
        <section>
            <section>
                <Container>
                    <Row>
                        <div className="mt-4">
                            <h3>{activeContent?.title}</h3>
                            <p>{activeContent?.content}</p>
                        </div>
                    </Row>
                </Container>
            </section>
            <div className="container">
                <div className="row">
                    <h2 className="col-sm-12 col-md-6 col-xl-6">
                        An inspiring modular kitchen <br /> Crafted with passion
                    </h2>
                    <p className="col-sm-12 col-md-6 col-xl-6">
                        We make your dreams come true. Your interior is in our hands,
                        <br /> and all you have left is to enjoy!
                    </p>
                </div>
            </div>
            <div className="container">
                {/* First Tab Section */}
                <div className="tab-section">
                    <ul className="nav nav-tabs" id="myTab1" role="tablist">
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab1 === 'tab1-1' ? 'active' : ''}`} id="tab1-1-tab" onClick={() => setActiveTab1('tab1-1')} role="tab" aria-controls="tab1-1" aria-selected={activeTab1 === 'tab1-1'}>
                                Island Kitchen
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab1 === 'tab1-2' ? 'active' : ''}`} id="tab1-2-tab" onClick={() => setActiveTab1('tab1-2')} role="tab" aria-controls="tab1-2" aria-selected={activeTab1 === 'tab1-2'}>
                                Luxury Glass
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab1 === 'tab1-3' ? 'active' : ''}`} id="tab1-3-tab" onClick={() => setActiveTab1('tab1-3')} role="tab" aria-controls="tab1-3" aria-selected={activeTab1 === 'tab1-3'}>
                                Retro
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab1 === 'tab1-4' ? 'active' : ''}`} id="tab1-4-tab" onClick={() => setActiveTab1('tab1-4')} role="tab" aria-controls="tab1-4" aria-selected={activeTab1 === 'tab1-4'}>
                                Ultra G Rich
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab1 === 'tab1-5' ? 'active' : ''}`} id="tab1-5-tab" onClick={() => setActiveTab1('tab1-5')} role="tab" aria-controls="tab1-5" aria-selected={activeTab1 === 'tab1-5'}>
                                Ecoglass
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab1 === 'tab1-6' ? 'active' : ''}`} id="tab1-6-tab" onClick={() => setActiveTab1('tab1-6')} role="tab" aria-controls="tab1-6" aria-selected={activeTab1 === 'tab1-6'}>
                                Eco Amaze
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab1 === 'tab1-7' ? 'active' : ''}`} id="tab1-7-tab" onClick={() => setActiveTab1('tab1-7')} role="tab" aria-controls="tab1-7" aria-selected={activeTab1 === 'tab1-7'}>
                                Ecodura
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent1">
                        <div className={`tab-pane fade ${activeTab1 === 'tab1-1' ? 'show active' : ''}`} id="tab1-1" role="tabpanel" aria-labelledby="tab1-1-tab">
                            <Row className="rows">
                                {images.tab1_1.slice(0, visibleRows.tab1_1 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="w-100" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab1_1 * 2 < images.tab1_1.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab1_1')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab1 === 'tab1-2' ? 'show active' : ''}`} id="tab1-2" role="tabpanel" aria-labelledby="tab1-2-tab">
                            <Row className="image-rows">
                                {images.tab1_2.slice(0, visibleRows.tab1_2 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab1_2 * 2 < images.tab1_2.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab1_2')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab1 === 'tab1-3' ? 'show active' : ''}`} id="tab1-3" role="tabpanel" aria-labelledby="tab1-3-tab">
                            <Row className="image-rows">
                                {images.tab1_3.slice(0, visibleRows.tab1_3 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab1_3 * 2 < images.tab1_3.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab1_3')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab1 === 'tab1-4' ? 'show active' : ''}`} id="tab1-4" role="tabpanel" aria-labelledby="tab1-4-tab">
                            <Row className="image-rows">
                                {images.tab1_4.slice(0, visibleRows.tab1_4 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab1_4 * 2 < images.tab1_4.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab1_4')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab1 === 'tab1-5' ? 'show active' : ''}`} id="tab1-5" role="tabpanel" aria-labelledby="tab1-5-tab">
                            <Row className="image-rows">
                                {images.tab1_5.slice(0, visibleRows.tab1_5 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab1_5 * 2 < images.tab1_5.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab1_5')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab1 === 'tab1-6' ? 'show active' : ''}`} id="tab1-6" role="tabpanel" aria-labelledby="tab1-6-tab">
                            <Row className="image-rows">
                                {images.tab1_6.slice(0, visibleRows.tab1_6 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab1_6 * 2 < images.tab1_6.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab1_6')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab1 === 'tab1-7' ? 'show active' : ''}`} id="tab1-7" role="tabpanel" aria-labelledby="tab1-7-tab">
                            <Row className="image-rows">
                                {images.tab1_7.slice(0, visibleRows.tab1_7 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab1_7 * 2 < images.tab1_7.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab1_7')}>
                                    Load More
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Second Tab Section */}
                <div className="tab-section">
                    <h2 className="col-sm-12 col-md-6 col-xl-6">Types of accessories</h2>
                    <ul className="nav nav-tabs" id="myTab2" role="tablist">
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab2 === 'tab2-1' ? 'active' : ''}`} id="tab2-1-tab" onClick={() => setActiveTab2('tab2-1')} role="tab" aria-controls="tab2-1" aria-selected={activeTab2 === 'tab2-1'}>
                                Cansiter
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab2 === 'tab2-2' ? 'active' : ''}`} id="tab2-2-tab" onClick={() => setActiveTab2('tab2-2')} role="tab" aria-controls="tab2-2" aria-selected={activeTab2 === 'tab2-2'}>
                                Corner solution
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab2 === 'tab2-3' ? 'active' : ''}`} id="tab2-3-tab" onClick={() => setActiveTab2('tab2-3')} role="tab" aria-controls="tab2-3" aria-selected={activeTab2 === 'tab2-3'}>
                                Counter Top
                            </a>
                        </li>
                        <li className="nav-item cutlery-org">
                            <a className={`nav-link ${activeTab2 === 'tab2-4' ? 'active' : ''}`} id="tab2-4-tab" onClick={() => setActiveTab2('tab2-4')} role="tab" aria-controls="tab2-4" aria-selected={activeTab2 === 'tab2-4'}>
                                Cutlery organizer
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab2 === 'tab2-5' ? 'active' : ''}`} id="tab2-5-tab" onClick={() => setActiveTab2('tab2-5')} role="tab" aria-controls="tab2-5" aria-selected={activeTab2 === 'tab2-5'}>
                                Plate organizer
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab2 === 'tab2-6' ? 'active' : ''}`} id="tab2-6-tab" onClick={() => setActiveTab2('tab2-6')} role="tab" aria-controls="tab2-6" aria-selected={activeTab2 === 'tab2-6'}>
                                Pull Out
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab2 === 'tab2-7' ? 'active' : ''}`} id="tab2-7-tab" onClick={() => setActiveTab2('tab2-7')} role="tab" aria-controls="tab2-7" aria-selected={activeTab2 === 'tab2-7'}>
                                Roller shutter
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab2 === 'tab2-8' ? 'active' : ''}`} id="tab2-8-tab" onClick={() => setActiveTab2('tab2-8')} role="tab" aria-controls="tab2-8" aria-selected={activeTab2 === 'tab2-8'}>
                                Tall Units
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab2 === 'tab2-9' ? 'active' : ''}`} id="tab2-9-tab" onClick={() => setActiveTab2('tab2-9')} role="tab" aria-controls="tab2-9" aria-selected={activeTab2 === 'tab2-9'}>
                                Sink Zone
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab2 === 'tab2-10' ? 'active' : ''}`} id="tab2-10-tab" onClick={() => setActiveTab2('tab2-10')} role="tab" aria-controls="tab2-10" aria-selected={activeTab2 === 'tab2-10'}>
                                Wall units
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab2 === 'tab2-11' ? 'active' : ''}`} id="tab2-11-tab" onClick={() => setActiveTab2('tab2-11')} role="tab" aria-controls="tab2-10" aria-selected={activeTab2 === 'tab2-11'}>
                                Wicker Basket
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab2 === 'tab2-12' ? 'active' : ''}`} id="tab2-12-tab" onClick={() => setActiveTab2('tab2-12')} role="tab" aria-controls="tab2-10" aria-selected={activeTab2 === 'tab2-12'}>
                                Lighting
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent2">
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-1' ? 'show active' : ''}`} id="tab2-1" role="tabpanel" aria-labelledby="tab2-1-tab">
                            <div className="image-rows row">
                                {images.tab2_1.slice(0, visibleRows.tab2_1 * 2).map((img, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {visibleRows.tab2_1 * 2 < images.tab2_1.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2_1')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-2' ? 'show active' : ''}`} id="tab2-2" role="tabpanel" aria-labelledby="tab2-2-tab">
                            <div className="image-rows row">
                                {images.tab2_2.slice(0, visibleRows.tab2_2 * 2).map((img, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {visibleRows.tab2_2 * 2 < images.tab2_2.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2-2')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-3' ? 'show active' : ''}`} id="tab2-3" role="tabpanel" aria-labelledby="tab2-3-tab">
                            <div className="image-rows row">
                                {images.tab2_3.slice(0, visibleRows.tab2_3 * 2).map((img, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {visibleRows.tab2_3 * 2 < images.tab2_3.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2_3')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-4' ? 'show active' : ''}`} id="tab2-4" role="tabpanel" aria-labelledby="tab2-4-tab">
                            <div className="image-rows row">
                                {images.tab2_4.slice(0, visibleRows.tab2_4 * 2).map((img, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {visibleRows.tab2_4 * 2 < images.tab2_4.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2_4')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-5' ? 'show active' : ''}`} id="tab2-5" role="tabpanel" aria-labelledby="tab2-5-tab">
                            <div className="image-rows row">
                                {images.tab2_5.slice(0, visibleRows.tab2_5 * 2).map((img, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {visibleRows.tab2_5 * 2 < images.tab2_5.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2_5')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-6' ? 'show active' : ''}`} id="tab2-6" role="tabpanel" aria-labelledby="tab2-6-tab">
                            <div className="image-rows row">
                                {images.tab2_6.slice(0, visibleRows.tab2_6 * 2).map((img, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {visibleRows.tab2_6 * 2 < images.tab2_6.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2_6')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-7' ? 'show active' : ''}`} id="tab2-7" role="tabpanel" aria-labelledby="tab2-7-tab">
                            <Row className="image-rows">
                                {images.tab2_7.slice(0, visibleRows.tab2_7 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab2_7 * 2 < images.tab2_7.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2_7')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-8' ? 'show active' : ''}`} id="tab2-8" role="tabpanel" aria-labelledby="tab2-8-tab">
                            <Row className="image-rows row">
                                {images.tab2_8.slice(0, visibleRows.tab2_8 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab2_8 * 2 < images.tab2_8.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2_8')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-9' ? 'show active' : ''}`} id="tab2-9" role="tabpanel" aria-labelledby="tab2-9-tab">
                            <Row className="image-rows row">
                                {images.tab2_9.slice(0, visibleRows.tab2_9 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab2_9 * 2 < images.tab2_9.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2_9')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-10' ? 'show active' : ''}`} id="tab2-10" role="tabpanel" aria-labelledby="tab2-10-tab">
                            <Row className="image-rows row">
                                {images.tab2_10.slice(0, visibleRows.tab2_10 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab2_10 * 2 < images.tab2_10.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2_10')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-11' ? 'show active' : ''}`} id="tab2-11" role="tabpanel" aria-labelledby="tab2-11-tab">
                            <Row className="image-rows row">
                                {images.tab2_11.slice(0, visibleRows.tab2_11 * 2).map((img, index) => (
                                    <Col md={6} key={index}>
                                        <div className="img-container">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            {visibleRows.tab2_11 * 2 < images.tab2_11.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2_11')}>
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className={`tab-pane fade ${activeTab2 === 'tab2-12' ? 'show active' : ''}`} id="tab2-12" role="tabpanel" aria-labelledby="tab2-12-tab">
                            <div className="image-rows row">
                                <div className="row">
                                    <h2 className="text-center">Cove Light</h2>
                                    {images.tab2_12.slice(0, 2).map((img, index) => (
                                        <div className="col-md-6" key={index}>
                                            <div className="img-container">
                                                <img src={img.src} alt={img.alt} className="img-fluid" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="row hidden-images pt-2">
                                    <h2 className="text-center">Spot Light</h2>
                                    {images.tab2_12.slice(2, 5).map((img, index) => (
                                        <div className="col-md-6" key={index}>
                                            <div className="img-container">
                                                <img src={img.src} alt={img.alt} className="img-fluid" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {visibleRows.tab2_12 * 2 < images.tab2_12.length && (
                                <button className="btn btn-primary loadMoreBtn" onClick={() => loadMore('tab2_12')}>
                                    Load More
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModularKitchenChennai;
