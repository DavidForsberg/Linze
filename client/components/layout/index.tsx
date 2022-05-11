import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../header";
import Footer from "../footer";
// import Footer from "../footer";
// import Header from "../header";
// import ResponsiveMenu from "../header/navmenu/responsivemenu";
// import SocialMediaView from "../SocialMediaView";

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   width: 100%;
//   @media only screen and (max-width: 1100px) {
//     height: auto;
//   }
// `;

// const MainPage = styled.div`
//   display: flex;
//   width: 100%;
//   height: 90%;
//   overflow-y: auto;
//   overflow-x: hidden;
//   @media only screen and (max-width: 1100px) {
//     flex-direction: column;
//   }
// `;

// const LeftView = styled.div`
//   width: 50%;
//   height: 100%;
//   @media only screen and (max-width: 1100px) {
//     width: 100%;
//     height: 50vh;
//     padding-top: 10vh;
//   }
//   @media only screen and (max-width: 800px) {
//     height: 70vh;
//   }
// `;

// const RightView = styled.div`
//   width: 50%;
//   height: 100%;
//   overflow-y: auto;
//   @media only screen and (max-width: 1100px) {
//     width: 100%;
//     height: auto;
//   }
// `;

const Layout = ({ children }: any) => {
  //   const [isMenuToggled, toggleMenu] = useState(false);
  //   const router = useRouter();
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center pt-60 bg-gradient-to-r from-alternative to-bg pb-32">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
