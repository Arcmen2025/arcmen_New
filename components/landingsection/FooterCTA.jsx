// import footerimg from "../../assets/footerbanner.png";

export default function FooterCTA() {
  return (
    <>
      <section className="relative h-[500px] md:h-[500px] overflow-hidden">

       
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/da9s9vymf/image/upload/v1775207590/footerbanner_fa2zsj.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Center Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Your perfect home is
            <span className="block">one click away.</span>
          </h2>

          {/* Button */}
          <a
            href="#contact"
            className="bg-white text-black px-10 py-2 rounded-md font-medium transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
          >
            Book Free Site Visit
          </a>

          {/* Subtext */}
          <p className="text-white/70 text-sm md:text-base mt-6 max-w-xl">
            Let's plan your space together.
          </p>

        </div>
      </section>

      
      <footer className="bg-black mx-auto py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <p className="text-white text-center md:text-[14px] text-xs ">
            © {new Date().getFullYear()} Arcmen kitchens and interiors. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}