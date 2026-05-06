import { getPageMetadata } from '@/utils/seo';

export function generateMetadata({ params }) {
  const path = params?.slug ? `/${params.slug.join('/')}` : '/';
  return getPageMetadata(path);
}