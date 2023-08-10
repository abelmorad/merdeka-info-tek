import logo from "../../public/logo/merdaka.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {Link} from "react-scroll";
import NavBarMobile from "./NavBarMobile";
import { useState } from "react";
import {NavbarMenu} from "./NavBarDesktop";


function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
   const [activeSection, setActiveSection] = useState<number | null>(null);

   const HandleSection = (section: number) => {
    setActiveSection(section);
   };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <header className="flex items-center justify-between p-4 fixed bg-white w-screen z-50 laptop:px-20">
      <div className="flex gap-4 cursor-pointer" onClick={scrollToTop}>
        <img className="h-14 w-14 " src={logo} alt="merdaka logo" />
        <p className="text-lg font-medium">
          Merdaka Information
          <br /> Teknologi
        </p>
      </div>
      <nav className="tablet:flex gap-4 font-medium mobile:hidden">
       
          {NavbarMenu.map((item) => {
            return(
                <Link
          activeClass="text-orange-400"
          to={item.to}
          onClick={() => HandleSection(item.id)}
            className={`${
              activeSection === item.id
                ? 'text-orange-400'
                : 'text-black'
            } hover:text-orange-400 cursor-pointer`}
        >
          {item.title}
        </Link>
            )
          })}
        
      </nav>
      <NavBarMobile
        style={openMenu ? { display: "flex" } : { display: "none" }}
        closeBtn={() => setOpenMenu(!openMenu)}
      />
      <div className="tablet:hidden" onClick={() => setOpenMenu(!openMenu)}>
        <MenuOutlinedIcon style={{ height: "30px", width: "30px" }} />
      </div>
    </header>
  );
}

export default Header;
