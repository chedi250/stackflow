import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Documentation = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('mission');

  const sections = [
    { id: 'mission', title: t('documentation.sections.mission'), icon: 'fas fa-bullseye' },
    { id: 'delivery', title: t('documentation.sections.delivery'), icon: 'fas fa-truck' },
    { id: 'terms', title: t('documentation.sections.terms'), icon: 'fas fa-file-contract' },
    { id: 'privacy', title: t('documentation.sections.privacy'), icon: 'fas fa-shield-alt' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'mission':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('documentation.mission.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('documentation.mission.subtitle')}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">{t('documentation.mission.beliefs.title')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check-circle text-blue-600 mt-1"></i>
                  <span className="text-blue-800">
                    {t('documentation.mission.beliefs.affordable')}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check-circle text-blue-600 mt-1"></i>
                  <span className="text-blue-800">
                    {t('documentation.mission.beliefs.noCode')}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check-circle text-blue-600 mt-1"></i>
                  <span className="text-blue-800">
                    {t('documentation.mission.beliefs.sectorSpecific')}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('documentation.mission.whoWeServe.title')}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <i className="fas fa-user-tie text-blue-600 text-2xl mb-4"></i>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.mission.whoWeServe.freelancers.title')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('documentation.mission.whoWeServe.freelancers.description')}
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <i className="fas fa-building text-green-600 text-2xl mb-4"></i>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.mission.whoWeServe.sme.title')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('documentation.mission.whoWeServe.sme.description')}
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <i className="fas fa-industry text-purple-600 text-2xl mb-4"></i>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.mission.whoWeServe.niche.title')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('documentation.mission.whoWeServe.niche.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'delivery':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('documentation.delivery.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('documentation.delivery.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {t('documentation.delivery.step1')}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('documentation.delivery.frontend.title')}</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.delivery.frontend.whatYouReceive')}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-file-archive text-blue-600"></i>
                        <span>{t('documentation.delivery.frontend.completeReact')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-code text-green-600"></i>
                        <span>{t('documentation.delivery.frontend.customizedUI')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-mobile-alt text-purple-600"></i>
                        <span>{t('documentation.delivery.frontend.responsive')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-book text-orange-600"></i>
                        <span>{t('documentation.delivery.frontend.documentation')}</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-600">
                    {t('documentation.delivery.frontend.description')}
                  </p>
                </div>
              </div>

              {/*ralized Step 2 */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {t('documentation.delivery.step2')}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('documentation.delivery.backend.title')}</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.delivery.backend.hostedOnOurServers')}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-server text-blue-600"></i>
                        <span>{t('documentation.delivery.backend.secureAPI')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-brainUIPackage text-green-600"></i>
                        <span>{t('documentation.delivery.backend.aiProcessing')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-database text-purple-600"></i>
                        <span>{t('documentation.delivery.backend.usageTracking')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-shield-alt text-red-600"></i>
                        <span>{t('documentation.delivery.backend.security')}</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-600">
                    {t('documentation.delivery.backend.description')}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {t('documentation.delivery.step3')}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('documentation.delivery.license.title')}</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.delivery.license.yourLicenseIncludes')}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-key text-blue-600"></i>
                        <span>{t('documentation.delivery.license.uniqueKey')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-chart-line text-green-600"></i>
                        <span>{t('documentation.delivery.license.dashboard')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-cog text-purple-600"></i>
                        <span>{t('documentation.delivery.license.planManagement')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fas fa-headset text-orange-600"></i>
                        <span>{t('documentation.delivery.license.support')}</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-600">
                    {t('documentation.delivery.license.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                <i className="fas fa-lightbulb mr-2"></i>
                {t('documentation.delivery.whyThisApproach.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.delivery.whyThisApproach.ownFrontendTitle')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('documentation.delivery.whyThisApproach.ownFrontend')}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.delivery.whyThisApproach.handleComplexityTitle')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('documentation.delivery.whyThisApproach.handleComplexity')}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.delivery.whyThisApproach.alwaysUpToDateTitle')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('documentation.delivery.whyThisApproach.alwaysUpToDate')}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.delivery.whyThisApproach.costEffectiveTitle')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('documentation.delivery.whyThisApproach.costEffective')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('documentation.terms.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('documentation.terms.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">
                  <i className="fas fa-copyright mr-2"></i>
                  {t('documentation.terms.intellectualProperty.title')}
                </h3>
                <ul className="space-y-3 text-red-800">
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-exclamation-triangle text-red-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.terms.intellectualProperty.autoflowRetains')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-code text-red-600 mt-1"></i>
                    <span>
                      {t('documentation.terms.intellectualProperty.frontendCode')}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-ban text-red-600 mt-1"></i>
                    <span>
                      {t('documentation.terms.intellectualProperty.noReverse')}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">
                  <i className="fas fa-ban mr-2"></i>
                  {t('documentation.terms.prohibited.title')}
                </h3>
                <ul className="space-y-3 text-yellow-800">
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-times-circle text-yellow-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.terms.prohibited.reselling')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-times-circle text-yellow-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.terms.prohibited.sharingKeys')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-times-circle text-yellow-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.terms.prohibited.competing')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-times-circle text-yellow-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.terms.prohibited.misuse')}</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">
                  <i className="fas fa-check-circle mr-2"></i>
                  {t('documentation.terms.allowed.title')}
                </h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check text-green-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.terms.allowed.customize')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check text-green-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.terms.allowed.host')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check text-green-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.terms.allowed.use')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check text-green-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.terms.allowed.request')}</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  <i className="fas fa-handshake mr-2"></i>
                  {t('documentation.terms.compliance.title')}
                </h3>
                <p className="text-blue-800 mb-4">
                  {t('documentation.terms.compliance.description')}
                </p>
                <ul className="space-y-2 text-blue-800">
                  <li>• {t('documentation.terms.compliance.useKey')}</li>
                  <li>• {t('documentation.terms.compliance.respectLimits')}</li>
                  <li>• {t('documentation.terms.compliance.reportVulnerabilities')}</li>
                  <li>• {t('documentation.terms.compliance.complyLaws')}</li>
                  <li>• {t('documentation.terms.compliance.maintainConfidentiality')}</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('documentation.privacy.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('documentation.privacy.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">
                  <i className="fas fa-shield-alt mr-2"></i>
                  {t('documentation.privacy.dontStore.title')}
                </h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-times-circle text-green-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.dontStore.businessData')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-times-circle text-green-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.dontStore.medicalInfo')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-times-circle text-green-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.dontStore.conversations')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-times-circle text-green-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.dontStore.financial')}</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  <i className="fas fa-chart-line mr-2"></i>
                  {t('documentation.privacy.doStore.title')}
                </h3>
                <p className="text-blue-800 mb-4">
                  {t('documentation.privacy.doStore.description')}
                </p>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-clock text-blue-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.doStore.timestamps')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-coins text-blue-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.doStore.tokenUsage')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-brain text-blue-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.doStore.modelUsed')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-tachometer-alt text-blue-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.doStore.responseTimes')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-exclamation-triangle text-blue-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.doStore.errorLogs')}</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  <i className="fas fa-lock mr-2"></i>
                  {t('documentation.privacy.security.title')}
                </h3>
                <ul className="space-y-3 text-purple-800">
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-certificate text-purple-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.security.encryption')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-server text-purple-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.security.infrastructure')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-user-shield text-purple-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.security.accessControls')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-trash text-purple-600 mt-1"></i>
                    <span>
                      <strong>{t('documentation.privacy.security.automaticDeletion')}</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">
                  <i className="fas fa-user-check mr-2"></i>
                  {t('documentation.privacy.rights.title')}
                </h3>
                <p className="text-orange-800 mb-4">
                  {t('documentation.privacy.rights.description')}
                </p>
                <ul className="space-y-2 text-orange-800">
                  <li>• <strong>{t('documentation.privacy.rights.access')}</strong></li>
                  <li>• <strong>{t('documentation.privacy.rights.deletion')}</strong></li>
                  <li>• <strong>{t('documentation.privacy.rights.portability')}</strong></li>
                  <li>• <strong>{t('documentation.privacy.rights.correction')}</strong></li>
                  <li>• <strong>{t('documentation.privacy.rights.transparency')}</strong></li>
                </ul>
                <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                  <p className="text-orange-900 font-medium">
                    <i className="fas fa-envelope mr-2"></i>
                    {t('documentation.privacy.rights.contact')}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  <i className="fas fa-gavel mr-2"></i>
                  {t('documentation.privacy.compliance.title')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.privacy.compliance.hipaa.title')}</h4>
                    <p className="text-gray-700 text-sm">
                      {t('documentation.privacy.compliance.hipaa.description')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.privacy.compliance.gdpr.title')}</h4>
                    <p className="text-gray-700 text-sm">
                      {t('documentation.privacy.compliance.gdpr.description')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.privacy.compliance.ccpa.title')}</h4>
                    <p className="text-gray-700 text-sm">
                      {t('documentation.privacy.compliance.ccpa.description')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('documentation.privacy.compliance.soc2.title')}</h4>
                    <p className="text-gray-700 text-sm">
                      {t('documentation.privacy.compliance.soc2.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('documentation.title')}</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('documentation.subtitle')}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('documentation.sections.sidebarHeading')}</h3>
                <nav className="space-y-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                        activeSection === section.id
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <i className={section.icon}></i>
                      <span>{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Documentation;