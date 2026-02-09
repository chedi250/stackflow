import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import ToolCatalog from './components/ToolCatalog';
import ToolDetailPage from './components/ToolDetailPage';
import Documentation from './components/Documentation';

import ToolsCarousel from './components/ToolsCarousel';
import ChatBot from './components/ChatBot';
import { useLanguage } from './context/LanguageContext';

function HomePage() {
  const { t, language, switchLanguage, dir } = useLanguage();

  const scrollToSection = (sectionId) => {
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
  };

  return (
    <div className="HomePage" dir={dir}>

      {/* Hero Section */}
      <section id="home" className="bg-gray-50 py-20 scroll-mt-20" dir={dir}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                  <i className={`fas fa-bolt ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`}></i>
                  {t('hero.badge')}
                </span>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight hero-text">
                  <span className="text-blue-600">{t('hero.title.line1')}</span>
                  <br />
                  <span className="text-gray-900">{t('hero.title.line2')}</span>
                  <br />
                  <span className="text-gray-900">{t('hero.title.line3')}</span>
                  <br />
                  <span className="text-yellow-500">{t('hero.title.line4')}</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  {t('hero.subtitle')}
                </p>
              </div>
              <div className={`flex flex-col sm:flex-row ${dir === 'rtl' ? 'space-x-reverse' : ''} gap-4`}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors flex items-center justify-center">
                  {t('hero.buttons.request')}
                  <i className={`fas fa-arrow-${dir === 'rtl' ? 'left mr-2' : 'right ml-2'}`}></i>
                </button>
                <button className="border border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 rounded-md font-medium text-lg transition-colors flex items-center bg-transparent justify-center">
                  <i className={`fas fa-comment-dots ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`}></i>
                  {t('hero.buttons.whatsapp')}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 dashboard-card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">{t('dashboard.title')}</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-comment-dots text-white"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t('dashboard.supportBot')}</div>
                        <div className="text-sm text-gray-600">{t('dashboard.processing247')}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-semibold">{t('dashboard.active')}</div>
                      <div className="text-sm text-gray-600">{t('dashboard.queries')}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-file-alt text-white"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t('dashboard.documentProcessor')}</div>
                        <div className="text-sm text-gray-600">{t('dashboard.autoGeneratingReports')}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-600 font-semibold">{t('dashboard.running')}</div>
                      <div className="text-sm text-gray-600">{t('dashboard.docs')}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <i className="fas fa-database text-white"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t('dashboard.syncEngine')}</div>
                        <div className="text-sm text-gray-600">{t('dashboard.realTimeIntegration')}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-semibold">{t('dashboard.synced')}</div>
                      <div className="text-sm text-gray-600">{t('dashboard.uptime')}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="fas fa-bolt text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer" className="py-20 bg-white scroll-mt-20" dir={dir}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">{t('whatWeOffer.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('whatWeOffer.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-0 shadow-lg hover:shadow-xl rounded-lg p-6 transition-all feature-card h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bolt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{t('whatWeOffer.features.saas.title')}</h3>
              <p className="text-gray-600 text-center flex-grow">
                {t('whatWeOffer.features.saas.description')}
              </p>
            </div>
            <div className="bg-white border-0 shadow-lg hover:shadow-xl rounded-lg p-6 transition-all feature-card h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{t('whatWeOffer.features.customAi.title')}</h3>
              <p className="text-gray-600 text-center flex-grow">
                {t('whatWeOffer.features.customAi.description')}
              </p>
            </div>
            <div className="bg-white border-0 shadow-lg hover:shadow-xl rounded-lg p-6 transition-all feature-card h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{t('whatWeOffer.features.pricing.title')}</h3>
              <p className="text-gray-600 text-center flex-grow">
                {t('whatWeOffer.features.pricing.description')}
              </p>
            </div>
            <div className="bg-white border-0 shadow-lg hover:shadow-xl rounded-lg p-6 transition-all feature-card h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check-circle text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{t('whatWeOffer.features.integration.title')}</h3>
              <p className="text-gray-600 text-center flex-grow">
                {t('whatWeOffer.features.integration.description')}
              </p>
            </div>
            <div className="bg-white border-0 shadow-lg hover:shadow-xl rounded-lg p-6 transition-all feature-card h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headphones text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{t('whatWeOffer.features.support.title')}</h3>
              <p className="text-gray-600 text-center flex-grow">
                {t('whatWeOffer.features.support.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Autoflow Section */}
      <section id="why-choose" className="bg-blue-600 py-20 scroll-mt-20 mx-2.5 rounded-lg" dir={dir}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">{t('whyChoose.title')}</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {t('whyChoose.subtitle')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-400 text-xl"></i>
                  <span className="text-blue-100">{t('whyChoose.features.expertise.description')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-400 text-xl"></i>
                  <span className="text-blue-100">{t('whyChoose.features.customization.description')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-400 text-xl"></i>
                  <span className="text-blue-100">{t('whyChoose.features.support.description')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-400 text-xl"></i>
                  <span className="text-blue-100">{t('whyChoose.features.affordable.description')}</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-500 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{t('whyChoose.stats.deployments')}</div>
                  <div className="text-blue-100">{t('whyChoose.stats.deploymentsLabel')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{t('whyChoose.stats.satisfaction')}</div>
                  <div className="text-blue-100">{t('whyChoose.stats.satisfactionLabel')}</div>
                </div>
                <div className="text-center col-span-2">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{t('whyChoose.stats.support')}</div>
                  <div className="text-blue-100">{t('whyChoose.stats.supportLabel')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Carousel Section */}
      <ToolsCarousel />

      {/* Custom Need Section */}
      <section id="custom-need" className="py-20 bg-gray-50 scroll-mt-20" dir={dir}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">{t('customNeed.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('customNeed.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors flex items-center justify-center">
              {t('customNeed.buttons.requestCustomSolution')}
              <i className={`fas fa-arrow-${dir === 'rtl' ? 'left mr-2' : 'right ml-2'}`}></i>
            </button>
            <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-md font-medium text-lg transition-colors flex items-center justify-center">
              {t('customNeed.buttons.scheduleConsultation')}
              <i className={`fas fa-calendar-alt ${dir === 'rtl' ? 'mr-2' : 'ml-2'}`}></i>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white scroll-mt-20" dir={dir}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">{t('howItWorks.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('howItWorks.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  01
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-search text-blue-600"></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('howItWorks.consultation')}</h3>
              <p className="text-gray-600">{t('howItWorks.consultationDesc')}</p>
            </div>
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  02
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-wrench text-yellow-600"></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('howItWorks.development')}</h3>
              <p className="text-gray-600">{t('howItWorks.developmentDesc')}</p>
            </div>
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  03
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-rocket text-green-600"></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('howItWorks.deployment')}</h3>
              <p className="text-gray-600">{t('howItWorks.deploymentDesc')}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('howItWorks.typicalProjectTimeline')}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div>
                    <span className="font-semibold">{t('howItWorks.week12')}</span> {t('howItWorks.analysisPanning')}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div>
                    <span className="font-semibold">{t('howItWorks.week36')}</span> {t('howItWorks.developmentTesting')}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <div>
                    <span className="font-semibold">{t('howItWorks.week78')}</span> {t('howItWorks.deploymentTraining')}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('howItWorks.whatYouGet')}</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  {t('howItWorks.completeAutomationSystem')}
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  {t('howItWorks.fullDocumentationTraining')}
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  {t('howItWorks.monthsFreeSupport')}
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  {t('howItWorks.sourceCodeDeployment')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white scroll-mt-20" dir={dir}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">{t('contact.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-white border-0 shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6">{t('contact.title')}</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.name')}
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          placeholder={t('contact.form.name')}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.email')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder={t('contact.form.emailPlaceholder')}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.businessType')}
                      </label>
                      <select id="businessType" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="">{t('contact.form.businessTypePlaceholder')}</option>
                        {Object.entries(t('contact.form.businessTypes')).map(([key, value]) => (
                          <option key={key} value={key}>{value}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.projectDescription')}
                      </label>
                      <textarea
                        id="projectDescription"
                        rows="4"
                        placeholder={t('contact.form.projectDescriptionPlaceholder')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fileUpload')}
                      </label>
                      <div className="dropzone">
                        <i className="fas fa-upload text-gray-400 text-2xl mx-auto mb-2"></i>
                        <p className="text-gray-600">{t('contact.form.fileUploadDropText')}</p>
                        <p className="text-sm text-gray-500 mt-1">{t('contact.form.fileUploadSupport')}</p>
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium text-lg transition-colors">
                      {t('contact.form.submit')}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white border-0 shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{t('contact.support.title')}</h3>
                  <div className="space-y-4">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center">
                      <i className="fas fa-comment-dots mr-2"></i>
                      {t('contact.support.whatsapp')}
                    </button>
                    <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-100 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      {t('contact.support.meeting')}
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white border-0 shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{t('contact.info.title')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-envelope text-blue-600"></i>
                      <span>{t('contact.info.email')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-phone text-blue-600"></i>
                      <span>{t('contact.info.phone')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-map-marker-alt text-blue-600"></i>
                      <span>{t('contact.info.location')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-clock text-blue-600"></i>
                      <span>{t('contact.info.hours')}</span>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">{t('contact.info.responseTitle')}</h4>
                      <p className="text-gray-600">{t('contact.info.response')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <ChatBot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<ToolCatalog />} />
          <Route path="/tools/:slug" element={<ToolDetailPage />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
