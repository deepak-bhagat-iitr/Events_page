import Link from 'next/link';
import Head from 'next/head';
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
    return (
        <footer className="footer">
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-left">
                        <div className="footer-img">
                            <img src="images/LOGO.svg" alt="Company Logo" className="footer-logo" />
                            <img src="images/EcellLogo.webp" alt="Ecell Logo" />
                        </div>
                        <p className="footer-text">The flagship event of the Entrepreneurship Cell, IIT Roorkee promoting entrepreneurship</p>
                    </div>
                    <div className="footer-right">
                        <div className="footer-contact">
                            <p className="footer-contact-heading">Our Address</p>
                            <p className="footer-contact-text">E-Cell Office, SAC Building<br />IIT Roorkee<br />Roorkee, Uttarakhand-247667</p>
                        </div>
                        <div>
                            <p className="footer-contact-heading">Email</p>
                            <p className="footer-contact-text">esummit@iitr.ac.in</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copyright">E-Summit 2024 IIT Roorkee. All rights reserved.</p>
                    <div className="footer-social">
                        <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <BsInstagram />
                        </Link>
                        <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <BsTwitter />
                        </Link>
                        <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <FaFacebookSquare />
                        </Link>
                        <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <BsLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
