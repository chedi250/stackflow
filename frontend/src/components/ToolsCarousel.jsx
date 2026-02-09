import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import toolsData from '../data/tools.json';

const ToolsCarousel = () => {
  const { t, dir } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const tools = toolsData.tools;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % tools.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, tools.length]);

  const getCategoryInfo = (categoryKey) => {
    return toolsData.categories[categoryKey] || { name: categoryKey, icon: 'fas fa-folder', color: 'gray' };
  };

  const getColorClasses = (color) => {
    const colorMap = {
      red: 'text-red-600 bg-red-100',
      blue: 'text-blue-600 bg-blue-100',
      green: 'text-green-600 bg-green-100',
      purple: 'text-purple-600 bg-purple-100',
      orange: 'text-orange-600 bg-orange-100',
      gray: 'text-gray-600 bg-gray-100'
    };
    return colorMap[color] || colorMap.gray;
  };

  const handleToolClick = (slug) => {
    window.location.href = `/tools/${slug}`;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">{t('toolsCarousel.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('toolsCarousel.subtitle')}
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
              {tools.slice(currentIndex, currentIndex + 3).map((tool, index) => {
                const categoryInfo = getCategoryInfo(tool.category);
                const colorClasses = getColorClasses(categoryInfo.color);
                
                return (
                  <div 
                    key={tool.id} 
                    className="bg-white border-0 shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-all duration-500 transform scale-105 tool-card"
                    onClick={() => handleToolClick(tool.slug)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${colorClasses}`}>
                          <i className={categoryInfo.icon}></i>
                          <span>{categoryInfo.name}</span>
                        </div>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tool.price}
                        </span>
                      </div>

                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <i className={categoryInfo.icon + " text-blue-600 text-2xl"}></i>
                      </div>

                      <h3 className="text-xl font-bold mb-4 text-center">{tool.name}</h3>
                      <p className="text-gray-600 mb-6 text-center overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{tool.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                          {tool.type}
                        </span>
                        {tool.usage.slice(0, 2).map(usage => (
                          <span key={usage} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {usage}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-3 mb-6">
                        {tool.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="px-6 pb-6 text-center">
                      <button className="w-1/2 mx-auto bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center">
                        <i className={`fas fa-arrow-${dir === 'rtl' ? 'left' : 'right'} mr-2`}></i>
                        {t('toolDetail.learnMore')}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(tools.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index * 3 ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {isPaused && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              <i className="fas fa-pause mr-1"></i>
              En Pause
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;