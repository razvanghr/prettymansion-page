import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import "./footer-style.css";

function Footer() {
  const facebookRedirect = () => {
    window.location.href =
      "https://www.facebook.com/profile.php?id=100021088496710";
  };

  const instagramRedirect = () => {
    window.location.href = "https://www.instagram.com/pretty_mansion/";
  };

  const githubRedirect = () => {
    window.location.href = "https://github.com/razvanghr";
  };
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </div>
      <div className="contact">
        <p>For more information, you can contact us here:</p>
        <div className="contact-icons">
          <AiOutlineFacebook onClick={facebookRedirect} />
          <AiOutlineInstagram onClick={instagramRedirect} />
        </div>
      </div>
      <p className="copyright">
        Copyright &copy; 2023. Razvan Ghilea{" "}
        {<AiOutlineGithub onClick={githubRedirect} />}
      </p>
    </div>
  );
}

export default Footer;
