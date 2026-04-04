"use client";


import { useState, useEffect } from "react";
import { SPACE_TABS } from "@/app/utilits/constants";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


// 👉 all image imports (same as yours)
// import image1 from "../../assets/cot head-1.jpg";
// import image2 from "../../assets/cot head-2.jpg";
// import image3 from "../../assets/cot head-3.jpg";
// import image4 from "../../assets/cot head-4.jpg";
// import image5 from "../../assets/cot head-5.jpg";
// import image6 from "../../assets/cot head-6.jpg";
// import image7 from "../../assets/cot head-7.jpg";
// import image8 from "../../assets/cot head-8.jpg";
// import image9 from "../../assets/Dressing-2.jpg";


// import image25 from "../../assets/living1.jpg";
// import image26 from "../../assets/living2.jpg";
// import image27 from "../../assets/living3.jpg";
// import image28 from "../../assets/living4.jpg";
// import image29 from "../../assets/living5.jpg";
// import image30 from "../../assets/living6.jpg";
// import image31 from "../../assets/living7.jpeg";
// import image32 from "../../assets/living8.jpg";
// import image35 from "../../assets/living11.jpg";


// import image41 from "../../assets/Dining-01.jpg";
// import image42 from "../../assets/Dining-02.jpg";
// import image43 from "../../assets/Dining-03.jpg";
// import image44 from "../../assets/Dining-04.jpg";
// import image45 from "../../assets/Dining-05.jpg";
// import image46 from "../../assets/Dining-06.jpg";
// import image47 from "../../assets/Dining-07.jpg";
// import image48 from "../../assets/Dining-08.jpg";
// import image49 from "../../assets/Dining-09.jpg";




export default function SpacesGrid() {
  const [active, setActive] = useState("Bedroom");
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const TAB_IMAGES = {
    Bedroom: ["https://res.cloudinary.com/da9s9vymf/image/upload/v1775207586/cot_head-1_oe0ick.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207586/cot_head-2_ibtjov.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207586/cot_head-3_xxlgqd.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207587/cot_head-4_hqe703.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207587/cot_head-5_lsijeh.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207587/cot_head-6_uiaqfo.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207587/cot_head-7_luevrf.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207587/cot_head-8_sqbxuw.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207589/Dressing-2_buxt3p.jpg"],
    Living: ["https://res.cloudinary.com/da9s9vymf/image/upload/v1775207592/living1_damagk.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207592/living2_dmilua.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207592/living3_hn6cuv.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207593/living4_fouzbn.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207593/living5_abglgx.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207593/living6_iwcko0.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207593/living7_ijjbnp.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207593/living8_g5x2tu.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207593/living11_p0sgtw.jpg"],
    Kitchen: ["https://res.cloudinary.com/da9s9vymf/image/upload/v1775207590/kitchen1_gsgsr0.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207590/kitchen2_k4uj8a.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207590/kitchen2_k4uj8a.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207591/kitchen4_fqtcmx.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207591/kitchen5_kfmtm4.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207591/kitchen5_kfmtm4.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207591/kitchen7_qi5fdz.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207591/kitchen8_hgtujj.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207592/kitchen9_hg3zui.jpg"],
    Dinning: ["https://res.cloudinary.com/da9s9vymf/image/upload/v1775207588/Dining-01_sar6pd.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207588/Dining-02_f3glwr.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207588/Dining-03_sm8dvv.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207588/Dining-04_w49od7.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207588/Dining-05_fgv8vd.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207588/Dining-06_w2yngj.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207588/Dining-07_y6wkpv.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207589/Dining-08_omiqcc.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207589/Dining-09_ybvzu7.jpg"],
    "Pooja room": ["https://res.cloudinary.com/da9s9vymf/image/upload/v1775207597/Pooja-01_dytyhh.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207597/Pooja-01_dytyhh.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207602/Pooja-03_jxohe0.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207603/Pooja-04_ptqyhf.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207599/Pooja-05_thaxja.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207600/Pooja-06_r93h2k.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207601/Pooja-07_vuox0m.jpg", "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207602/Pooja-08_xhjhz2.jpg","https://res.cloudinary.com/da9s9vymf/image/upload/v1775207602/Pooja-09_cdya3a.jpg"],
    "Home improvement": [
      { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207580/blindhome_satrpo.jpg", label: "Blinds" },
      { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207563/Wallpaintinghome_eervoq.jpg", label: "Wall Painting" },
      { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207592/Lightninghome_kzg5no.jpg", label: "Lighting" },
      { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207592/Lightninghome1_w4d5hm.jpg", label: "Lighting" },
      { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207596/Mosquitonet_rczaop.jpg", label: "Mosquito Net" },
      { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207564/walldecor_mntqro.jpg", label: "Wall Decor" },
      { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207591/falseceiling_afpsnm.jpg", label: "False Ceiling" },
    ],
  };


  const images = TAB_IMAGES[active] || [];


  // ✅ auto carousel (mobile only)
  useEffect(() => {
    if (!isMobile || isPaused) return;


    const interval = setInterval(() => {
      setIndex((prev) =>
        prev < images.length - 1 ? prev + 1 : 0
      );
    }, 3000);


    return () => clearInterval(interval);
  }, [isMobile, isPaused, images.length]);


  // ✅ arrow functions
  const handleNext = () => {
    setIsPaused(true);
    setIndex((prev) =>
      prev < images.length - 1 ? prev + 1 : 0
    );
  };


  const handlePrev = () => {
    setIsPaused(true);
    setIndex((prev) =>
      prev > 0 ? prev - 1 : images.length - 1
    );
  };


  return (
    <section id="portfolio" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">


        {/* Heading */}
        <div className="text-center mb-15">
          <h2 className="sec-head text-black font-extrabold !text-[28px] md:text-[34px]">
            Explore Arcmen's <span className="md:block">Signature Spaces</span>
          </h2>
        </div>


        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {SPACE_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActive(tab);
                setIndex(0);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-full ${
                active === tab
                  ? "bg-black text-white"
                  : "border border-gray-300 hover:bg-black hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>


        {/* MOBILE CAROUSEL */}
        {isMobile ? (
          <div
            className="overflow-hidden"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${index * 100}%` }}
              transition={{ duration: 0.5 }}
            >
              {images.map((item, i) => {
                const isObject = typeof item === "object";


                return (
                  <div key={i} className="min-w-full px-2">
                    <div className="relative">
                      <img
                        src={isObject ? item.img : item}
                        className="h-60 w-full object-cover rounded-xl"
                      />


                      {isObject && (
                        <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                          {item.label}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>


         
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border-0 flex items-center justify-center rounded-full bg-[#F2F2F2] hover:bg-black hover:text-white transition"
              >
                <FaArrowLeftLong />
              </button>


              <button
                onClick={handleNext}
                className="w-10 h-10 flex border-0 items-center justify-center rounded-full bg-[#F2F2F2] hover:bg-black hover:text-white transition"
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        ) : (
          /* DESKTOP GRID (UNCHANGED) */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((item, i) => {
              const isObject = typeof item === "object";


              return (
                <div key={i} className="relative">
                  <img
                    src={isObject ? item.img : item}
                    className="h-52 md:h-64 w-full object-cover rounded-xl"
                  />


                  {isObject && (
                    <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                      {item.label}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}


        {/* Button */}
        <div className="text-center mt-10 mb-10 md:mb-20">
          <a
            href="#contact"
            className="border border-black px-10 py-2 text-black rounded text-sm hover:bg-[#4dbc15] hover:text-white transition"
          >
            Let’s Build Yours
          </a>
        </div>


      </div>
    </section>
  );
}
