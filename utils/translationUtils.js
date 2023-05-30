// translationUtils.js
import enTranslations from '../locales/en.json';
import deTranslations from '../locales/de.json';

export function getTranslations(locale) {
    switch (locale) {
        case 'en':
            return enTranslations;
        case 'de':
            return deTranslations;
        default:
            return deTranslations;
    }
}
