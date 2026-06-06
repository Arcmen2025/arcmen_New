 "use client";
 import { useEffect, useState } from "react";
 import { usePathname } from "next/navigation";
 import Image from "next/image";
 import LeadForm from "./LeadForm";
 import LeadFormMobile from "./LeadFormMobile";

 export default function Hero({ isMobileFormOpen, setIsMobileFormOpen }) {
   const pathname = usePathname();
   const [loading, setLoading] = useState(false);
   const [form, setForm] = useState({
     name: "",
     location:"",
     phone: "",
     project: "",
   });

   const inputClass = "w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-[#4dbc15] focus:ring-1 focus:ring-[#4dbc15] transition-all text-sm";


   const isTargetPage = pathname === "/home-interior-designers-in-chennai";

   const handleCollectdata = (e) => {
     const { name, value } = e.target;
     setForm((prev) => ({
       ...prev,
       [name]: value,
     }));
   };

   const onSubmit = async (e) => {
     e.preventDefault();

      //Name validation
     if (!form.name.trim()) {
       alert("Please enter your name");
       return;
     }

     //location validation
     if (!form.location.trim()) {
       alert("Please enter your name");
       return;
     }

      //Phone validation
     if (!/^[6-9]\d{9}$/.test(form.phone)) {
       alert("Please enter a valid 10-digit mobile number");
       return;
     }

     try {
       setLoading(true);

       const payload = {
         fullName: form.name,
         location : form.location,
         mobileNumber: form.phone,
         projectType: form.project || "Residential Interior",
       };

       const response = await fetch(API_URL, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(payload),
       });

       if (response.ok) {
         window.location.href = "/interior-designers-chennai/thank-you";
       } else {
         throw new Error("Failed to submit");
       }
     } catch (error) {
       console.error("API Error:", error);
       alert("Something went wrong. Please try again.");
     } finally {
       setLoading(false);
     }
   };


   useEffect(() => {
     if (isMobileFormOpen) {
       document.body.style.overflow = "hidden";
     } else {
       document.body.style.overflow = "auto";
     }

     return () => {
       document.body.style.overflow = "auto";
     };
   }, [isMobileFormOpen]);

   return (
     <>
       {/* Desktop Section */}
       <section className="hidden md:relative md:py-0 md:min-h-screen md:flex md:flex-col md:justify-center overflow-hidden">
        
         {/* Optimized Desktop Background Image */}
         <div className="absolute inset-0 z-0">
           <Image
             src="https:arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778647969383-hero-banner--1.webp"
             alt="Interior Design Desktop Banner"
             fill
             priority
             className="object-cover object-center"
             sizes="100vw"
             quality={85}
           />
           {/* Overlays */}
           <div className="absolute inset-0 bg-black/20"></div>
           <div className="absolute inset-0 bg-black/60"></div>
         </div>

         <div className="relative z-10 flex-1 flex items-center">
           <div className="px-8 md:px-32 w-full">
            
             {/* Optimized Logo */}
             <Image
               src="https:assets.webdads2u.com/images/1777294926124-djfvkpfrfmvfizw7x6ox-1.png"
               alt="Arcmen Logo"
               width={130}
               height={45}
               priority
               className="w-[130px] h-auto md:w-[130px] object-contain mb-4"
             />

             <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
               <div className="text-white">
                 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2.5 rounded-md mb-3 md:mb-6">
                   <span className="text-xs md:text-sm text-white">
                     {isTargetPage
                       ? "⭐ Chennai's Best Home Interior Designers Company"
                       : "⭐ Chennai's Top Interior Designers Company"}
                   </span>
                 </div>

                 <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-4 text-[#7ce04a]">
                   {isTargetPage ? (
                     <>
                       Home Interior Designers in Chennai
                       <span className="md:hidden text-white"> -</span>
                       <span className="hidden text-white"> -</span>
                       <span className="text-white ps-2">
                         For Modern, Beautiful & Affordable Home Interiors
                       </span>
                     </>
                   ) : (
                     <>
                       Best Interior Designers in Chennai{" "}
                       <span className="text-white">for Homes</span>
                       <br />
                       <span className="text-white">
                         Apartments & Luxury Spaces
                       </span>
                     </>
                   )}
                 </h1>
                

                 <div className="hidden md:block text-sm md:mb-6">
                   <ul className="list-disc pl-4 space-y-2 marker:text-yellow-400">
                     <li>4.7/5 Rating</li>
                     <li>No Hidden Cost</li>
                     <li>35 Days Move-In Guarantee</li>
                     <li>15 Years Flat Warranty on All Interior Work</li>
                   </ul>
                 </div>
               </div>

               <div className="hidden md:flex justify-center md:justify-end w-full md:max-w-2xl">
                 <LeadForm />
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Mobile Section */}
       <section className="md:hidden relative py-0 min-h-[55vh] flex flex-col justify-center overflow-hidden bg-black/80">
        
         {/* Optimized Mobile Background Image */}
         <div className="absolute inset-0 z-0">
           <Image
             src="https:arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778648329631-hero-banner.webp"
             alt="Interior Design Mobile Banner"
             fill
             priority
             className="object-cover object-center"
             sizes="100vw"
             quality={85}
           />
           <div className="absolute inset-0 bg-black/60"></div>
         </div>

         <div className="relative z-10 flex-1 flex items-center mt-10">
           <div className="px-6 w-full relative">
            
             {/* Logo */}
             <Image
               src="https:assets.webdads2u.com/images/1777294926124-djfvkpfrfmvfizw7x6ox-1.png"
               alt="Arcmen Logo"
               width={80}
               height={28}
               priority
               className="w-20 h-auto object-contain mb-2"
             />

             <div className="flex flex-col items-center">
               <div className="text-white w-full mb-0">
                 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-2.5 py-1.5 rounded-md mb-2">
                   <span className="text-[10px] text-white whitespace-nowrap">
                     {isTargetPage
                       ? "⭐ Chennai's Best Home Interior Designers Company"
                       : "⭐ Chennai's Top Interior Designers Company"}
                   </span>
                 </div>

                 <h1 className="text-2xl font-semibold leading-tight text-[#7ce04a] mb-6">
                   {isTargetPage ? (
                     <>
                       Home Interior Designers in Chennai
                       <span className="text-white"> For Modern,</span>
                       <span className="text-white block">
                         Beautiful & Affordable Home Interiors
                       </span>
                     </>
                   ) : (
                     <>
                       Best Interior Designers in Chennai{" "}
                       <span className="text-white">for Homes</span>
                       <span className="text-white block">
                         Apartments & Luxury Spaces
                       </span>
                     </>
                   )}
                 </h1>
               </div>

               {/* <div className="w-full flex justify-start mb-20">
                 <button
                   onClick={() => setIsMobileFormOpen(true)}
                   className="w-[250px] bg-[#4dbc15] hover:bg-[#41a211] text-white font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-start gap-2 border border-black/30 shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-[0.98]"
                 >
                   Get a Free Interior quote
                   <span className="text-xl font-light leading-none pb-0.5 animate-arrowMove">
                     →
                   </span>
                 </button>
               </div> */}
                 {/* UNCOMMENTED: Inline Form - Always visible below the button */}
               <div className="w-full">
                 <form onSubmit={onSubmit} className="space-y-4">
                   <input
                     type="text"
                     name="name"
                     value={form.name}
                     onChange={handleCollectdata}
                     placeholder="Full Name"
                     className={inputClass}
                     required
                   />

                   <input
                     type="text"
                     name="location"
                     value={form.location}
                     onChange={handleCollectdata}
                     placeholder="Full Name"
                     className={inputClass}
                     required
                   />

                   <input
                     type="tel"
                     name="phone"
                     value={form.phone}
                     onChange={handleCollectdata}
                     placeholder="Mobile Number"
                     className={inputClass}
                     required
                   />

                   {/* Select */}
                   <div className="relative">
                     <select
                       name="project"
                       value={form.project}
                       onChange={handleCollectdata}
                       className={`${inputClass} appearance-none cursor-pointer ${
                         form.project === "" ? "text-white/60" : "text-white"
                       }`}
                     >
                       <option className="bg-black/90" value="" disabled>
                         Project Type
                       </option>
                       <option className="bg-black/90" value="2 BHK">2 BHK</option>
                       <option className="bg-black/90" value="3 BHK">3 BHK</option>
                       <option className="bg-black/90" value="4 BHK +">4 BHK +</option>
                       <option className="bg-black/90" value="Villa">Villa</option>
                     </select>

                     {/* Arrow */}
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                       <svg
                         className="h-4 w-4"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M19 9l-7 7-7-7"
                         />
                       </svg>
                     </div>
                   </div>

                   <button
                     type="submit"
                     disabled={loading}
                     className="w-full bg-[#4dbc15] hover:bg-[#41a211] text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-2"
                   >
                     {loading ? (
                       <>
                         <svg className="animate-spin h-5 w-5 text-white" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                         </svg>
                         Submitting...
                       </>
                     ) : (
                       "Book a Free Consultation"
                     )}
                   </button>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Floating Button */}
       <button
         onClick={() => setIsMobileFormOpen(true)}
         className="md:hidden fixed right-0 top-[50%] -translate-y-1/2 bg-white pl-2.5 pr-1 py-2 rounded-l-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center z-[90] active:scale-95 transition-transform border border-r-0 border-gray-100"
         aria-label="Open Lead Form"
       >
         <div className="bg-[#4dbc15] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
           <div className="relative z-10 flex items-center justify-center animate-arrowBlink">
             <svg
               className="w-6 h-6 text-white"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2.5"
                 d="M15 19l-7-7 7-7"
               />
             </svg>
           </div>
           <span className="absolute inset-0 rounded-full border-[1.5px] border-white/40 animate-ping"></span>
         </div>
       </button>

        {/* Mobile Modal */}
   {isMobileFormOpen && (
     <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col justify-center p-6 animate-slideIn">
       <button
         onClick={() => setIsMobileFormOpen(false)}
         className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-[110]"
       >
         <svg
           className="w-6 h-6"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M6 18L18 6M6 6l12 12"
           />
         </svg>
       </button>

       <div className="w-full relative z-10 flex justify-center">
         <LeadForm isMobile={true} id="form" />
       </div>
     </div>
   )}

   {/* GLOBAL STYLE */}
   <style jsx>{`
     @keyframes arrowBlink {
       0%,
       100% {
         transform: translateX(0);
         opacity: 1;
       }

       50% {
         transform: translateX(-6px);
         opacity: 0.4;
       }
     }

     .animate-arrowBlink {
       animation: arrowBlink 1s infinite ease-in-out;
     }
   `}</style>
     </>
   );
 }



//  "use client";

//  import { useEffect, useState } from "react";
//  import { usePathname } from "next/navigation";
//  import Image from "next/image";
//  import LeadForm from "./LeadForm";
//  import LeadFormMobile from "./LeadFormMobile";

//  const API_URL = "https:api.arcmeninterior.com/api/v1/forms/landing-page/contact-us";

//  export default function Hero({ isMobileFormOpen, setIsMobileFormOpen }) {
//    const pathname = usePathname();
//    const [loading, setLoading] = useState(false);
//    const [form, setForm] = useState({
//      name: "",
//      phone: "",
//      project: "",
//    });

//    const inputClass = "w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-[#4dbc15] focus:ring-1 focus:ring-[#4dbc15] transition-all text-sm";

//    const isTargetPage = pathname === "/home-interior-designers-in-chennai";

//    const handleCollectdata = (e) => {
//      const { name, value } = e.target;
//      setForm((prev) => ({
//        ...prev,
//        [name]: value,
//      }));
//    };

//    const onSubmit = async (e) => {
//      e.preventDefault();

//       Name validation
//      if (!form.name.trim()) {
//        alert("Please enter your name");
//        return;
//      }

//       Phone validation
//      if (!/^[6-9]\d{9}$/.test(form.phone)) {
//        alert("Please enter a valid 10-digit mobile number");
//        return;
//      }

//      try {
//        setLoading(true);

//        const payload = {
//          fullName: form.name,
//          mobileNumber: form.phone,
//          projectType: form.project || "Residential Interior",
//        };

//        const response = await fetch(API_URL, {
//          method: "POST",
//          headers: {
//            "Content-Type": "application/json",
//          },
//          body: JSON.stringify(payload),
//        });

//        if (response.ok) {
//          window.location.href = "/interior-designers-chennai/thank-you";
//        } else {
//          throw new Error("Failed to submit");
//        }
//      } catch (error) {
//        console.error("API Error:", error);
//        alert("Something went wrong. Please try again.");
//      } finally {
//        setLoading(false);
//      }
//    };

//    useEffect(() => {
//      if (isMobileFormOpen) {
//        document.body.style.overflow = "hidden";
//      } else {
//        document.body.style.overflow = "auto";
//      }

//      return () => {
//        document.body.style.overflow = "auto";
//      };
//    }, [isMobileFormOpen]);

//    return (
//      <>
//        {/* Desktop Section */}
//        <section className="hidden md:relative md:py-0 md:min-h-screen md:flex md:flex-col md:justify-center overflow-hidden">
        
//          {/* Optimized Desktop Background Image */}
//          <div className="absolute inset-0 z-0">
//            <Image
//              src="https:arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778647969383-hero-banner--1.webp"
//              alt="Interior Design Desktop Banner"
//              fill
//              priority
//              className="object-cover object-center"
//              sizes="100vw"
//              quality={85}
//            />
//            {/* Overlays */}
//            <div className="absolute inset-0 bg-black/20"></div>
//            <div className="absolute inset-0 bg-black/60"></div>
//          </div>

//          <div className="relative z-10 flex-1 flex items-center">
//            <div className="px-8 md:px-32 w-full">
            
//              {/* Optimized Logo */}
//              <Image
//                src="https:assets.webdads2u.com/images/1777294926124-djfvkpfrfmvfizw7x6ox-1.png"
//                alt="Arcmen Logo"
//                width={130}
//                height={45}
//                priority
//                className="w-[130px] h-auto md:w-[130px] object-contain mb-4"
//              />

//              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
//                <div className="text-white">
//                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2.5 rounded-md mb-3 md:mb-6">
//                    <span className="text-xs md:text-sm text-white">
//                      {isTargetPage
//                        ? "⭐ Chennai's Best Home Interior Designers Company"
//                        : "⭐ Chennai's Top Interior Designers Company"}
//                    </span>
//                  </div>

//                  <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-4 text-[#7ce04a]">
//                    {isTargetPage ? (
//                      <>
//                        Home Interior Designers in Chennai
//                        <span className="md:hidden text-white"> -</span>
//                        <span className="hidden text-white"> -</span>
//                        <span className="text-white ps-2">
//                          For Modern, Beautiful & Affordable Home Interiors
//                        </span>
//                      </>
//                    ) : (
//                      <>
//                        Best Interior Designers in Chennai{" "}
//                        <span className="text-white">for Homes</span>
//                        <br />
//                        <span className="text-white">
//                          Apartments & Luxury Spaces
//                        </span>
//                      </>
//                    )}
//                  </h1>
                

//                  <div className="hidden md:block text-sm md:mb-6">
//                    <ul className="list-disc pl-4 space-y-2 marker:text-yellow-400">
//                      <li>4.7/5 Rating</li>
//                      <li>No Hidden Cost</li>
//                      <li>35 Days Move-In Guarantee</li>
//                      <li>15 Years Flat Warranty on All Interior Work</li>
//                    </ul>
//                  </div>
//                </div>

//                <div className="hidden md:flex justify-center md:justify-end w-full md:max-w-2xl">
//                  <LeadForm />
//                </div>
//              </div>
//            </div>
//          </div>
//        </section>

//        {/* Mobile Section */}
//        <section className="md:hidden relative py-0 min-h-[55vh] flex flex-col justify-center overflow-hidden bg-black/80">
        
//          {/* Optimized Mobile Background Image */}
//          <div className="absolute inset-0 z-0">
//            <Image
//              src="https:arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778648329631-hero-banner.webp"
//              alt="Interior Design Mobile Banner"
//              fill
//              priority
//              className="object-cover object-center"
//              sizes="100vw"
//              quality={85}
//            />
//            <div className="absolute inset-0 bg-black/60"></div>
//          </div>

//          <div className="relative z-10 flex-1 flex items-center py-10">
//            <div className="px-6 w-full relative">
            
//              {/* Logo */}
//              <Image
//                src="https:assets.webdads2u.com/images/1777294926124-djfvkpfrfmvfizw7x6ox-1.png"
//                alt="Arcmen Logo"
//                width={80}
//                height={28}
//                priority
//                className="w-20 h-auto object-contain mb-2"
//              />

//              <div className="flex flex-col items-center">
//                <div className="text-white w-full mb-0">
//                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-2.5 py-1.5 rounded-md mb-2">
//                    <span className="text-[10px] text-white whitespace-nowrap">
//                      {isTargetPage
//                        ? "⭐ Chennai's Best Home Interior Designers Company"
//                        : "⭐ Chennai's Top Interior Designers Company"}
//                    </span>
//                  </div>

//                  <h1 className="text-2xl font-semibold leading-tight text-[#7ce04a] mb-6">
//                    {isTargetPage ? (
//                      <>
//                        Home Interior Designers in Chennai
//                        <span className="text-white"> For Modern,</span>
//                        <span className="text-white block">
//                          Beautiful & Affordable Home Interiors
//                        </span>
//                      </>
//                    ) : (
//                      <>
//                        Best Interior Designers in Chennai{" "}
//                        <span className="text-white">for Homes</span>
//                        <span className="text-white block">
//                          Apartments & Luxury Spaces
//                        </span>
//                      </>
//                    )}
//                  </h1>
//                </div>

//                {/* UNCOMMENTED: Get a Free Interior quote Button - Opens Modal Form */}
//                <div className="w-full flex justify-start mb-6">
//                  <button
//                    onClick={() => setIsMobileFormOpen(true)}
//                    className="w-[250px] bg-[#4dbc15] hover:bg-[#41a211] text-white font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-start gap-2 border border-black/30 shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-[0.98]"
//                  >
//                    Get a Free Interior quote
//                    <span className="text-xl font-light leading-none pb-0.5 animate-arrowMove">
//                      →
//                    </span>
//                  </button>
//                </div>

//                {/* UNCOMMENTED: Inline Form - Always visible below the button */}
//                <div className="w-full">
//                  <form onSubmit={onSubmit} className="space-y-4">
//                    <input
//                      type="text"
//                      name="name"
//                      value={form.name}
//                      onChange={handleCollectdata}
//                      placeholder="Full Name"
//                      className={inputClass}
//                      required
//                    />

//                    <input
//                      type="tel"
//                      name="phone"
//                      value={form.phone}
//                      onChange={handleCollectdata}
//                      placeholder="Mobile Number"
//                      className={inputClass}
//                      required
//                    />

//                    {/* Select */}
//                    <div className="relative">
//                      <select
//                        name="project"
//                        value={form.project}
//                        onChange={handleCollectdata}
//                        className={`${inputClass} appearance-none cursor-pointer ${
//                          form.project === "" ? "text-white/60" : "text-white"
//                        }`}
//                      >
//                        <option className="bg-black/90" value="" disabled>
//                          Project Type
//                        </option>
//                        <option className="bg-black/90" value="2 BHK">2 BHK</option>
//                        <option className="bg-black/90" value="3 BHK">3 BHK</option>
//                        <option className="bg-black/90" value="4 BHK +">4 BHK +</option>
//                        <option className="bg-black/90" value="Villa">Villa</option>
//                      </select>

//                      {/* Arrow */}
//                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
//                        <svg
//                          className="h-4 w-4"
//                          fill="none"
//                          stroke="currentColor"
//                          viewBox="0 0 24 24"
//                        >
//                          <path
//                            strokeLinecap="round"
//                            strokeLinejoin="round"
//                            strokeWidth="2"
//                            d="M19 9l-7 7-7-7"
//                          />
//                        </svg>
//                      </div>
//                    </div>

//                    <button
//                      type="submit"
//                      disabled={loading}
//                      className="w-full bg-[#4dbc15] hover:bg-[#41a211] text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                    >
//                      {loading ? (
//                        <>
//                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                          </svg>
//                          Submitting...
//                        </>
//                      ) : (
//                        "Book a Free Consultation"
//                      )}
//                    </button>
//                  </form>
//                </div>
//              </div>
//            </div>
//          </div>
//        </section>

//        {/* Floating Button - Opens Modal Form */}
//        <button
//          onClick={() => setIsMobileFormOpen(true)}
//          className="md:hidden fixed right-0 top-[50%] -translate-y-1/2 bg-white pl-2.5 pr-1 py-2 rounded-l-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center z-[90] active:scale-95 transition-transform border border-r-0 border-gray-100"
//          aria-label="Open Lead Form"
//        >
//          <div className="bg-[#4dbc15] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
//            <div className="relative z-10 flex items-center justify-center animate-arrowBlink">
//              <svg
//                className="w-6 h-6 text-white"
//                fill="none"
//                stroke="currentColor"
//                viewBox="0 0 24 24"
//              >
//                <path
//                  strokeLinecap="round"
//                  strokeLinejoin="round"
//                  strokeWidth="2.5"
//                  d="M15 19l-7-7 7-7"
//                />
//              </svg>
//            </div>
//            <span className="absolute inset-0 rounded-full border-[1.5px] border-white/40 animate-ping"></span>
//          </div>
//        </button>

//        {/* Mobile Modal - Shows LeadFormMobile with correct button text */}
//        {isMobileFormOpen && (
//          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-center p-6 animate-slideIn">
//            <button
//              onClick={() => setIsMobileFormOpen(false)}
//              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-[110]"
//              aria-label="Close Form"
//            >
//              <svg
//                className="w-6 h-6"
//                fill="none"
//                stroke="currentColor"
//                viewBox="0 0 24 24"
//              >
//                <path
//                  strokeLinecap="round"
//                  strokeLinejoin="round"
//                  strokeWidth="2"
//                  d="M6 18L18 6M6 6l12 12"
//                />
//              </svg>
//            </button>

//            <div className="w-full relative z-10 flex justify-center">
//              {/* Use LeadFormMobile which has "Book a Free Consultation" button */}
//              <LeadFormMobile isMobile={true} id="mobile-form" />
//            </div>
//          </div>
//        )}

//        {/* GLOBAL STYLES */}
//        <style jsx>{`
//          @keyframes arrowBlink {
//            0%,
//            100% {
//              transform: translateX(0);
//              opacity: 1;
//            }
//            50% {
//              transform: translateX(-6px);
//              opacity: 0.4;
//            }
//          }

//          .animate-arrowBlink {
//            animation: arrowBlink 1s infinite ease-in-out;
//          }

//          @keyframes arrowMove {
//            0%, 100% {
//              transform: translateX(0);
//            }
//            50% {
//              transform: translateX(5px);
//            }
//          }

//          .animate-arrowMove {
//            animation: arrowMove 1s infinite ease-in-out;
//          }

//          @keyframes slideIn {
//            from {
//              opacity: 0;
//              transform: translateY(20px);
//            }
//            to {
//              opacity: 1;
//              transform: translateY(0);
//            }
//          }

//          .animate-slideIn {
//            animation: slideIn 0.3s ease-out;
//          }
//        `}</style>
//      </>
//    );
//  }







// "use client";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import LeadForm from "./LeadForm";
// import LeadFormMobile from "./LeadFormMobile";

// export default function Hero({ isMobileFormOpen, setIsMobileFormOpen }) {
//   const pathname = usePathname();

//   const isTargetPage = pathname === "/home-interior-designers-in-chennai";

//   useEffect(() => {
//     if (isMobileFormOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isMobileFormOpen]);

//   return (
//     <>
//       {/* Desktop Section */}
//       <section className="hidden md:relative md:py-0 md:min-h-screen md:flex md:flex-col md:justify-center overflow-hidden">
        
//         {/* Optimized Desktop Background Image */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778647969383-hero-banner--1.webp"
//             alt="Interior Design Desktop Banner"
//             fill
//             priority
//             className="object-cover object-center"
//             sizes="100vw"
//             quality={85}
//           />
//           {/* Overlays */}
//           <div className="absolute inset-0 bg-black/20"></div>
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>

//         <div className="relative z-10 flex-1 flex items-center">
//           <div className="px-8 md:px-32 w-full">
            
//             {/* Optimized Logo */}
//             <Image
//               src="https://assets.webdads2u.com/images/1777294926124-djfvkpfrfmvfizw7x6ox-1.png"
//               alt="Arcmen Logo"
//               width={130}
//               height={45}
//               priority
//               className="w-[130px] h-auto md:w-[130px] object-contain mb-4"
//             />

//             <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
//               <div className="text-white">
//                 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2.5 rounded-md mb-3 md:mb-6">
//                   <span className="text-xs md:text-sm text-white">
//                     {isTargetPage
//                       ? "⭐ Chennai's Best Home Interior Designers Company"
//                       : "⭐ Chennai's Top Interior Designers Company"}
//                   </span>
//                 </div>

//                 <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-4 text-[#7ce04a]">
//                   {isTargetPage ? (
//                     <>
//                       Home Interior Designers in Chennai
//                       <span className="md:hidden text-white"> -</span>
//                       <span className="hidden text-white"> -</span>
//                       <span className="text-white ps-2">
//                         For Modern, Beautiful & Affordable Home Interiors
//                       </span>
//                     </>
//                   ) : (
//                     <>
//                       Best Interior Designers in Chennai{" "}
//                       <span className="text-white">for Homes</span>
//                       <br />
//                       <span className="text-white">
//                         Apartments & Luxury Spaces
//                       </span>
//                     </>
//                   )}
//                 </h1>
                

//                 <div className="hidden md:block text-sm md:mb-6">
//                   <ul className="list-disc pl-4 space-y-2 marker:text-yellow-400">
//                     <li>4.7/5 Rating</li>
//                     <li>No Hidden Cost</li>
//                     <li>35 Days Move-In Guarantee</li>
//                     <li>15 Years Flat Warranty on All Interior Work</li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="hidden md:flex justify-center md:justify-end w-full md:max-w-2xl">
//                 <LeadForm />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mobile Section */}
//       <section className="md:hidden relative py-0 min-h-[55vh] flex flex-col justify-center overflow-hidden bg-black/80">
        
//         {/* Optimized Mobile Background Image */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778648329631-hero-banner.webp"
//             alt="Interior Design Mobile Banner"
//             fill
//             priority
//             className="object-cover object-center"
//             sizes="100vw"
//             quality={85}
//           />
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>

//         <div className="relative z-10 flex-1 flex items-center mt-10">
//           <div className="px-6 w-full relative">
            
//             {/* Logo */}
//             <Image
//               src="https://assets.webdads2u.com/images/1777294926124-djfvkpfrfmvfizw7x6ox-1.png"
//               alt="Arcmen Logo"
//               width={80}
//               height={28}
//               priority
//               className="w-20 h-auto object-contain mb-2"
//             />

//             <div className="flex flex-col items-center">
//               <div className="text-white w-full mb-0">
//                 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-2.5 py-1.5 rounded-md mb-2">
//                   <span className="text-[10px] text-white whitespace-nowrap">
//                     {isTargetPage
//                       ? "⭐ Chennai's Best Home Interior Designers Company"
//                       : "⭐ Chennai's Top Interior Designers Company"}
//                   </span>
//                 </div>

//                 <h1 className="text-2xl font-semibold leading-tight text-[#7ce04a] mb-6">
//                   {isTargetPage ? (
//                     <>
//                       Home Interior Designers in Chennai
//                       <span className="text-white"> For Modern,</span>
//                       <span className="text-white block">
//                         Beautiful & Affordable Home Interiors
//                       </span>
//                     </>
//                   ) : (
//                     <>
//                       Best Interior Designers in Chennai{" "}
//                       <span className="text-white">for Homes</span>
//                       <span className="text-white block">
//                         Apartments & Luxury Spaces
//                       </span>
//                     </>
//                   )}
//                 </h1>
//               </div>

//               <div className="w-full flex justify-start mb-20">
//                 <button
//                   onClick={() => setIsMobileFormOpen(true)}
//                   className="w-[250px] bg-[#4dbc15] hover:bg-[#41a211] text-white font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-start gap-2 border border-black/30 shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-[0.98]"
//                 >
//                   Get a Free Interior quote
//                   <span className="text-xl font-light leading-none pb-0.5 animate-arrowMove">
//                     →
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Floating Button */}
//       <button
//         onClick={() => setIsMobileFormOpen(true)}
//         className="md:hidden fixed right-0 top-[50%] -translate-y-1/2 bg-white pl-2.5 pr-1 py-2 rounded-l-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center z-[90] active:scale-95 transition-transform border border-r-0 border-gray-100"
//         aria-label="Open Lead Form"
//       >
//         <div className="bg-[#4dbc15] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
//           <div className="relative z-10 flex items-center justify-center animate-arrowBlink">
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2.5"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </div>
//           <span className="absolute inset-0 rounded-full border-[1.5px] border-white/40 animate-ping"></span>
//         </div>
//       </button>

//        {/* Mobile Modal */}
//   {isMobileFormOpen && (
//     <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col justify-center p-6 animate-slideIn">
//       <button
//         onClick={() => setIsMobileFormOpen(false)}
//         className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-[110]"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </button>

//       <div className="w-full relative z-10 flex justify-center">
//         <LeadForm isMobile={true} id="form" />
//       </div>
//     </div>
//   )}

//   {/* GLOBAL STYLE */}
//   <style jsx>{`
//     @keyframes arrowBlink {
//       0%,
//       100% {
//         transform: translateX(0);
//         opacity: 1;
//       }

//       50% {
//         transform: translateX(-6px);
//         opacity: 0.4;
//       }
//     }

//     .animate-arrowBlink {
//       animation: arrowBlink 1s infinite ease-in-out;
//     }
//   `}</style>
//     </>
//   );
// }