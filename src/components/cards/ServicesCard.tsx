import { service } from "../../constant";

function ServicesCard() {
  return (
    <>
      {service.map((data) => (
        <div
          key={data.id}
          className="flex flex-col items-center place-content-center text-center border border-gray-300 rounded-md p-4 gap-5 laptop:flex-row"
        >
          <img className="h-24 w-24" src={data.image} alt={data.title} />
          <div className="flex flex-col">
            <p className="font-semibold mb-4 text-lg">{data.title}</p>
            <p>{data.description.substring(0, 100)}...</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ServicesCard;
