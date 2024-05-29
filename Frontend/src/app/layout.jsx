import Navbar from "../../components/Navbar";
import "../../styles/globals.css";
import Head from "next/head";
import icon from "../../public/favicon.ico";
import Footer from "../../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import tracker from "../../components/tracker";
export const metadata = {
  title: "Abshar",
  description: "Version 1.0.1",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../../public/favicon.ico" />
        <Script src={tracker}></Script>
      </Head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
