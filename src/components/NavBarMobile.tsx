import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import logo from "../../public/logo/merdaka.png";

function NavBarMobile({ style, closeBtn }: { style: any; closeBtn: any }) {
  return (
    <nav
      style={style}
      className="flex flex-col bg-black text-white w-screen h-screen absolute top-0 left-0"
    >
      <div className="flex p-4 items-center justify-between mb-16">
        <div className="flex gap-4">
          <img className="h-14 w-14" src={logo} alt="merdaka logo" />
          <p className="text-lg font-medium">
            Merdaka Information
            <br /> Teknologi
          </p>
        </div>
        <CloseOutlinedIcon
          style={{ height: "30px", width: "30px" }}
          onClick={closeBtn}
        />
      </div>
      <div className="flex flex-col text-4xl font-semibold items-center gap-4">
        <a className="hover:text-yellow-500" onClick={closeBtn} href="#about-us">
          About
        </a>
        <a className="hover:text-yellow-500" onClick={closeBtn} href="#services">
          Services
        </a>
        <a className="hover:text-yellow-500" onClick={closeBtn} href="#portfolio">
          Portfolio
        </a>
        <a className="hover:text-yellow-500" onClick={closeBtn} href="#contact-us">
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default NavBarMobile;
