const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mayurasoft.com';

export default function sitemap() {
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/service', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/service/custom-software-development', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/service/product-engineering', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/service/application-modernisation', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/service/cloud-devops', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/service/quality-engineering', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/service/ux-ui-design', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/service/tech-due-diligence', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/service/managed-app-support', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/ai-automations', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/ai-automations/workflow-automation', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/ai-automations/ai-integration', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/ai-automations/conversational-ai', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/ai-automations/document-processing', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/ai-automations/ai-governance', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/ai-automations/ai-readiness', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/data-solutions', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/data-solutions/data-governance', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/data-solutions/cloud-data-platforms', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/data-solutions/data-strategy-consulting', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/data-solutions/reporting-visualisation', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/data-solutions/analytics-business-intelligence', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/data-solutions/data-engineering-pipelines', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/why-choose-us', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/privacy-policy', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/blog', priority: 0.6, changeFrequency: 'weekly' },
    { url: '/faq', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/pricing', priority: 0.5, changeFrequency: 'monthly' },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
