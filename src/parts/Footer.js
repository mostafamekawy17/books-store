import EmailIcon from "../components/UI/Icons/EmailIcon";
import GithubIcon from "../components/UI/Icons/GithubIcon";
import LinkedInIcon from "../components/UI/Icons/LinkedInIcon";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer__layout">
      <div className="footer__overlay" />
      <div className="footer__content">
        <div className="footer__social">
          <button className="btn btn-outline-light">
            <GithubIcon />
          </button>
          <button className="btn btn-outline-light">
            <LinkedInIcon />
          </button>
          <button className="btn btn-outline-light">
            <EmailIcon />
          </button>
        </div>
        <div className="footer__info">
          <p> &copy; 2021 Mostafa Mekawy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
