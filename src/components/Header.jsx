import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Header({className}) {
  return (
    <nav className={`flex shadow-lg shadow-gray-50 justify-between py-8 sm:py-4 px-6 sm:px-12 items-center bg-light-els ${className}`}>
      <Link href="/">
        <h2 className="font-bold text-md sm:text-xl">Where in the world?</h2>
      </Link>
      <div>
        <FontAwesomeIcon icon={faMoon} className="mr-2" />
        <span className="text-sm sm:text-base">Dark Mode</span>
      </div>
    </nav>
  );
}

export default Header;
