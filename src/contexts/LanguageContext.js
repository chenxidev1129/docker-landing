import { createContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const handleLanguageSwitch = (language) => {
        setCurrentLanguage(language);
    };

    const value = {
        currentLanguage,
        handleLanguageSwitch,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContext;
