
function Landing() {
  return (

    <section id="landing" className="flex flex-col text-white items-start place-content-center hero-bg h-screen w-screen mobile:px-4 mobile:py-20 mobile:text-center mobile:items-center tablet:items-start tablet:text-start tablet:px-32 laptop:px-72">
        <h1 className="capitalize text-4xl laptop:text-5xl font-bold mb-1">
          let's build your web application!

        </h1>
        <p className="mb-5">
          We design, build, and deploy for enterprises
        </p>
      <a href="#contact-us" className="bg-white text-black text-lg font-medium rounded-md px-7 py-1 laptop:px-10 laptop:py-2 hover:text-white hover:bg-orange-400">Let's Work</a>
    </section>
  );
}

export default Landing;
