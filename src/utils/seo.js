import seoMetadata from '@/Data/seoMetadata.json';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mayurasoft.com';
const COMMON_OG_IMAGE_PATH = '/openGraphImage.jpg';
const COMMON_OG_IMAGE_VERSION = 'v=20260623';
const COMMON_OG_IMAGE = `${COMMON_OG_IMAGE_PATH}?${COMMON_OG_IMAGE_VERSION}`;
const COMMON_OG_IMAGE_WIDTH = 1200;
const COMMON_OG_IMAGE_HEIGHT = 630;
const COMMON_OG_IMAGE_TYPE = 'image/jpeg';

function getMetadataByPath(path) {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  const metadata = seoMetadata[normalizedPath] || seoMetadata['/'] || seoMetadata['/'];
  return metadata;
}

export function getPageMetadata(path) {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  const metadata = getMetadataByPath(path);
  const ogImageUrl = `${BASE_URL}${COMMON_OG_IMAGE}`;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${BASE_URL}${normalizedPath}`,
      siteName: 'Mayurasoft',
      images: [
        {
          url: ogImageUrl,
          width: COMMON_OG_IMAGE_WIDTH,
          height: COMMON_OG_IMAGE_HEIGHT,
          type: COMMON_OG_IMAGE_TYPE,
          alt: metadata.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${BASE_URL}${normalizedPath}`,
    },
  };
}

export function generateMetadata(props) {
  const { params, path: explicitPath } = props || {};
  let path = explicitPath || '/';
  
  if (params?.slug) {
    path = Array.isArray(params.slug) ? `/${params.slug.join('/')}` : `/${params.slug}`;
  }
  
  return getPageMetadata(path);
}

export async function generateMetadataAsync(props) {
  const { params, searchParams, path: explicitPath } = props || {};
  let path = explicitPath || '/';
  
  if (params?.slug) {
    path = Array.isArray(params.slug) ? `/${params.slug.join('/')}` : `/${params.slug}`;
  }

  const metadata = getMetadataByPath(path);
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  const ogImageUrl = `${BASE_URL}${COMMON_OG_IMAGE}`;
  
  let dynamicData = {};
  
  if (searchParams?.title) {
    dynamicData.title = searchParams.title;
  }

  if (searchParams?.model) {
    const modelName = searchParams.model.charAt(0).toUpperCase() + searchParams.model.slice(1).replace(/-/g, ' ');
    dynamicData.title = `${modelName} | Mayurasoft`;
  } else if (searchParams?.service) {
    const serviceName = searchParams.service.charAt(0).toUpperCase() + searchParams.service.slice(1).replace(/-/g, ' ');
    dynamicData.title = `${serviceName} | Mayurasoft`;
  }

  const title = dynamicData.title ? dynamicData.title : metadata.title;
  
  return {
    title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title,
      description: metadata.description,
      url: `${BASE_URL}${normalizedPath}`,
      siteName: 'Mayurasoft',
      images: [
        {
          url: ogImageUrl,
          width: COMMON_OG_IMAGE_WIDTH,
          height: COMMON_OG_IMAGE_HEIGHT,
          type: COMMON_OG_IMAGE_TYPE,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metadata.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${BASE_URL}${normalizedPath}`,
    },
  };
}

export function getMetadataKeys() {
  return Object.keys(seoMetadata);
}

export { BASE_URL, COMMON_OG_IMAGE, COMMON_OG_IMAGE_PATH, COMMON_OG_IMAGE_VERSION, seoMetadata };
