import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import DropDown from './DropDown';
import MegaMenuServices from './MegaMenuServices';
import MegaMenuAI from './MegaMenuAI';
import MegaMenuData from './MegaMenuData';
import MegaMenuIndustries from './MegaMenuIndustries';

function handleMegaMenuLinkClick() {
  document.documentElement.classList.add('mega-nav-clicked');
  setTimeout(() => document.documentElement.classList.remove('mega-nav-clicked'), 3000);
}

function clearMegaNavClicked() {
  document.documentElement.classList.remove('mega-nav-clicked');
}

export default function Nav({ setMobileToggle }) {
  const megaMenuServicesRef = useRef(null);
  const megaMenuAIRef = useRef(null);
  const megaMenuDataRef = useRef(null);
  const megaMenuIndustriesRef = useRef(null);
  return (
    <ul className="cs_nav_list fw-medium" onMouseLeave={clearMegaNavClicked}>
      {/* Offcanvas panel header — hidden on desktop via CSS */}
      <li className="offcanvas-nav-header-li">
        <div className="offcanvas-nav-header">
          <a href="/" onClick={() => setMobileToggle(false)}>
            <Image src="/assets/images/mayura-logo.png" alt="MayuraSoft Logo" width={130} height={34} priority />
          </a>
          <button
            className="offcanvas-close-btn"
            onClick={() => setMobileToggle(false)}
            aria-label="Close menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      </li>

      <li className="menu-item-has-children cs-mega_menu" style={{position: 'relative', zIndex: 10001}}>
        <Link href="/service" style={{position: 'relative', zIndex: 10001}}><i className="bi bi-grid-1x2-fill nav-item-icon"></i>Services</Link>
        <MegaMenuServices ref={megaMenuServicesRef} setMobileToggle={setMobileToggle} onLinkClick={() => { handleMegaMenuLinkClick(); setMobileToggle(false); megaMenuServicesRef.current?.close(); }} />
      </li>
      <li className="menu-item-has-children cs-mega_menu" style={{position: 'relative', zIndex: 10001}}>
        <Link href="/ai-automations" style={{position: 'relative', zIndex: 10001}}><i className="bi bi-cpu-fill nav-item-icon"></i>AI & Automation</Link>
        <MegaMenuAI ref={megaMenuAIRef} setMobileToggle={setMobileToggle} onLinkClick={() => { handleMegaMenuLinkClick(); setMobileToggle(false); megaMenuAIRef.current?.close(); }} />
      </li>
      <li className="menu-item-has-children cs-mega_menu" style={{position: 'relative', zIndex: 10001}}>
        <Link href="/data-solutions" style={{position: 'relative', zIndex: 10001}}><i className="bi bi-bar-chart-fill nav-item-icon"></i>Data Solutions</Link>
        <MegaMenuData ref={megaMenuDataRef} setMobileToggle={setMobileToggle} onLinkClick={() => { handleMegaMenuLinkClick(); setMobileToggle(false); megaMenuDataRef.current?.close(); }} />
      </li>
      <li className="menu-item-has-children cs-mega_menu" style={{position: 'relative', zIndex: 10001}}>
        <Link href="/industries" style={{position: 'relative', zIndex: 10001}}><i className="bi bi-buildings-fill nav-item-icon"></i>Industries</Link>
        <MegaMenuIndustries ref={megaMenuIndustriesRef} setMobileToggle={setMobileToggle} onLinkClick={() => { handleMegaMenuLinkClick(); setMobileToggle(false); megaMenuIndustriesRef.current?.close(); }} />
      </li>
      {/* <li className="menu-item-has-children">
        <Link href="#"><i className="bi bi-journal-bookmark-fill nav-item-icon"></i>Resources</Link>
        <DropDown>
          <ul className='p-0'>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                <i className="bi bi-newspaper nav-sub-icon"></i>Blog & Insights
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                <i className="bi bi-book nav-sub-icon"></i>Playbooks & Guides
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                <i className="bi bi-camera-video nav-sub-icon"></i>Webinars & Events
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                <i className="bi bi-calculator nav-sub-icon"></i>ROI Calculator
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      <li className="menu-item-has-children">
        <Link href="/about"><i className="bi bi-building nav-item-icon"></i>Company</Link>
        <DropDown>
          <ul className='p-0'>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                <i className="bi bi-info-circle nav-sub-icon"></i>About Us
              </Link>
            </li>
            <li>
              <Link href="/why-choose-us" onClick={() => setMobileToggle(false)}>
                <i className="bi bi-award nav-sub-icon"></i>Why Choose Us
              </Link>
            </li>
            {/* <li>
              <Link href="/careers" onClick={() => setMobileToggle(false)}>
                <i className="bi bi-briefcase nav-sub-icon"></i>Careers
              </Link>
            </li>
            <li>
              <Link href="/partners" onClick={() => setMobileToggle(false)}>
                <i className="bi bi-diagram-3 nav-sub-icon"></i>Partners & Technology
              </Link>
            </li> */}
          </ul>
        </DropDown>
      </li>

      {/* Offcanvas footer CTA — hidden on desktop via CSS */}
      <li className="offcanvas-nav-footer-li">
        <Link href="/contact" className="offcanvas-cta-btn" onClick={() => setMobileToggle(false)}>
          Book a Call
        </Link>
      </li>
    </ul>
  );
}
