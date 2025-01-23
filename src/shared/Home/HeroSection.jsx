const HeroSection = ({ backgroundImage, text, textSize = "md:text-lg text-sm", padding = "md:py-20 py-5" }) => {
    return (
      <section 
        className={`bg-[url('${backgroundImage}')] bg-cover bg-center   overflow-visible ${padding}`}
      >
        <p className={`max-w-3xl px-4 mx-auto     ${textSize} text-white  text-justify`}>
          {text}
        </p>
      </section>
    );
  };
  
  export default HeroSection;
  