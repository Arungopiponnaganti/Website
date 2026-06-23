/**
 * SEO Metadata Usage Guide
 * 
 * This file demonstrates how to use the SEO metadata system in Next.js App Router.
 * All metadata is stored centrally in src/Data/seoMetadata.json
 */

// ============================================================================
// PATTERN 1: Static Metadata (Simplest - for static pages)
// ============================================================================

/**
 * For simple pages without dynamic content, export metadata directly:
 * 
 * // about/page.jsx
 * import { getPageMetadata } from '@/utils/seo';
 * export const metadata = getPageMetadata('/about');
 */

// ============================================================================
// PATTERN 2: Dynamic Metadata with generateMetadata (Recommended)
// ============================================================================

/**
 * For pages with dynamic content (query params, slugs, database data):
 * 
 * // blog/blog-details/page.jsx
 * import { getPageMetadata, BASE_URL } from '@/utils/seo';
 * 
 * export async function generateMetadata(props) {
 *   const { searchParams, params } = props;
 *   const baseMetadata = getPageMetadata('/blog/blog-details');
 *   
 *   // Example: Override based on query params or database
 *   if (searchParams?.title) {
 *     return {
 *       ...baseMetadata,
 *       title: `${searchParams.title} | Mayurasoft`,
 *     };
 *   }
 *   
 *   return baseMetadata;
 * }
 * 
 * export default function Page(props) {
 *   // Page component
 * }
 */

// ============================================================================
// PATTERN 3: With Database Data (Async)
// ============================================================================

/**
 * For pages that need to fetch data from a database:
 * 
 * export async function generateMetadata(props) {
 *   const { params } = props;
 *   const slug = params.slug;
 *   
 *   // Fetch data from database/API
 *   const post = await getBlogPost(slug);
 *   
 *   if (!post) {
 *     return {
 *       title: 'Post Not Found | Mayurasoft',
 *     };
 *   }
 *   
 *   return {
 *     title: `${post.title} | Mayurasoft`,
 *     description: post.excerpt,
 *     openGraph: {
 *       title: post.title,
 *       description: post.excerpt,
 *       images: [{ url: post.coverImage, width: 1200, height: 630 }],
 *     },
 *   };
 * }
 */

// ============================================================================
// PATTERN 4: TypeScript Example (For .tsx files)
// ============================================================================

/**
 * // about/page.tsx
 * import { getPageMetadata } from '@/utils/seo';
 * import type { Metadata } from 'next';
 * 
 * export const metadata: Metadata = getPageMetadata('/about');
 * 
 * export default function Page() { ... }
 */

// ============================================================================
// PATTERN 5: Dynamic Route with generateMetadata
// ============================================================================

/**
 * For dynamic routes like /projects/[id]/page.jsx:
 * 
 * import { BASE_URL } from '@/utils/seo';
 * 
 * export async function generateMetadata(props): Promise<Metadata> {
 *   const { params } = props;
 *   const projectId = params.id;
 *   
 *   const project = await getProject(projectId);
 *   
 *   return {
 *     title: `${project.title} | Mayurasoft`,
 *     description: project.summary,
 *     openGraph: {
 *       title: project.title,
 *       description: project.summary,
 *       url: `${BASE_URL}/project/${projectId}`,
 *       images: [{ url: project.image, width: 1200, height: 630 }],
 *     },
 *     alternates: {
 *       canonical: `${BASE_URL}/project/${projectId}`,
 *     },
 *   };
 * }
 */

// ============================================================================
// Adding New Pages
// ============================================================================

/**
 * To add SEO metadata for a new page:
 * 
 * 1. Add the route to src/Data/seoMetadata.json:
 *    "/new-page": {
 *      "title": "New Page | Mayurasoft",
 *      "description": "Description of the new page",
 *      "keywords": "keyword1, keyword2, keyword3",
 *      "ogImage": "/openGraphImage.jpg?v=20260623"
 *    }
 * 
 * 2. In your page file:
 *    import { getPageMetadata } from '@/utils/seo';
 *    export const metadata = getPageMetadata('/new-page');
 */

// ============================================================================
// Configuration
// ============================================================================

/**
 * The BASE_URL is automatically set from:
 * - Environment variable: NEXT_PUBLIC_SITE_URL
 * - Fallback: 'https://mayurasoft.com'
 * 
 * Add to your .env.local:
 * NEXT_PUBLIC_SITE_URL=https://your-domain.com
 */

// Export for reference
module.exports = {};