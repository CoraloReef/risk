import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguagesSwitcher = () => {
  const { i18n } = useTranslation();

  const [links, setLinks] = useState([
    { name: 'RUS', lang: 'ru', classes: '' },
    { name: 'ENG', lang: 'en', classes: '' },
  ]);

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);

    const newLinks = links.map((link) => {
      if (link.lang === lang) {
        return { ...link, classes: 'active' };
      }
      return { ...link, classes: '' };
    });

    setLinks(newLinks);
  };

  useEffect(() => {
    if (i18n.language !== 'ru' && i18n.language !== 'en') {
      switchLanguage('en');
    } else {
      switchLanguage(i18n.language);
    }
  }, []);

  return (
    <div className="lang-menu">
      {links.map(({ name, lang, classes }) => (
        <button
          type="button"
          key={lang}
          className={classes}
          onClick={() => switchLanguage(lang)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default LanguagesSwitcher;
