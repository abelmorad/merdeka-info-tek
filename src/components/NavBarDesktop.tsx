// import { Link } from "react-router-dom";

function NavBarDesktop() {
  
  return (
    <nav className="tablet:flex gap-4 font-medium mobile:hidden">
        <a className="hover:text-orange-400" href="#" >Home</a>
        <a className="hover:text-orange-400" href="#about-us" >About</a>
        <a className="hover:text-orange-400" href="#services">Services</a>
        <a className="hover:text-orange-400" href="#contact-us">Contact Us</a>
    </nav>
  )
}

export default NavBarDesktop