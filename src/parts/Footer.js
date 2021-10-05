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
          <a
            href="https://github.com/mostafamekawy17"
            target="_blank"
            className="btn btn-outline-light"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/mostafa-mekawy-4a2a9b142?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZHj7GdNCTjSL63gQIcSQHA%3D%3D"
            target="_blank"
            className="btn btn-outline-light"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:mostafamekawy17@outlook.com"
            aria-label="Link to Email"
            className="btn btn-outline-light"
          >
            <EmailIcon />
          </a>
        </div>
        <div className="footer__info">
          <p> &copy; 2021 Mostafa Mekawy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
