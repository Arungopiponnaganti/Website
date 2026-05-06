import { Fira_Sans, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import './assets/responsive.css';
import './assets/why-choose-us.css';
import './assets/technologies.css';
import './assets/scale-hero.css';
import { getPageMetadata } from '@/utils/seo';
import SkipLink from '@/app/Components/Common/SkipLink';

const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = getPageMetadata('/');

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/assets/images/mayura-logo-footer.png" sizes="any" />
        <link rel="preload" as="image" href="/assets/images/hero-thumb.png" />
        <link rel="preload" as="image" href="/assets/images/ship-new.png" />
      </head>
      <body className={`${fira_sans.variable} ${poppins.variable}`}>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
