import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import toolsData from '../data/tools.json';

const ToolDetailPage = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const [tool, setTool] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const foundTool = toolsData.tools.find(t => t.slug === slug);
    setTool(foundTool);
  }, [slug]);

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-blue-600 mb-4"></i>
          <p className="text-gray-600">{t('toolDetail.loading')}</p>
        </div>
      </div>
    );
  }

  const categoryInfo = toolsData.categories[tool.category];
  const getColorClasses = (color) => {
    const colorMap = {
      red: 'text-red-600 bg-red-100 border-red-200',
      blue: 'text-blue-600 bg-blue-100 border-blue-200',
      green: 'text-green-600 bg-green-100 border-green-200',
      purple: 'text-purple-600 bg-purple-100 border-purple-200',
      orange: 'text-orange-600 bg-orange-100 border-orange-200',
      gray: 'text-gray-600 bg-gray-100 border-gray-200'
    };
    return colorMap[color] || colorMap.gray;
  };

  const colorClasses = getColorClasses(categoryInfo.color);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-gray-800 flex items-center space-x-2"
            >
              <i className="fas fa-arrow-left"></i>
              <span>{t('toolDetail.backToCatalog')}</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${colorClasses}`}>
                <i className={categoryInfo.icon}></i>
                <span>{categoryInfo.name}</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{tool.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{tool.description}</p>

              <div className="flex items-center space-x-6 mb-6">
                <div className="text-3xl font-bold text-green-600">{tool.price}</div>
                <div className="text-sm text-gray-500">{t('toolDetail.oneTimePayment')}</div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => window.open(tool.demoVideo, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center space-x-2"
                >
                  <i className="fas fa-play"></i>
                  <span>{t('toolDetail.watchDemo')}</span>
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-medium">
                  {t('toolDetail.requestSetup')}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">{t('toolDetail.keyFeatures')}</h3>
              <ul className="space-y-3">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <i className="fas fa-check-circle text-green-600"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: t('toolDetail.tabs.overview'), icon: 'fas fa-info-circle' },
                { id: 'usecases', label: t('toolDetail.tabs.useCases'), icon: 'fas fa-lightbulb' },
                { id: 'integrations', label: t('toolDetail.tabs.integrations'), icon: 'fas fa-plug' },

              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                  <i className={tab.icon}></i>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{t('toolDetail.toolOverview')}</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">{t('toolDetail.aiModelUsed')}</h4>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-brain text-blue-600 text-xl"></i>
                      <div>
                        <div className="font-semibold text-blue-900">{tool.aiModel}</div>
                        <div className="text-sm text-blue-700">{t('toolDetail.advancedAIModel')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">{t('toolDetail.typeAndUsage')}</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tool.type}
                    </span>
                    {tool.usage.map(usage => (
                      <span key={usage} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {usage}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'usecases' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">{t('toolDetail.useCases')}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {tool.useCases.map((useCase, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{useCase}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">{t('toolDetail.supportedIntegrations')}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {tool.integrations.map((integration, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <i className="fas fa-plug text-gray-600 text-2xl mb-2"></i>
                      <div className="font-medium text-gray-900">{integration}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage;