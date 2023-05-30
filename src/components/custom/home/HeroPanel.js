import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getTranslations } from "../../../../utils/translationUtils";
import { useContext } from "react";
import LanguageContext from "../../../contexts/LanguageContext";

const HeroPanel = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const [hero, setHero] = useState({});

    useEffect(() => {
        const translations = getTranslations(currentLanguage);
        setHero(translations.hero);
    }, [currentLanguage]);

    return (
        <section id="custom-hero" className="bg-fixed hero-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* HERO TEXT */}
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <div className="hero-txt mb-40">
                            {/* Title */}
                            <h5 className="steelblue-color">
                                {hero.header}
                            </h5>
                            <h2 className="steelblue-color">
                                {hero.title}
                            </h2>
                            {/* Text */}
                            <p className="p-md">
                                {hero.description}
                            </p>
                            {/* Button */}
                            <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
                                <a className="btn btn-blue blue-hover">
                                    {hero.action}
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="col-md-4 col-lg-5 col-xl-6">
                        <div className="hero-1-img text-center">
                            <img className="img-fluid" src="images/hero-1-img.png" alt="hero-image" style={{ opacity: 0 }} />
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default HeroPanel;
