import seoMetadata from '@/Data/seoMetadata.json';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mayurasoft.com';

function getMetadataByPath(path) {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  const metadata = seoMetadata[normalizedPath] || seoMetadata['/'] || seoMetadata['/'];
  return metadata;
}

export function getPageMetadata(path) {
  const metadata = getMetadataByPath(path);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${BASE_URL}${path}`,
      siteName: 'MayuraSoft',
      images: [
        {
          url: `${BASE_URL}${metadata.ogImage}`,
          width: 1200,
          height: 630,
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
      images: [`${BASE_URL}${metadata.ogImage}`],
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  };
}

export function generateMetadata(props) {
  const { params, searchParams } = props || {};
  let path = '/';
  
  if (params?.slug) {
    path = Array.isArray(params.slug) ? `/${params.slug.join('/')}` : `/${params.slug}`;
  }
  
  return getPageMetadata(path);
}

export async function generateMetadataAsync(props) {
  const { params, searchParams } = props || {};
  let path = '/';
  
  if (params?.slug) {
    path = Array.isArray(params.slug) ? `/${params.slug.join('/')}` : `/${params.slug}`;
  }

  const metadata = getMetadataByPath(path);
  
  let dynamicData = {};
  
  if (searchParams?.title) {
    dynamicData.title = searchParams.title;
  }

  if (searchParams?.model) {
    const modelName = searchParams.model.charAt(0).toUpperCase() + searchParams.model.slice(1).replace(/-/g, ' ');
    dynamicData.title = `${modelName} | MayuraSoft`;
  } else if (searchParams?.service) {
    const serviceName = searchParams.service.charAt(0).toUpperCase() + searchParams.service.slice(1).replace(/-/g, ' ');
    dynamicData.title = `${serviceName} | MayuraSoft`;
  }

  const title = dynamicData.title ? dynamicData.title : metadata.title;
  
  return {
    title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title,
      description: metadata.description,
      url: `${BASE_URL}${path}`,
      siteName: 'MayuraSoft',
      images: [
        {
          url: `${BASE_URL}${metadata.ogImage}`,
          width: 1200,
          height: 630,
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
      images: [`${BASE_URL}${metadata.ogImage}`],
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  };
}

export function getMetadataKeys() {
  return Object.keys(seoMetadata);
}

export { BASE_URL, seoMetadata };