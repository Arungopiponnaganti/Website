/**
 * Example: Using generateMetadata for Dynamic Routes
 * 
 * This demonstrates how to use Next.js App Router's generateMetadata
 * for pages with dynamic content (e.g., blog posts, projects, team members)
 */
import { getPageMetadata, BASE_URL } from '@/utils/seo';

/**
 * Static metadata export - works at build time
 * Use this for simple pages without dynamic content
 */
export const metadata = getPageMetadata('/blog/blog-details');

/**
 * Dynamic metadata using generateMetadata
 * Use this for pages that need runtime data (searchParams, params)
 * 
 * @param {Object} props - Next.js page props
 * @param {Object} props.params - Route parameters
 * @param {Object} props.searchParams - Query string parameters
 * @returns {Promise<Object>} Metadata object
 */
export async function generateMetadata(props) {
  const { searchParams, params } = props;
  
  const baseMetadata = getPageMetadata('/blog/blog-details');
  
  let dynamicTitle = baseMetadata.title;
  let dynamicDescription = baseMetadata.description;
  let ogImage = baseMetadata.openGraph.images[0].url;
  
  // Example: Override metadata based on query parameters
  // In a real app, you might fetch from a database
  if (searchParams?.title) {
    dynamicTitle = `${searchParams.title} | Mayurasoft`;
  }
  
  if (searchParams?.description) {
    dynamicDescription = searchParams.description;
  }
  
  if (searchParams?.image) {
    ogImage = searchParams.image;
  }
  
  // Example: Handle slug-based routes
  // const slug = params?.slug;
  // if (slug) {
  //   const post = await getBlogPost(slug);
  //   dynamicTitle = `${post.title} | Mayurasoft`;
  //   dynamicDescription = post.excerpt;
  //   ogImage = post.coverImage;
  // }
  
  return {
    title: dynamicTitle,
    description: dynamicDescription,
    keywords: baseMetadata.keywords,
    openGraph: {
      ...baseMetadata.openGraph,
      title: dynamicTitle,
      description: dynamicDescription,
      images: [
        {
          url: `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: dynamicTitle,
        },
      ],
      url: `${BASE_URL}/blog/blog-details`,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: dynamicTitle,
      description: dynamicDescription,
      images: [`${BASE_URL}${ogImage}`],
    },
    alternates: {
      canonical: `${BASE_URL}/blog/blog-details`,
    },
  };
}

export default function DynamicMetadataPage(props) {
  const { searchParams } = props;
  
  return (
    <div>
      <h1>Blog Details</h1>
      {searchParams?.title && <p>Showing: {searchParams.title}</p>}
    </div>
  );
}