// src/data/constants.js

// import End from "../assets/end.svg";
// import Transparent from "../assets/transparent.svg";
// import Quality from "../assets/Quality.svg";
// import Time from "../assets/Timely.svg";

// import client1 from "../assets/client1.svg";
// import client2 from "../assets/client2.svg";
// import client3 from "../assets/client3.svg";

export const NAV_LINKS = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
];

export const STATS = [
    { value: 15, suffix: ' Years', label: 'Material Warranty' },
    { value: 30, suffix: '+ Years', label: 'of expertise' },
    { value: 2500, suffix: '+', label: 'Happy Clients' },
    { value: 35, suffix: ' Days', label: 'On Time Delivery' },
    { value: 70, suffix: '% ', prefix: 'Pay ', label: 'Deliver & Install' },
    { value: null, suffix: 'No', label: 'Hidden Cost' } // no counter
];

// export const FEATURES = [
//   {
//     icon: End,
//     title: "End-to-End",
//     para: "Interior Solution",
//     desc: <>From design planning to work completion, we handle every detail with precision. <strong>Our interior architects</strong>  handle everything in design, materials choosing, and execution  process. Our project team handle everything in production, purchase, install and handover the project without stress. </>,
//   },
//   {
//     icon: Transparent,
//     title: "Transparent",
//     para: "Pricing",
//     desc: "Clarity builds trust. We ensure honest and clear communication regarding your investment at every stage. Our detailed final quotes guarantee no hidden charges or unexpected costs later.",
//   },
//   {
//     icon: Quality,
//     title: "Quality",
//     para: "Materials",
//     desc: "We use only premium materials including German fittings, waterproof boards, high-quality wood, hardware, and paints. Every element is carefully chosen for durability and aesthetics, ensuring long-lasting interiors.",
//   },
//   {
//     icon: Time,
//     title: "Timely Execution",
//     para: "& Handover",
//     desc: "We value your time and ensure on-time project completion. Our organized workflow prevents delays and guarantees your home is delivered exactly as promised.",
//   },

//   {
//     icon: End,
//     title: "One Place",
//     para: "One Team",
//     desc: "Architects, interior designers, Engineers, interior fitment, electrical, Plumbing, Smart lighting, counter top works, Automation, Flooring, Wall decor, Soft furnishings. ",
//   },
//   {
//     icon: Transparent,
//     title: "Bespoke ",
//     para: "Design Approach",
//     desc: " Every space we create reflection of your lifestyle and aspirations. Our designers fully customized interior spaces aafrom scratch, tailored specifically to a client’s lifestyle, taste, and space rather than using standard templates or modular solutions. ",
//   },
//   {
//     icon: Quality,
//     title: "Dedicated Project",
//     para: "Management",
//     desc: " A single point of contact ensures a smooth and stress-free experience. We keep you informed at every stage, coordinating seamlessly to deliver a hassle-free journey from start to finish.",
//   },
//   {
//     icon: Time,
//     title: "After-Sales",
//     para: "Support & Assurance",
//     desc: "Our relationship doesn’t end at handover. We provide reliable post-completion support to ensure your space continues to perform and impress long after delivery. ",
//   },
// ];

// export const SPACE_TABS = ["All","Living Room","Bedroom","Kitchen","Dining","Wardrobe","Bathroom","Foyer"];
export const SPACE_TABS = [
    // "Modular kitchen",
    'Bedroom',
    'Living',
    'Kitchen',
    'Dinning',
    'Pooja room',
    'Home improvement'
];

export const SPACES = [
    { id: 1, label: 'Living Room', tab: 'Living Room', bg: 'bg-stone-700' },
    { id: 2, label: 'Master Bedroom', tab: 'Bedroom', bg: 'bg-neutral-600' },
    { id: 3, label: 'Modular Kitchen', tab: 'Kitchen', bg: 'bg-zinc-700' },
    { id: 4, label: 'Dining Space', tab: 'Dining', bg: 'bg-stone-600' },
    { id: 5, label: 'Walk-in Wardrobe', tab: 'Wardrobe', bg: 'bg-neutral-700' },
    { id: 6, label: 'Luxury Bathroom', tab: 'Bathroom', bg: 'bg-zinc-600' },
    { id: 7, label: 'Foyer Design', tab: 'Foyer', bg: 'bg-stone-800' },
    { id: 8, label: 'Kids Room', tab: 'Bedroom', bg: 'bg-stone-700' },
    { id: 9, label: 'Home Office', tab: 'Living Room', bg: 'bg-neutral-600' }
];

export const SOLUTIONS = [
    {
        id: 1,
        title: 'Modular Kitchen',
        desc: 'Kitchen Accessories',
        secdesc: 'Appliances',
        thirddesc: 'Countertops'
    },
    {
        id: 2,
        title: 'Bedroom Interior',
        desc: 'Wardrobe Accessories',
        secdesc: 'Cot & Cot Backdrop',
        thirddesc: 'Dressing'
    },
    {
        id: 3,
        title: 'Living Room Interior',
        desc: 'TV Unit',
        secdesc: 'Designer Partitions',
        thirddesc: 'Pooja Unit'
    },
    {
        id: 4,
        title: 'Pooja Room',
        desc: 'Modern Pooja Unit',
        secdesc: 'Traditional Pooja Unit',
        thirddesc: 'Designer Partitions'
    },
    {
        id: 5,
        title: 'Flooring',
        desc: 'Solid Wood Flooring',
        secdesc: 'Laminated Flooring',
        thirddesc: 'Deck Wood Flooring'
    },
    {
        id: 6,
        title: 'Dinning',
        desc: 'Crockery Storage',
        secdesc: 'Dining Table',
        thirddesc: '& Chairs Appliances'
    },
    {
        id: 7,
        title: 'Home Improvement',
        desc: 'False Ceiling',
        secdesc: 'Painting, Lighting',
        thirddesc: 'Wallpaper, Wall Décor, CNC Wooden Design'
    },
    {
        id: 8,
        title: 'Windows',
        desc: 'Curtains',
        secdesc: 'Blinds, Mosquito Net',
        thirddesc: 'Curtain Rod'
    }
];

export const PROCESS_STEPS = [
    { step: 'Step-01', title: 'Free Consultation', desc: ' Get free consultation, site visit & quote.' },
    { step: 'Step-02', title: 'Booking & Concept Development (10%)', desc: 'Pay 10% to brainstorm and develop the design concepts & Space planning.' },
    { step: 'Step-03', title: 'Design Finalization (15%)', desc: 'Pay 15% Finalize the design stage progress, technical documentation & agreement for work execution.' },
    { step: 'Step-04', title: 'Production & Execution (45%)', desc: 'Pay 45% to Start Production and complete 70% of the work on site.' },
    { step: 'Step-05', title: 'Completion & Handover (30%)', desc: "Pay 30% to complete the project's remaining all work & Handover. And provide a warranty." }
];

export const PROJECTS = [
    { id: 1, title: 'Arun', area: 'Interior Design - Chennai', bg: 'bg-stone-800' },
    { id: 2, title: 'Baskar', area: 'Interior Design - Chennai', bg: 'bg-stone-700' },
    { id: 3, title: 'Krishna', area: 'Interior Design - Chennai', bg: 'bg-neutral-600' },
    { id: 4, title: 'Mohan', area: 'Interior Design - Chennai', bg: 'bg-zinc-700' },
    { id: 5, title: 'NBS Vijay Shankar', area: 'Interior Design - Chennai', bg: 'bg-zinc-700' }
];

export const TESTIMONIALS = [
    {
        img: 'https://res.cloudinary.com/da9s9vymf/image/upload/v1775291650/priya_znpa6c.jpg',
        location: 'Chennai',
        rating: 5,
        text: 'We had a good experience with Arcmen Interior Designer in Chennai. We moved into our new house a few months ago. We stepped into their showroom without any idea about interiors. We came to know a lot of new designs and ideas in the market for home interiors through them. Even though our construction got a bit delayed in between, they were very involved and supportive throughout the project until completion and after too. We loved the way our home turned out to be as we had hoped. Only one suggestion is to reach out to interiors before you start your construction to bring out the best possible ideas and outcomes.We worked with our own electricians and the interior site engineer coordinated well with the electrician and plumbers to bring the expected outcome. Thanks to Arcmen.',
        name: 'Priya Dharshini'
    },
    {
        img: 'https://res.cloudinary.com/da9s9vymf/image/upload/v1775207584/client2_bis6wo.svg',
        location: 'Chennai',
        rating: 5,
        text: 'Arcmen interiors were the right find in terms of budget, communication, design, flexibility, site visits along with their expert suggestions and prompt execution. Our separator design and Pooja were executed perfect and is the highlight of our house. Would totally recommend Mr. Balaraman sir and their team to do up interiors.',
        name: 'krithika sukumar'
    },
    {
        img: 'https://res.cloudinary.com/da9s9vymf/image/upload/v1775207585/client3_m1318z.svg',
        location: 'Chennai',
        rating: 5,
        text: "Our house is located in Ambur, 200 kms away from Chennai. We came to know about Arcmen via google. We contacted Mr. Balaraman. He responded very quickly. He asked us about the details of the house and our expected requirement. Balaraman sir and his team worked very hard to meet our needs and provided their suggestions. Highly knowledgeable right from start to end. After finalizing the 3D design and confirming the drawing details, they executed as same in the design. Arcmen team done a wonderful job to make our new home look perfect with their interior works. They used the same material which was quoted in the agreement. Budget including materials and labour cost didn't exceed the agreement. They completed the work within the given time without any delay using professional carpenters who worked day and night. We really appreciate the Arcmen interior design team for their sincere and perfection in work. Thank you. ",

        name: 'Ramesh M'
    }
];

export const FAQS = [
    {
        q: 'How much does home interior cost in Chennai?',
        a: 'Home interior cost depends on your space, materials, and design style. Basic interiors are budget-friendly, while premium designs cost more.'
    },
    {
        q: 'Do you offer free consultation for home interiors?',
        a: 'Yes. We provide free consultation for home interior projects to understand your needs and suggest the best design.'
    },
    {
        q: 'How long does a home interior project take?',
        a: 'Most home interior projects take 4 to 8 weeks, depending on size and customization.'
    },
    {
        q: 'Will I get a 3D design for my home interior?',
        a: 'Yes. You will get a 3D design to visualize your home interior before starting the work.'
    },
    {
        q: 'What services are included in home interiors?',
        a: 'Home interior services include modular kitchen, wardrobes, TV units, false ceiling, and full home design.'
    },
    {
        q: 'How can I get started with my home interior?',
        a: 'You can call, WhatsApp, or fill out the form to book a free consultation for your home interior project.'
    }
];

export const FEATURES = [
    {
        icon: 'https://res.cloudinary.com/da9s9vymf/image/upload/v1775207589/End_lwen8s.svg',
        title: 'End-to-End',
        para: 'Interior Solution',
        desc: <>As end-to-end interior designers in Chennai, we handle everything from design planning to final execution. Our team manages materials, production, and installation to deliver a smooth and stress-free experience.</>
    },
    {
        icon: 'https://res.cloudinary.com/da9s9vymf/image/upload/v1775207565/Transparent_rozoq9.svg',
        title: 'Transparent',
        para: 'Pricing',
        desc: <>We follow clear and honest pricing at every stage of your project. You get detailed estimates with no hidden costs, so you can plan your home interiors in Chennai with confidence.</>
    },
    {
        icon: 'https://res.cloudinary.com/da9s9vymf/image/upload/v1775207603/Quality_liaq9g.svg',
        title: 'Quality',
        para: 'Materials',
        desc: <>We use high-quality materials and trusted fittings to ensure durability and a long-lasting finish. Every element is carefully selected to enhance both function and style in your home interiors in Chennai.</>
    },
    {
        icon: 'https://res.cloudinary.com/da9s9vymf/image/upload/v1775207564/Timely_vxjjgi.svg',
        title: 'Timely Execution',
        para: '& Handover',
        desc: <>Our team follows a well-planned process to complete projects on time. From design to handover, we ensure smooth coordination and timely delivery without delays.</>
    },
    {
        icon: 'https://res.cloudinary.com/da9s9vymf/image/upload/v1775207589/End_lwen8s.svg',
        title: 'One Place',
        para: 'One Team',
        desc: <>As interior designers in Chennai, we bring everything under one roof — from design planning to execution and final installation. Our team handles every detail to ensure a smooth and well-coordinated experience.</>
    },
    {
        icon: 'https://res.cloudinary.com/da9s9vymf/image/upload/v1775207564/Timely_vxjjgi.svg',
        title: 'Bespoke',
        para: 'Design Approach',
        desc: <>Every home is designed to match your lifestyle, needs, and space. We create customized interiors that are both functional and visually appealing, instead of using standard or repetitive designs.</>
    },
    {
        icon: 'https://res.cloudinary.com/da9s9vymf/image/upload/v1775207603/Quality_liaq9g.svg',
        title: 'Dedicated Project',
        para: 'Management',
        desc: <>A single point of contact manages your project from start to finish. We ensure clear communication, regular updates, and smooth coordination at every stage of your home interiors in Chennai.</>
    },
    {
        icon: 'https://res.cloudinary.com/da9s9vymf/image/upload/v1775207565/Transparent_rozoq9.svg',
        title: 'After-Sales',
        para: 'Support & Assurance',
        desc: <>Our support continues even after project completion. We provide reliable after-sales service to ensure your home interiors in Chennai remain in good condition and perform well over time.</>
    }
];
