import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  
  return (
    <section className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center px-6">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Massive 404 Graphic */}
        <h1 className="text-[150px] md:text-[250px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/10 drop-shadow-2xl select-none">
          404
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-text-main mt-4 mb-6 tracking-tight">
          Page Not Found
        </h2>
        
        <p className="text-lg md:text-xl text-text-muted mb-12 max-w-xl">
          The page you're looking for seems to have vanished into the digital void. Let's get you back to familiar territory.
        </p>
        
        <button 
          onClick={() => navigate("/")} 
          className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(197,157,95,0.3)] hover:shadow-[0_0_35px_rgba(197,157,95,0.5)] hover:-translate-y-1 flex items-center gap-3 group"
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
