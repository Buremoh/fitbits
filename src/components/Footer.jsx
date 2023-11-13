import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"






const Footer = () => {
  return (
    <footer>
      <div className="comtainer footer__container">
        <article>
            <Link to="/" className="logo">
                <img src={Logo} alt="Footer Logo" />
            </Link>
            <p>
            Elevate Your Life with Every Rep. Join Our Fitness Community 
            Today for a Healthier, Stronger Tomorrow. Your Journey Begins 
            Here.
            </p>
            <div className="footer__socials">
                <a href="http://linkedin.com" target="blank" rel="noreferrer noopener"><FaLinkedin/></a>
                <a href="http://facebook.com" target="blank" rel="noreferrer noopener"><FaFacebookF/></a>
                <a href="http://twitter.com" target="blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                <a href="http://instagram.com" target="blank" rel="noreferrer noopener"><AiFillInstagram/></a>
            </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQs</Link>
        </article>
        <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2023 FITBITS  All Rights Reserved</small>
      </div>
      </footer>
  )
}

export default Footer
