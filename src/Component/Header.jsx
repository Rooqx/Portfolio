import { Link } from "react-scroll";
import home from "../assets/house.svg";
import user from "../assets/square-user.svg";
import projectImg from "../assets/programming.png";
import contact from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center w-full py-2 ">
      <nav className="border-2 border-[#434343] rounded-[40px] py-2 px-6 shadow-[0_0_10px_rgb(67,67,67)] text-white bg-[#00000024] backdrop-blur-xl">
        <ul className="flex justify-between gap-5">
          <li className="flex flex-col items-center justify-center text-[0.65rem] md:text-[1em] transition-all duration-500 hover:scale-125">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <img src={home} className="w-[1rem] md:w-[1.5rem]" alt="Home" />
              Home
            </Link>
          </li>
          <li className="flex flex-col items-center justify-center text-[0.65rem] md:text-[1em] transition-all duration-500 hover:scale-125">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <img src={user} className="w-[1rem] md:w-[1.5rem]" alt="About" />
              About
            </Link>
          </li>
          <li className="flex flex-col items-center justify-center text-[0.65rem] md:text-[1em] transition-all duration-500 hover:scale-125">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <img
                src={projectImg}
                className="w-[1rem] md:w-[1.5rem]"
                alt="Projects"
              />
              Project
            </Link>
          </li>
          <li className="flex flex-col items-center justify-center text-[0.65rem] md:text-[1em] transition-all duration-500 hover:scale-125">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <img
                src={contact}
                className="w-[1rem] md:w-[1.5rem]"
                alt="Contact"
              />
              Contact
            </Link>
          </li>
          <li className="flex flex-col items-center justify-center text-[0.65rem] md:text-[1em] transition-all duration-500 hover:scale-125">
            <a
              href="https://www.linkedin.com/in/farooq-ashiru-b1a6ba144/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center"
            >
              <img
                src={linkedin}
                className="w-[1rem] md:w-[1.5rem]"
                alt="LinkedIn"
              />
              Linkedin
            </a>
          </li>
          <li className="flex flex-col items-center justify-center text-[0.65rem] md:text-[1em] transition-all duration-500 hover:scale-125">
            <a
              href="https://github.com/Rooqx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center"
            >
              <img
                src={github}
                className="w-[1rem] md:w-[1.5rem]"
                alt="GitHub"
              />
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
