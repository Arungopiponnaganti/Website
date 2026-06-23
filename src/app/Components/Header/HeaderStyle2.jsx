"use client"
import { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function HeaderStyle2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const mobileOpenRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Don't hide/show the header while the offcanvas menu is open
      if (mobileOpenRef.current) return;
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  // Keep ref in sync, lock body scroll, and force header visible when menu opens
  useEffect(() => {
    mobileOpenRef.current = mobileToggle;
    document.body.style.overflow = mobileToggle ? 'hidden' : '';
    if (mobileToggle) {
      setIsSticky('cs-gescout_show cs-gescout_sticky');
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileToggle]);

  const location = usePathname();
  const [logoSrc, setLogoSrc] = useState('/assets/images/mayura-logo.png');

  useEffect(() => {
    const updateLogo = () => {
      if (window.innerWidth > 1199 && !isSticky) {
        setLogoSrc('/assets/images/mayura-white-logo.png');
      } else {
        setLogoSrc('/assets/images/mayura-logo.png');
      }
    };
    updateLogo();
    window.addEventListener('resize', updateLogo);
    return () => window.removeEventListener('resize', updateLogo);
  }, [isSticky]);

  return (
    <>
      {/* Offcanvas backdrop overlay */}
      <div
        className={`mobile-nav-overlay${mobileToggle ? ' active' : ''}`}
        onClick={() => setMobileToggle(false)}
      />
      <header
        className={`cs_site_header header_style_2 cs_style_1 ${variant ? variant : ''
          } cs_sticky_header cs_site_header_full_width ${mobileToggle ? 'cs_mobile_toggle_active' : ''
          } ${isSticky ? isSticky : ''}`}
      >
        <div className="cs_main_header">
          <div className="container-fluid">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link href="/" className="cs_site_branding">
                  <Image src={logoSrc} alt="Mayurasoft Logo" width={180} height={50} />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              <div className="cs_main_header_right d-none d-md-flex align-items-center">
                <div className="header-btn d-flex align-items-center">
                  <Link
                    href="/free-ai-data-audit"
                    className=""
                  >
                    Book a Free AI/Data Audit
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
