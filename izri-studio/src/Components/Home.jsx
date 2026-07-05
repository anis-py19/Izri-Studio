import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Home() {
  const navigate = useNavigate();
  return (
    <section className="pt-24 home pb-16 px-7 md:px-16 w-full h-screen flex flex-col items-center justify-center relative">
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-primary-dark/60"></div>

      <div className="text max-w-3xl text-center flex flex-col  items-center relative z-10">
        <h3 className="text-accent shadow-lg  bg-primary-dark/50 p-2 rounded-sm  text-xs md:text-sm font-semibold uppercase tracking-[0.3em]">
          Where Vision Meets Craft
        </h3>
        <h1 className="text-white tracking-wider text-4xl md:text-6xl lg:text-7xl font-bold  drop-shadow-lg">
          We Design Experiences That Elevate <br />
           Your <ReactTyped strings={["Brand", "Business", "Idea"]} typeSpeed={100} backSpeed={100} loop  />
        </h1>
        <p className="text-primary-light hover:text-primary-light/50 tracking-wider   transition duration-300 text-base md:text-lg max-w-xl ">
           <span className="font-bold  transition duration-300">Izri Studio</span> is a creative agency specializing in brand identity,
          digital design, and visual storytelling. We transform bold ideas into
          refined, unforgettable experiences.
        </p>
      </div>
      <div className="button flex flex-col sm:flex-row gap-4 mt-10 relative z-10 w-full sm:w-auto px-4 sm:px-0">
        <button onClick={() => navigate("/services")} className="px-7 py-3 w-full sm:w-auto bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 cursor-pointer">
          Explore Our Work
        </button>
        <button onClick={() => navigate("/contact")} className="px-7 py-3 w-full sm:w-auto border border-white/25 text-white hover:bg-white/10 text-sm font-semibold rounded-sm transition-all duration-300 cursor-pointer">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default Home;
