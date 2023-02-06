import Header from "./Header";
import Footer from "./Footer";

function Layout({children}) {
  return ( 
    <div className="min-h-screen flex flex-col bg-light-bg">
      <Header  className="mb-12"/>
      {children}
      <Footer className="mt-auto"/>
    </div>
  );
}

export default Layout;