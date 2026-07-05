import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  
  return (
    <section className="min-h-screen bg-primary-dark relative overflow-hidden flex items-center justify-center px-6">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-end/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Massive 404 Graphic */}
        <h1 className="text-[150px] md:text-[250px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-primary-light/30 to-primary-light/5 drop-shadow-2xl select-none">
          404
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-primary-light mt-4 mb-6 tracking-tight">
          Page Not Found
        </h2>
        
        <p className="text-lg md:text-xl text-primary-light/60 mb-12 max-w-xl">
          The page you're looking for seems to have vanished into the digital void. Let's get you back to familiar territory.
        </p>
        
        <button 
          onClick={() => navigate("/")} 
          className="px-8 py-3 bg-accent hover:bg-accent-hover text-white font-semibold text-sm rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1 flex items-center gap-3 group cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </button>
      </div>
    </section>
  );
}

export default NotFound;

