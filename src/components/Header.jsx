import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useThemeStore } from "@/store/theme";

function Header({className}) {
  const {toggleTheme, isDark} = useThemeStore()
  return (
    <nav className={`flex shadow-lg shadow-gray-50 justify-between py-8 sm:py-4 px-6 sm:px-12 items-center bg-light-els ${className}`}>
      <Link href="/">
        <h2 className="font-bold text-md sm:text-xl">Where in the world?</h2>
      </Link>
      <button onClick={toggleTheme}>
        {isDark ?
          <>
            <FontAwesomeIcon icon={faMoon} className="mr-2" />
            <span className="text-sm sm:text-base">Dark Mode</span>
          </>
          :
          <>
            <FontAwesomeIcon icon={faSun} className="mr-2" />
            <span className="text-sm sm:text-base">Light Mode</span>
          </>
        }
      </button>
    </nav>
  );
}

export default Header;
