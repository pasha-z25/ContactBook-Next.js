import Header from "./Header"
import Footer from "./Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content flex-1 flex flex-col">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;