import { useContext, useState } from 'react';
import LanguageContext from '../../../contexts/LanguageContext';

function LanguageSwitch() {
    const { currentLanguage, handleLanguageSwitch } = useContext(LanguageContext);

    return (
        <div className="locale-section language-desktop-section">
            <a href='#' className={currentLanguage == 'de' ? 'active' : ''} onClick={() => handleLanguageSwitch('de')}>
                German
            </a>
            |
            <a href='#' className={currentLanguage == 'en' ? 'active' : ''} onClick={() => handleLanguageSwitch('en')}>
                English
            </a>
        </div>
    );
}

export default LanguageSwitch;
