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
        q: 'How much do interior designers cost in Chennai?',
        a: 'Interior design costs in Chennai typically range from ₹800 to ₹2500 per square foot depending on the style, materials, and scope of work. A standard 2BHK home interior can cost between ₹3,00,000 to ₹8,00,000 with complete execution.'
    },
    {
        q: 'How do I find the best home interior designers in Chennai?',
        a: 'Look for designers with a strong portfolio, verified client reviews, and end-to-end execution experience. Arcmen has 30+ years of experience and 2000+ completed projects across Chennai making them one of the most trusted choices.'
    },
    {
        q: 'Are there affordable interior designers in Chennai for small budgets?',
        a: 'Yes. Many interior designers in Chennai offer flexible packages starting from ₹800 per sq ft. Arcmen offers budget-friendly designs without compromising on quality with customised plans for every budget.'
    },
    {
        q: 'What does a home interior designer in Chennai do?',
        a: 'A home interior designer handles everything from space planning, furniture selection, false ceiling, lighting, modular kitchen, wardrobes to complete handover. You get a beautiful home without the stress of managing multiple vendors.'
    },
    {
        q: 'How long does a home interior project take in Chennai?',
        a: 'A typical 2BHK home interior project takes 45 to 90 days depending on the scope of work. At Arcmen we follow a strict timeline with on-time delivery guaranteed on every project.'
    },
    {
        q: 'Why should I hire an interior designer in Chennai instead of doing it myself?',
        a: 'A professional interior designer saves you time, money, and costly mistakes. They have trade contacts, design expertise, and project management experience that ensures your home looks exactly how you imagined — within budget and on time.'
    }
];
