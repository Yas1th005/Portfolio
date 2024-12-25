const LandingSection = ({ onStartBooking }) => {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          1-to-1 Mentorship
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Personalized guidance on web development, projects, and career growth.
        </p>
        <button
          onClick={onStartBooking}
          className="px-6 py-3 bg-secondary text-black rounded-lg shadow-lg hover:bg-primary hover:text-white transition"
        >
          Book a Session
        </button>
      </section>
    );
  };
  
  export default LandingSection;
  