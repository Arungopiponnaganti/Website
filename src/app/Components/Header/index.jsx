"use client"
import { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
export default function Header({ variant }) {
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

  return (
    <div className='header-area2'>
      {/* Offcanvas backdrop overlay */}
      <div
        className={`mobile-nav-overlay${mobileToggle ? ' active' : ''}`}
        onClick={() => setMobileToggle(false)}
      />
    <header
      className={`cs_site_header cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_main_header cs_accent_bg">
        <div className="container-fluid">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
<Link className="cs_site_branding" href="/">
                  <Image src="/assets/images/mayura-logo.png" alt="Mayurasoft - Software, AI & Data Engineering Company Logo" width={161} height={42} priority />
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
            <div className="cs_main_header_right">
              <div className="d-flex align-items-center gap-4">
                <Link href="/contact" className="cs_btn cs_style_1 cs_ghost_btn" style={{border: '1px solid #4C60F4', color: '#4C60F4', backgroundColor: 'transparent', borderRadius: '8px', padding: '10px 24px', fontWeight: '500', transition: 'all 0.3s ease'}} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#4C60F4'; e.currentTarget.style.color = '#fff'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#4C60F4'; }}>
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="cs_site_header_spacing_130"></div>
    </div>
    
  );
}
