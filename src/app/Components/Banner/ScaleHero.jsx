import Link from 'next/link';
import Image from 'next/image';

const ScaleHero = ({
    tagline,
    taglineSup,
    subtitle,
    description,
    btn1Text,
    btn1Link,
    btn2Text,
    btn2Link,
    heroImage,
    imageAlt,
}) => {
    return (
        <section className="scale-hero-area">
            <div className="scale-hero-bg-pattern" aria-hidden="true" />

            <div className="scale-hero-content-wrap">
                <div className="scale-hero-text">
                    <h2 className="scale-hero-tagline">
                        {tagline}
                        {taglineSup && <sup>{taglineSup}</sup>}
                    </h2>
                    <h2 className="scale-hero-subtitle">{subtitle}</h2>
                    <p className="scale-hero-desc">{description}</p>
                    <div className="scale-hero-btns">
                        <Link href={btn1Link} className="scale-hero-btn-primary">
                            {btn1Text}
                        </Link>
                        <Link href={btn2Link} className="scale-hero-btn-outline">
                            {btn2Text}
                        </Link>
                    </div>
                </div>

                <div className="scale-hero-image-wrap">
                    <div className="scale-hero-image-clip">
                        <Image
                            src={heroImage}
                            alt={imageAlt || 'hero image'}
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScaleHero;
