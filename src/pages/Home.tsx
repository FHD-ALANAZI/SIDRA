import { Link } from 'react-router-dom'
import Photo from '../components/Photo'
import ProductCard from '../components/ProductCard'
import SectionHead from '../components/SectionHead'
import { SaduBand, SidrMark } from '../components/Brand'
import { IconArrow, IconClock, IconPin } from '../components/Icons'
import { featuredIds, menu } from '../data/menu'
import { photos, site } from '../data/site'

const featured = featuredIds.map((id) => menu.find((m) => m.id === id)!)

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bg">
          <Photo id={photos.heroHome} alt="" eager widths={[800, 1400, 2000]} className="hero__img" />
        </div>
        <div className="hero__content container">
          <p className="hero__eyebrow" lang="en">
            <SidrMark size={18} /> Saudi Contemporary Café · Riyadh
          </p>
          <h1 className="hero__title" id="hero-title">
            سِدرة
            <span className="visually-hidden"> | SIDRA</span>
          </h1>
          <p className="hero__tagline">{site.tagline}</p>
          <p className="hero__lead">مساحة هادئة للقهوة، اللقاءات، واللحظات التي تستحق أن تُعاش على مهل.</p>
          <div className="hero__ctas">
            <Link to="/menu" className="btn btn--light">استعرض المنيو</Link>
            <Link to="/about" className="btn btn--ghost-light">اكتشف سِدرة</Link>
          </div>
        </div>
        <a href="#intro" className="hero__scroll" aria-label="انتقل إلى المحتوى">
          <span className="hero__scroll-line" />
          <span lang="en">Scroll</span>
        </a>
      </section>

      {/* INTRO */}
      <section className="section intro" id="intro">
        <div className="container intro__grid">
          <div className="intro__text">
            <SectionHead eyebrow="More than a cup" title="أكثر من فنجان قهوة" />
            <p className="prose" data-reveal>
              في سِدرة، نؤمن أن القهوة ليست مجرد مشروب، بل لحظة تتوقف فيها قليلًا عن سرعة اليوم. اخترنا تفاصيل
              المكان بعناية لنمنحك تجربة تجمع بين جودة القهوة وروح الضيافة السعودية.
            </p>
            <Link to="/about#story" className="link-arrow" data-reveal>
              قصتنا <IconArrow />
            </Link>
          </div>
          <div className="intro__media">
            <figure className="intro__main" data-reveal>
              <Photo id={photos.introPour} alt="باريستا يرسم على اللاتيه" ratio={1.25} widths={[480, 760, 1000]} sizes="(min-width: 900px) 34vw, 80vw" />
            </figure>
            <figure className="intro__small" data-reveal style={{ transitionDelay: '120ms' }}>
              <Photo id={photos.introBeans} alt="حبوب قهوة مختصة وأدوات التحضير" ratio={1.1} widths={[320, 520]} sizes="(min-width: 900px) 18vw, 40vw" />
            </figure>
            <p className="intro__caption" lang="en" data-reveal>Est. 2026 — Riyadh</p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section section--sand featured" aria-labelledby="featured-title">
        <div className="container">
          <div className="featured__head">
            <SectionHead eyebrow="Sidra Selection" title={<span id="featured-title">مختارات سِدرة</span>} lead="أربعة أكواب نحبها، ونظن أنك ستحبها أيضًا." />
            <Link to="/menu" className="link-arrow featured__all" data-reveal>
              عرض المنيو الكامل <IconArrow />
            </Link>
          </div>
          <div className="featured__grid">
            {featured.map((item, i) => (
              <div key={item.id} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                <ProductCard item={item} size="lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section quote" aria-label="من روح سِدرة">
        <div className="container quote__inner" data-reveal>
          <SidrMark size={36} className="quote__mark" />
          <blockquote>
            <p>السِّدرة شجرة الظلّ والكرم في أرضنا. <br className="br-md" />تحتها كان الناس يجلسون ويتحدثون… ونحن نكمل الحكاية بفنجان.</p>
          </blockquote>
          <SaduBand className="quote__sadu" />
        </div>
      </section>

      {/* VISIT TEASER */}
      <section className="visit-teaser" aria-labelledby="visit-teaser-title">
        <div className="visit-teaser__media">
          <Photo id={photos.visit} alt="ركن التحضير في سِدرة" widths={[640, 1000, 1400]} sizes="(min-width: 900px) 50vw, 100vw" />
        </div>
        <div className="visit-teaser__body" data-reveal>
          <p className="eyebrow" lang="en">Visit us</p>
          <h2 className="shead__title" id="visit-teaser-title">تعال واجلس قليلًا.</h2>
          <ul className="meta-list">
            <li><IconPin /> <span>{site.address.line1}، الرياض</span></li>
            {site.hours.map((h) => (
              <li key={h.days}><IconClock /> <span>{h.days}: <span lang="en" dir="ltr">{h.timeEn}</span></span></li>
            ))}
          </ul>
          <div className="btn-row">
            <Link to="/visit" className="btn btn--primary">الموقع والتواصل</Link>
            <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">احصل على الاتجاهات</a>
          </div>
        </div>
      </section>
    </>
  )
}
