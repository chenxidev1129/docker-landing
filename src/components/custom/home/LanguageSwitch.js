import { useContext, useState } from 'react';
import LanguageContext from '../../../contexts/LanguageContext';
import { isMobile } from 'react-device-detect';

function LanguageSwitch() {
    const { currentLanguage, handleLanguageSwitch } = useContext(LanguageContext);

    return (
        <div className="locale-section">
            <a href='#' className={currentLanguage == 'de' ? 'active' : ''} onClick={() => handleLanguageSwitch('de')}>
                {isMobile ? 'GE' : 'German'}
            </a>
            |
            <a href='#' className={currentLanguage == 'en' ? 'active' : ''} onClick={() => handleLanguageSwitch('en')}>
                {isMobile ? 'EN' : 'English'}
            </a>
        </div>
    );
}

export default LanguageSwitch;
