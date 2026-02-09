import { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import toolsData from '../data/tools.json';

const ToolCatalog = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedUsage, setSelectedUsage] = useState('all');

  const filteredTools = useMemo(() => {
    return toolsData.tools.filter(tool => {
      const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
      const typeMatch = selectedType === 'all' || tool.type === selectedType;
      const usageMatch = selectedUsage === 'all' || tool.usage.includes(selectedUsage);
      
      return categoryMatch && typeMatch && usageMatch;
    });
  }, [selectedCategory, selectedType, selectedUsage]);

  const uniqueTypes = [...new Set(toolsData.tools.map(tool => tool.type))];
  const uniqueUsages = [...new Set(toolsData.tools.flatMap(tool => tool.usage))];

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

  const handleWatchDemo = (demoUrl) => {
    window.open(demoUrl, '_blank');
  };

  const handleGetTool = (slug) => {
    window.location.href = `/tools/${slug}`;
  };

  return (
    <section id="saas-catalog" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">{t('catalog.title')}</h2>
            <p className="text-xl text-gray-600">{t('catalog.subtitle')}</p>
          </div>

          {/* Filters */}
          <div className="mb-12 bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🔍 {t('catalog.filters.sector')}
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">{t('catalog.filters.all')}</option>
                  {Object.entries(toolsData.categories).map(([key, category]) => (
                    <option key={key} value={key}>{category.name}</option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  💡 {t('catalog.filters.type')}
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">{t('catalog.filters.all')}</option>
                  {uniqueTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Usage Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ⚙️ {t('catalog.filters.usage')}
                </label>
                <select
                  value={selectedUsage}
                  onChange={(e) => setSelectedUsage(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">{t('catalog.filters.all')}</option>
                  {uniqueUsages.map(usage => (
                    <option key={usage} value={usage}>{usage}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => {
              const categoryInfo = getCategoryInfo(tool.category);
              const colorClasses = getColorClasses(categoryInfo.color);
              
              return (
                <div key={tool.id} className="bg-white border-0 shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-all">
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${colorClasses}`}>
                        <i className={categoryInfo.icon}></i>
                        <span>{categoryInfo.name}</span>
                      </div>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tool.price}
                      </span>
                    </div>

                    {/* Tool Icon */}
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <i className={categoryInfo.icon + " text-blue-600 text-2xl"}></i>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-center">{tool.name}</h3>
                    <p className="text-gray-600 mb-6 text-center">{tool.description}</p>

                    {/* Type and Usage Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        {tool.type}
                      </span>
                      {tool.usage.slice(0, 2).map(usage => (
                        <span key={usage} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {usage}
                        </span>
                      ))}
                      {tool.usage.length > 2 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{tool.usage.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="px-6 pb-6 space-y-3">
                    <button
                      onClick={() => handleWatchDemo(tool.demoVideo)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                    >
                      <i className="fas fa-play mr-2"></i>
                      🎥 {t('catalog.buttons.watchDemo')}
                    </button>
                    <button
                      onClick={() => handleGetTool(tool.slug)}
                      className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                    >
                      ⚙️ {t('catalog.buttons.getTool')}
                      <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-search text-gray-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {t('catalog.noResults.title')}
              </h3>
              <p className="text-gray-500">
                {t('catalog.noResults.description')}
              </p>
            </div>
          )}
        </div>
      </section>
  );
};

export default ToolCatalog;