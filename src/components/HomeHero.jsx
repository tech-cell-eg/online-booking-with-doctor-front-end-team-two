function HomeHero() {
  return (
   <section className="relative bg-primary text-white rounded-lg overflow-hidden px-4 py-8 md:py-8">
      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
        {/* Text Section */}
        <div className="z-20">
          <p className="text-sm font-medium mb-2 text-white/80">
            Trusted doctors on your schedule 😉
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Consult a doctor — <br className="hidden md:block" />
            book today!
          </h1>
          <div className="flex items-center gap-4 mt-6">
            <img
              src="/doctor.jpg"
              alt="doctor avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <p className="text-sm">
              <span className="text-xl font-bold">30,000+</span> <br />
              Happy Customers
            </p>
          </div>
        </div>

        {/* Spacer for Image (on left column) */}
        <div className="h-[200px] md:h-[250px] lg:h-[350px]"></div>
      </div>

      {/* Doctor Image Positioned */}
      <div className="absolute bottom-0 right-0 translate-y-[15%] -translate-x-[5%] z-30">
        <img
          src="/doctor-nobg-2.png"
          alt="Doctor standing"
          className="h-[400px] md:h-[480px] lg:h-[520px] w-auto object-contain"
        />
      </div>
    </section>
  );
}
export default HomeHero;
