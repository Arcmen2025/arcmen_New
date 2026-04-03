// src/data/constants.js

// import End from "../assets/end.svg";
// import Transparent from "../assets/transparent.svg";
// import Quality from "../assets/Quality.svg";
// import Time from "../assets/Timely.svg";

// import client1 from "../assets/client1.svg";
// import client2 from "../assets/client2.svg";
// import client3 from "../assets/client3.svg";

export const NAV_LINKS = [
  { label: "Home",      href: "#"         },
  { label: "About",     href: "#about"    },
  { label: "Services",  href: "#services" },
  { label: "Portfolio", href: "#portfolio"},
  { label: "Contact",   href: "#contact"  },
];

export const STATS = [
  { value: 15, suffix: " Years", label: "Material Warranty" },
  { value: 30, suffix: "+ Years", label: "of expertise" },
  { value: 2500, suffix: "+", label: "Happy Clients" },
  { value: 35, suffix: " Days", label: "On Time Delivery" },
  { value: 70, suffix: "% ", prefix: "Pay ", label: "Deliver & Install" },
  { value: null, suffix: "No", label: "Hidden Cost" }, // no counter
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
  "Bedroom",
  "Living",
  "Kitchen",
  "Dinning",
  "Pooja room",
  "Home improvement",
];

export const SPACES = [
  { id:1, label:"Living Room",      tab:"Living Room", bg:"bg-stone-700"   },
  { id:2, label:"Master Bedroom",   tab:"Bedroom",     bg:"bg-neutral-600" },
  { id:3, label:"Modular Kitchen",  tab:"Kitchen",     bg:"bg-zinc-700"    },
  { id:4, label:"Dining Space",     tab:"Dining",      bg:"bg-stone-600"   },
  { id:5, label:"Walk-in Wardrobe", tab:"Wardrobe",    bg:"bg-neutral-700" },
  { id:6, label:"Luxury Bathroom",  tab:"Bathroom",    bg:"bg-zinc-600"    },
  { id:7, label:"Foyer Design",     tab:"Foyer",       bg:"bg-stone-800"   },
  { id:8, label:"Kids Room",        tab:"Bedroom",     bg:"bg-stone-700"   },
  { id:9, label:"Home Office",      tab:"Living Room", bg:"bg-neutral-600" },
];

export const SOLUTIONS = [
  {
    id: 1,
    title: "Modular Kitchen",
    desc: "Kitchen Accessories",
    secdesc: "Appliances",
    thirddesc: "Countertops",
  },
  {
    id: 2,
    title: "Bedroom Interior",
    desc: "Wardrobe Accessories",
    secdesc: "Cot & Cot Backdrop",
    thirddesc: "Dressing",
  },
  {
    id: 3,
    title: "Living Room Interior",
    desc: "TV Unit",
    secdesc: "Designer Partitions",
    thirddesc: "Pooja Unit",
  },
  {
    id: 4,
    title: "Pooja Room",
    desc: "Modern Pooja Unit",
    secdesc: "Traditional Pooja Unit",
    thirddesc: "Designer Partitions",
  },
  {
    id: 5,
    title: "Flooring",
    desc: "Solid Wood Flooring",
    secdesc: "Laminated Flooring",
    thirddesc: "Deck Wood Flooring",
  },
  {
    id: 6,
    title: "Dinning",
    desc: "Crockery Storage",
    secdesc: "Dining Table",
    thirddesc: "& Chairs Appliances",
  },
  {
    id: 7,
    title: "Home Improvement",
    desc: "False Ceiling",
    secdesc: "Painting, Lighting",
    thirddesc: "Wallpaper, Wall Décor, CNC Wooden Design",
  },
  {
    id: 8,
    title: "Windows",
    desc: "Curtains",
    secdesc: "Blinds, Mosquito Net",
    thirddesc: "Curtain Rod",
  },
];

export const PROCESS_STEPS = [
  { step:"Step-01", title:"Free Consultation",           desc:"Connect with our design expert for a detailed discussion and receive a complimentary consultation and project quote tailored to your requirements." },
  { step:"Step-02", title:"Booking & Concept Development (10%)", desc:"Confirm your project by paying 10% as booking advance. Our team will begin brainstorming, space planning, and developing initial design concepts aligned with your vision." },
  { step:"Step-03", title:"Design Finalization (15%)",         desc:"Upon approval, pay 15% to freeze the design. We will proceed with detailed production drawings and technical documentation for execution." },
  { step:"Step-04", title:"Production & Execution (45%)",   desc:"Pay 45% to initiate the production process. Our factory and on-site team will execute the project and complete up to 70% of the work as per the approved design." },
  { step:"Step-05", title:"Completion & Handover (30%)",       desc:"The final 30% is payable upon project completion. After quality checks, we will proceed with the final handover of your beautifully finished space." },
];



export const PROJECTS = [
  { id:1, title:"Arun",     area:"Interior Design - Chennai", bg:"bg-stone-800"   },
  { id:2, title:"Baskar",   area:"Interior Design - Chennai", bg:"bg-stone-700"   },
  { id:3, title:"Krishna",area:"Interior Design - Chennai", bg:"bg-neutral-600" },
  { id:4, title:"Mohan",    area:"Interior Design - Chennai", bg:"bg-zinc-700"    },
  { id:5, title:"NBS Vijay Shankar",    area:"Interior Design - Chennai", bg:"bg-zinc-700"    },
];

export const TESTIMONIALS = [
  {
    img:"https://res.cloudinary.com/da9s9vymf/image/upload/v1775207585/client1_heo2zl.svg", location:"Chennai", rating:5,
    text:"We had a good experience with Arcmen Interior Designer in Chennai. We moved into our new house a few months ago. We stepped into their showroom without any idea about interiors."  ,
    name:"Priya Dharshini",
  },
  {
    img:"https://res.cloudinary.com/da9s9vymf/image/upload/v1775207584/client2_bis6wo.svg", location:"Chennai", rating:5,
    text:"Arcmen interiors were the right find in terms of budget, communication, design, flexibility, site visits along with their expert suggestions.",
    name:"krithika sukumar",
  },
  {
    img:"https://res.cloudinary.com/da9s9vymf/image/upload/v1775207585/client3_m1318z.svg", location:"Chennai", rating:5,
    text:"Our house is located in Ambur, 200 kms away from Chennai. We came to know about Arcmen via google. We contacted Mr. Balaraman. ",
    name:"Ramesh M",

  },
];

export const FAQS = [
  {
    q:"How much does home interior design cost?",
    a:"Interior design cost depends on home size, materials, and scope of work. We share clear pricing after understanding your needs, with no hidden charges later.",
  },
  {
    q:"Do you provide complete turnkey interior solutions?",
    a:"Yes. Arcmen Interiors offers complete turnkey interiors, handling design, materials, execution, and final handover under one team.",
  },
  {
    q:"Can I have design ideas before starting the work?",
    a:"Yes. We provide detailed 3D design previews so you can see layouts, colors, and finishes clearly before approving and starting the interior work.",
  },
  {
    q:"How long will the interior project take?",
    a:"Project timelines depend on design and scope. After design approval, we follow a clear schedule and complete the work as planned.",
  },
  {
    q:"Do you offer warranty on materials and work?",
    a:"Yes. We use quality materials and provide warranty support, giving you peace of mind even after your home interior project is completed.",
  },
];
