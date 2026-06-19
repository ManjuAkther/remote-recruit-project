const Hero = () => {
  return (
    <section className="bg-[url(public/img/Background.svg)]
     bg-cover bg-centers text-white pt-10 pb-32 relative overflow-hidden">
      
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 md:px-16">
        <h1 className="text-xl font-bold">RemoteRecruit</h1>

        <div className="space-x-4">
          <button>Sign In</button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      {/* Hero Content */}
      
      <div className="text-center mt-16 px-4" data-aos="fade-up">
        <div>

        
        <h1 className="text-4xl md:text-5xl font-bold">
          RemoteRecruit’s Difference
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
        RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers,
         there’s nothing but you, your talents, and the next step in your career.
        </p>
      </div>
</div>
      {/* Bottom Curve
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[100%]" /> */}
    </section>
  );
};
export default Hero;