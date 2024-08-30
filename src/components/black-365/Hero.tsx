interface HeroProps {
  logo: string;
  page: string;
}

const Hero: React.FC<HeroProps> = ({ logo, page }) => {
  return (
    <section className="flex justify-center items-center min-h-screen max-w-screen-2xl font-albert-sans">
      <div className="flex flex-col md:flex-row items-center lg:ml-8 xl:ml-16 text-7xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold font-albertSans">
        <h1 className="mb-36 lg:mb-44 hidden md:block">UNIT</h1>
        <video autoPlay loop muted playsInline className="w-96 lg:w-128 h-auto">
          <source src={logo} type="video/mp4" />
        </video>
        <h1 className="mt-36 lg:mt-44 hidden md:block">{page.toUpperCase()}</h1>
        <h1 className="md:hidden mt-8 text-center leading-tight">
          UNIT
          <br />
          {page.toUpperCase()}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
