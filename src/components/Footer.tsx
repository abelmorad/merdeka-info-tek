import logo from "../../public/logo/merdaka.png";
import linkedin from "../../public/logo/linkedin.svg";
import github from "../../public/logo/github.svg";
import fb from "../../public/logo/facebook.svg";

function Footer() {
  return (
    <footer className="flex flex-col place-content-center items-center pt-20 px-10">
      <img className="h-12 w-12 mb-9" src={logo} alt="merdeka infotek" />
      <div>
        <p className="text-center mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          alias aperiam. Nemo esse praesentium.
        </p>
        <div className="flex place-content-center gap-4 mb-5">
          <img className="h-7 w-7" src={fb} alt="fb" />
          <img className="h-7 w-7" src={linkedin} alt="linked" />
          <img className="h-7 w-7" src={github} alt="github" />
        </div>
        <p className="text-xs text-center mb-3">
          Copyright &copy; {new Date().getFullYear()} Merdeka Info Teknologi.
          All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
