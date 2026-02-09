import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';


const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const langDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const { t, language, switchLanguage, dir } = useLanguage();

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    function handleClickOutside(event) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu and reset scroll when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Reset scroll position to top on route change (except for home page with hash fragments)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // We're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNavClick = (path, sectionId = null) => {
    setIsMobileMenuOpen(false);

    if (sectionId) {
      scrollToSection(sectionId);
    } else {
      navigate(path);
      // Reset scroll position to top when navigating to different pages
      window.scrollTo(0, 0);
    }
  };



  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick('/')}
                className="text-2xl font-bold cursor-pointer"
              >
                <span className="text-blue-600">Auto</span>
                <span className="text-gray-900">Flow</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-8`}>
              <button
                onClick={() => handleNavClick('/', 'home')}
                className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => handleNavClick('/', 'what-we-offer')}
                className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => handleNavClick('/catalog')}
                className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                {t('nav.saasCatalog')}
              </button>
              <button
                onClick={() => handleNavClick('/docs')}
                className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                {t('nav.documentation')}
              </button>
              <button
                onClick={() => handleNavClick('/', 'contact')}
                className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                {t('nav.contact')}
              </button>
            </nav>

            <div className={`flex items-center ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-4`}>
              {/* Language Selector */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className={`flex items-center ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-2 text-sm text-gray-600 cursor-pointer hover:text-blue-600 transition-colors language-selector px-3 py-2 rounded-md ${isLangDropdownOpen ? 'bg-gray-100' : ''}`}
                >
                  <i className="fas fa-globe"></i>
                  <span>{language === 'en' ? '🇺🇸' : language === 'fr' ? '🇫🇷' : '🇸🇦'}</span>
                  <span>{language === 'en' ? 'English' : language === 'fr' ? 'Français' : 'العربية'}</span>
                  <i className={`fas fa-chevron-${isLangDropdownOpen ? 'up' : 'down'}`}></i>
                </button>
                {isLangDropdownOpen && (
                  <div className={`absolute ${dir === 'rtl' ? 'left-0' : 'right-0'} mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200`}>
                    <button
                      onClick={() => {
                        switchLanguage('en');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${dir === 'rtl' ? 'text-right' : 'text-left'} ${language === 'en' ? 'bg-blue-50' : ''}`}
                    >
                      <span className={dir === 'rtl' ? 'ml-2' : 'mr-2'}>🇺🇸</span> English
                    </button>
                    <button
                      onClick={() => {
                        switchLanguage('fr');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${dir === 'rtl' ? 'text-right' : 'text-left'} ${language === 'fr' ? 'bg-blue-50' : ''}`}
                    >
                      <span className={dir === 'rtl' ? 'ml-2' : 'mr-2'}>🇫🇷</span> Français
                    </button>
                    <button
                      onClick={() => {
                        switchLanguage('ar');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${dir === 'rtl' ? 'text-right' : 'text-left'} ${language === 'ar' ? 'bg-blue-50' : ''}`}
                    >
                      <span className={dir === 'rtl' ? 'ml-2' : 'mr-2'}>🇸🇦</span> العربية
                    </button>
                  </div>
                )}
              </div>



              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40"
            >
              <div className="px-4 py-2 space-y-1">
                <button
                  onClick={() => handleNavClick('/', 'home')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {t('nav.home')}
                </button>
                <button
                  onClick={() => handleNavClick('/', 'what-we-offer')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {t('nav.services')}
                </button>
                <button
                  onClick={() => handleNavClick('/catalog')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {t('nav.saasCatalog')}
                </button>
                <button
                  onClick={() => handleNavClick('/docs')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {t('nav.documentation')}
                </button>
                <button
                  onClick={() => handleNavClick('/', 'contact')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {t('nav.contact')}
                </button>



              </div>
            </div>
          )}
        </div>
      </header>



      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12" dir={dir}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('footer.company')}</h3>
              <p className="text-gray-400">{t('footer.description')}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavClick('/', 'home')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('nav.home')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('/', 'what-we-offer')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('nav.services')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('/catalog')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('nav.saasCatalog')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('/', 'how-it-works')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('howItWorks.title')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('/', 'contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('nav.contact')}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-envelope text-blue-400"></i>
                  <span className="text-gray-400">{t('footer.email')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-blue-400"></i>
                  <span className="text-gray-400">{t('footer.location')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-clock text-blue-400"></i>
                  <span className="text-gray-400">{t('footer.hours')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-reply text-blue-400"></i>
                  <span className="text-gray-400">{t('footer.response')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t('footer.connect')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
