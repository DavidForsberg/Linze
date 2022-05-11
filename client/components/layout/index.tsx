import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center pt-60 bg-gradient-to-r from-alternative to-bg pb-32">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
