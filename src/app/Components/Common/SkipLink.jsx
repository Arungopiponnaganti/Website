'use client';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="visually-hidden-focusable"
      style={{
        position: 'absolute',
        top: '-40px',
        left: 0,
        zIndex: 9999,
        padding: '8px 16px',
        background: '#ff3b00',
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 600,
        transition: 'top 0.2s',
      }}
      onFocus={(e) => (e.currentTarget.style.top = '0')}
      onBlur={(e) => (e.currentTarget.style.top = '-40px')}
    >
      Skip to main content
    </a>
  );
}
