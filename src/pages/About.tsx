import TeamCard from "../components/cards/TeamCard";

function About() {
  return (
    <section id="about-us" className="flex flex-col pt-28 mobile:text-center mobile:px-4 tablet:px-16 desktop:px-44">
      <section className="flex flex-col gap-10">
        <div className="flex-col">
          <h2 className="capitalize mb-5 font-semibold text-4xl">about us</h2>
          <p className="desktop:px-48">
            Merdeka Information Teknologi is a web development company based in
            the Philippines. We are a team of Muslim engineers specializing in
            building web applications.
          </p>
        </div>
      </section>
      <div className="flex-col my-20">
        <h2 className="capitalize mb-10 font-semibold text-4xl">
          meet our team
        </h2>
        <div className="flex flex-col items-center gap-5 tablet:grid tablet:grid-flow-col tablet:grid-rows-3 tablet:place-content-center laptop:grid-rows-2 desk">
          <TeamCard />
        </div>
      </div>
    </section>
  );
}

export default About;
