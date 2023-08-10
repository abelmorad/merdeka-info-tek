import { Link } from "react-scroll";
import { useState } from "react";

export const NavbarMenu = [
  {
    id:0,
    title: 'Home',
    to: 'landing',
    classname:"hover:text-orange-400 cursor-pointer ",
  },
    {
    id:1,
    title: 'About',
    to: 'about-us',
    classname:"hover:text-orange-400 cursor-pointer",
  },
    {
    id:2,
    title: 'Services',
    to: 'services',
    classname:"hover:text-orange-400 cursor-pointer",
  },
    {
    id:3,
    title: 'Portfolio',
    to: 'portfolio',
    classname:"hover:text-orange-400 cursor-pointer",
  },
    {
    id:4,
    title: 'Contacts',
    to: 'contact-us',
    classname:"hover:text-orange-400 cursor-pointer",
  },
]



const NavBarDesktop = () => {
   const [activeSection, setActiveSection] = useState<number | null>(null);

   const HandleSection = (section: number) => {
    setActiveSection(section);
   };
return(
   <nav className="tablet:flex gap-4 font-medium mobile:hidden">
       
          {NavbarMenu.map((item) => {
            return(
                <Link
                key={item.id}
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
)
}

export default NavBarDesktop