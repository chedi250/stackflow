import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import toolsData from '../data/tools.json';
import { useNavigate } from 'react-router-dom';

const SaasCatalogPreview = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const tools = toolsData.tools.slice(0, 3); // first 3 tools

  useEffect(() => {
    startAutoChange();
    return () => {
      stopAutoChange();
    };
  }, []);

  const startAutoChange = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % tools.length);
    }, 3000);
  };

  const stopAutoChange = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    stopAutoChange();
  };

  const handleMouseLeave = () => {
    startAutoChange();
  };

  const handleViewAll = () => {
    navigate('/catalog');
  };

  return (
    <section id="saas-catalog-preview" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl font-bold text-gray-900">{t('catalog.previewTitle')}</h2>
          <p className="text-xl text-gray-600">{t('catalog.previewSubtitle')}</p>
        </div>
        <div 
          className="max-w-4xl mx-auto bg-white border rounded-lg shadow-lg p-6 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate(`/tools/${tools[currentIndex].slug}`)}
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <i className={`${tools[currentIndex].icon || 'fas fa-cube'} text-blue-600 text-4xl`}></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">{tools[currentIndex].name}</h3>
            <p className="text-gray-600 mb-4 text-center">{tools[currentIndex].description}</p>
            <div className="flex space-x-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{tools[currentIndex].type}</span>
              {tools[currentIndex].usage.slice(0, 2).map((usage) => (
                <span key={usage} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{usage}</span>
              ))}
              {tools[currentIndex].usage.length > 2 && (
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">+{tools[currentIndex].usage.length - 2}</span>
              )}
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button 
            onClick={handleViewAll} 
            className="text-blue-600 hover:text-blue-800 font-semibold underline"
          >
            {t('catalog.viewAllTools')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SaasCatalogPreview;