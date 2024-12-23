import logo from "../assets/logo.png";
import bg from "../assets/footer-bg.png";

const Footer = () => {
  return (
    <div
      className="w-full font-oswald"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundBlendMode: "color-burn",
      }}
    >
      <footer className="footer lg:w-10/12 mx-auto p-10">
        <aside>
          <img className="w-20" src={logo} alt="Study Shelf Logo" />
          <h2 className="text-2xl font-pacifico font-bold text-purple-900">
            Study Shelf
          </h2>
          <p className="font-merriweather text-sm">
            Unlock Your Learning Potential
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Book Search & Catalog</a>
          <a className="link link-hover">Digital Library Access</a>
          <a className="link link-hover">Library Instruction</a>
          <a className="link link-hover">Book Donations & Volunteering</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
