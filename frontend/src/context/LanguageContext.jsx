import { createContext, useContext, useState } from 'react';
import { en } from '../translations/en.js';
import { fr } from '../translations/fr.js';
import { ar } from '../translations/ar.js';

const translations = {
  en,
  fr,
  ar,
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    // Default to 'fr' if 'ar' was previously stored, otherwise use stored or 'fr'
    return storedLanguage === 'ar' ? 'fr' : storedLanguage || 'fr';
  });

  const [dir, setDir] = useState(() => {
    const savedLanguage = localStorage.getItem('language') || 'fr';
    return savedLanguage === 'ar' ? 'rtl' : 'ltr';
  });

  const switchLanguage = (lang) => {
    setLanguage(lang);
    setDir(lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang); // Store the selected language
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value[k] === undefined) return key;
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}