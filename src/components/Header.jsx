import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Header({className}) {
  return (
    <nav className={`flex justify-between py-4 px-12 items-center bg-light-els ${className}`}>
      <h2 className="font-bold text-xl">Where in the world?</h2>
      <div>
        <FontAwesomeIcon icon={faMoon} className="mr-2" />
        <span>Dark Mode</span>
      </div>
    </nav>
  );
}

export default Header;
