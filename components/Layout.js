import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  );
}

export default Layout;
