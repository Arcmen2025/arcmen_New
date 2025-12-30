// "use client";
// import React, { useEffect } from 'react';
// import './about-page.css'

// const AboutTab = () => {
//     useEffect(() => {
//         openTab('tab-1');
//     }, []);

//     const openTab = (tabName) => {
//         let i, tabcontent, tablinks;

//         tabcontent = document.getElementsByClassName("tabcontent");
//         for (i = 0; i < tabcontent.length; i++) {
//             tabcontent[i].style.display = "none";
//         }

//         tablinks = document.getElementsByClassName("tablink");
//         for (i = 0; i < tablinks.length; i++) {
//             tablinks[i].style.backgroundColor = "";
//         }

//         const selectedTab = document.getElementById(tabName);
//         if (selectedTab) {
//             selectedTab.style.display = "block";
//         } else {
//             console.error(`Tab with ID ${tabName} not found`);
//         }
//     };

//     return (
//         <div className='about-tab'>
//             <div className="tabs">
//                 <button className="tablink" onClick={() => openTab('tab-1')}>Our Vission</button>
//                 <button className="tablink" onClick={() => openTab('tab-2')}>Our Mission</button>
//                 <button className="tablink" onClick={() => openTab('tab-3')}>The Arcmen Interior Advantage</button>
//             </div>

//             <div className='tab-content'>
//                 <div id="tab-1" className="tabcontent">
//                     <p>To be the number one interior design company in the Chennai & Tamilnadu region.</p>
//                 </div>

//                 <div id="tab-2" className="tabcontent">
//                     <p>The Arcmen Interiors mission is to provide a personalised interior design service for residential projects and cost-effective. Projects will be delivered on time and on budget with an unsurpassed attention to detail.</p>
//                 </div>

//                 <div id="tab-3" className="tabcontent">
//                     <p>Arcmen Architect & Interior designers takes away all the hassle of designing and furnishing your new home. We have been creating new homes in Chennai & Tamilnadu, we keep all operations in-house so that we can control the delivery time and the quality of our product.</p>
//                     <p>We have an extensive portfolio to showcase our work, and our Office cum Studio in Porur, Chennai. Our design processes are done in steps to ensure that the client is happy with everything before proceeding. We are passionate about good design and bring our personalised service to every project we do.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutTab;



// ==================================================
// ==================================================
// ==================================================

"use client";
import React, { useEffect } from 'react';
import './about-page.css';

const AboutTab = () => {
    useEffect(() => {
        openTab('tab-1');
        highlightTab('tablink-1');
    }, []);

    const openTab = (tabName) => {
        let i, tabcontent;

        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        const selectedTab = document.getElementById(tabName);
        if (selectedTab) {
            selectedTab.style.display = "block";
        } else {
            console.error(`Tab with ID ${tabName} not found`);
        }
    };

    const highlightTab = (tabLinkId) => {
        let i, tablinks;

        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
            tablinks[i].style.color = "";
        }

        const selectedTabLink = document.getElementById(tabLinkId);
        if (selectedTabLink) {
            selectedTabLink.style.backgroundColor = "#4DBC15"; // Change this to your desired highlight color
            selectedTabLink.style.color = "#fff"; // Change this to your desired highlight color
        } else {
            console.error(`Tab link with ID ${tabLinkId} not found`);
        }
    };

    return (
        <div className='about-tab'>
            <div className="tabs">
                <button id="tablink-1" className="tablink" onClick={() => { openTab('tab-1'); highlightTab('tablink-1'); }}>Our Vision</button>
                <button id="tablink-2" className="tablink" onClick={() => { openTab('tab-2'); highlightTab('tablink-2'); }}>Our Mission</button>
                <button id="tablink-3" className="tablink" onClick={() => { openTab('tab-3'); highlightTab('tablink-3'); }}>The Arcmen Interior Advantage</button>
            </div>

            <div className='tab-content'>
                <div id="tab-1" className="tabcontent">
                    <p>To be the number one interior design company in the Chennai & Tamilnadu region.</p>
                </div>

                <div id="tab-2" className="tabcontent">
                    <p>The Arcmen Interiors mission is to provide a personalised interior design service for residential projects and cost-effective. Projects will be delivered on time and on budget with an unsurpassed attention to detail.</p>
                </div>

                <div id="tab-3" className="tabcontent">
                    <p>Arcmen Architect & Interior designers takes away all the hassle of designing and furnishing your new home. We have been creating new homes in Chennai & Tamilnadu, we keep all operations in-house so that we can control the delivery time and the quality of our product.</p>
                    <p>We have an extensive portfolio to showcase our work, and our Office cum Studio in Porur, Chennai. Our design processes are done in steps to ensure that the client is happy with everything before proceeding. We are passionate about good design and bring our personalised service to every project we do.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutTab;
