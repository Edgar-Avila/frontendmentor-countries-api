import Header from "./Header";
import Footer from "./Footer";
import { useThemeStore } from "@/store/theme";

function Layout({children}) {
  const isDark = useThemeStore(state => state.isDark)
  return ( 
    <div className={`min-h-screen flex flex-col bg-light-bg ${isDark? 'dark' : 'light'}`}>
      <Header/>
      <div className="dark:bg-dark-bg dark:text-dark-text py-12 grow"> {children} </div>
      <Footer className="mt-auto"/>
    </div>
  );
}

export default Layout;