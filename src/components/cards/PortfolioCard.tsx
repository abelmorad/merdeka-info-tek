import "swiper/css";
import "swiper/bundle";
import "swiper/core";
import { portfolio } from "../../constant";

function PortfolioCard() {
  return (
    <>
      {portfolio.map((data) => (
        <a
          href="/"
          className="flex flex-col border border-gray-300 rounded-md max-h-max"
        >
          <img
            src={data.image}
            alt={data.title}
            className="object-cover rounded-t-md h-52"
          />
          <div className="flex flex-col text-black p-4">
            <span className="font-semibold mb-2">{data.title}</span>
            <span>{data.description.substring(0, 120)}...</span>
          </div>
        </a>
      ))}
    </>
  );
}

export default PortfolioCard;
