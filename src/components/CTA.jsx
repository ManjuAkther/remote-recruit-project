const CTA = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-gray-100 to-blue-100 relative overflow-hidden">

      {/* Background circles (design effect) */}
      <div className="absolute w-40 h-40 bg-blue-200 rounded-full top-10 left-10 opacity-30"></div>
      <div className="absolute w-32 h-32 bg-blue-300 rounded-full bottom-10 right-10 opacity-30"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div data-aos="fade-right">
       <img
  src="/public/img/e7843951ef2e446c079c88628a046de593aca411 (1).png"
  alt="dashboard"
  loading="lazy"
  className="rounded-xl shadow-lg w-full max-w-md mx-auto"
/>
        </div>

        {/* RIGHT TEXT */}
        <div data-aos="fade-left">

          <p className="text-gray-500 mb-2">Are you ready?</p>

          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Help is only a few clicks away!
          </h2>

          <p className="text-gray-500 mt-4 max-w-md">
            Click below to get set up super quickly and find help now!
          </p>

          {/* Button */}
       <button className="mt-6 flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 hover:scale-105 transition duration-300 shadow-md">
  → Get Started
</button>

        </div>

      </div>
    </section>
  );
};

export default CTA;