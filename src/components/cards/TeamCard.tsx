import { team } from "../../constant";

function TeamCard() {
  return (
    <>
      {team.map((data) => (
        <div
          className="flex flex-col place-content-center items-center border border-gray-300 rounded-md h-72 w-60 px-5 py-10 text-center"
          key={data.id}
        >
          <img src={data.image} alt={data.name} className="h-32 w-32 mb-4" />
          <p>{data.name}</p>
          <p>
            <strong>{data.position}</strong>
          </p>
        </div>
      ))}
    </>
  );
}

export default TeamCard;
