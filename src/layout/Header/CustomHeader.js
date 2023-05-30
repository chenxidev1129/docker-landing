import Link from "next/link";
import React from "react";
import MobileMenu from "../MobileMenu";
import Image from "next/image";
import LanguageSwitch from "../../components/custom/home/LanguageSwitch";

const CustomHeader = ({ toggleMenu, toggle }) => {
    return (
        <header id="header" className="header">
            {/* MOBILE HEADER */}
            <div className="wsmobileheader clearfix custom-wsmobileheader-no">
                <span className="smllogo">
                    <Image
                        src="/images/custom/icon-big-black.png"
                        width={166}
                        height={40}
                        alt="mobile-logo"
                    />
                </span>
                <LanguageSwitch />
            </div>
            {/* HEADER STRIP */}
            <div className="headtoppart bg-blue clearfix">
                <div className="headerwp clearfix">
                    {/* Address */}
                    <div className="headertopleft">
                        <div className="address clearfix">
                            <span>
                                <i className="fas fa-map-marker-alt" />
                                Kolonnenstraße 60, 10827 Berlin
                            </span>
                            <Link href="#">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    href="tel:123456789"
                                    className="callusbtn"
                                >
                                    <i className="fas fa-phone" />
                                    +49 30 60977359
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* Social Links */}
                    <div className="headertopright">
                        <a className="googleicon" title="Google" href="#">
                            <i className="fab fa-google" />
                            <span className="mobiletext02">Google</span>
                        </a>
                        <a className="linkedinicon" title="Linkedin" href="#">
                            <i className="fab fa-linkedin-in" />
                            <span className="mobiletext02">Linkedin</span>
                        </a>
                        <a className="twittericon" title="Twitter" href="#">
                            <i className="fab fa-twitter" />
                            <span className="mobiletext02">Twitter</span>
                        </a>
                        <a className="facebookicon" title="Facebook" href="#">
                            <i className="fab fa-facebook-f" />
                            <span className="mobiletext02">Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* END HEADER STRIP */}
            {/* NAVIGATION MENU */}
            <div className="wsmainfull menu clearfix d-none d-lg-block custom-wsmainfull-no">
                <div className="wsmainwp clearfix">
                    {/* LOGO IMAGE */}
                    {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
                    <div className="desktoplogo">
                        <Link href="/">
                            <Image
                                src="/images/custom/icon-big-black.png"
                                width={166}
                                height={40}
                                alt="header-logo"
                            />
                        </Link>
                    </div>
                    <LanguageSwitch />
                </div>
            </div>
            <MobileMenu />

            {/* END NAVIGATION MENU */}
        </header>
    );
};

export default CustomHeader;
