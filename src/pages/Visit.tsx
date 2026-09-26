import { useState } from 'react'
import { SidrMark } from '../components/Brand'
import { SocialLinks } from '../components/Footer'
import { IconChat, IconClock, IconMinus, IconNavigate, IconPhone, IconPin, IconPlus, IconSocial } from '../components/Icons'
import { site } from '../data/site'

// خريطة توضيحية بأسلوب الهوية؛ الاتجاهات الفعلية عبر رابط خرائط Google
function StyledMap() {
  const [zoom, setZoom] = useState(1)
  return (
    <div className="map" role="img" aria-label={`خريطة توضيحية لموقع سِدرة: ${site.address.line1}، الرياض`}>
      <div className="map__canvas" style={{ transform: `scale(${zoom})` }}>
        <svg viewBox="0 0 800 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="800" height="560" fill="var(--map-land)" />
          {/* أحياء */}
          <g fill="var(--map-block)">
            <rect x="40" y="40" width="190" height="120" rx="6" />
            <rect x="260" y="40" width="150" height="120" rx="6" />
            <rect x="40" y="200" width="120" height="150" rx="6" />
            <rect x="470" y="30" width="140" height="170" rx="6" />
            <rect x="640" y="30" width="140" height="110" rx="6" />
            <rect x="200" y="210" width="180" height="140" rx="6" />
            <rect x="470" y="250" width="110" height="110" rx="6" />
            <rect x="620" y="180" width="160" height="180" rx="6" />
            <rect x="40" y="400" width="210" height="130" rx="6" />
            <rect x="290" y="400" width="150" height="130" rx="6" />
            <rect x="480" y="410" width="300" height="120" rx="6" />
          </g>
          {/* حديقة */}
          <path d="M620 180h160v180H620Z" fill="var(--map-park)" />
          <g fill="var(--olive)" opacity=".35">
            <circle cx="660" cy="220" r="10" /><circle cx="700" cy="250" r="14" /><circle cx="745" cy="215" r="9" />
            <circle cx="680" cy="310" r="12" /><circle cx="740" cy="320" r="10" />
          </g>
          {/* طرق */}
          <g stroke="var(--map-road)" strokeLinecap="round" fill="none">
            <path d="M0 180H800" strokeWidth="22" />
            <path d="M440 0V560" strokeWidth="26" />
            <path d="M0 380H800" strokeWidth="14" />
            <path d="M180 170V560" strokeWidth="12" />
            <path d="M600 0V400" strokeWidth="10" />
            <path d="M0 520 C200 470 300 560 800 470" strokeWidth="8" />
          </g>
          <g fill="var(--muted)" fontFamily="IBM Plex Sans Arabic, sans-serif" fontSize="15">
            <text x="300" y="173">طريق أنس بن مالك</text>
            <text x="452" y="120" transform="rotate(90 452 120)">طريق الملك فهد</text>
            <text x="665" y="375" fontSize="13">حديقة الحي</text>
          </g>
        </svg>
        <div className="map__pin" style={{ left: '55%', top: '32%' }}>
          <span className="map__pulse" />
          <span className="map__dot"><SidrMark size={20} /></span>
          <span className="map__label">سِدرة <span lang="en">SIDRA</span></span>
        </div>
      </div>
      <div className="map__controls">
        <button aria-label="تكبير" onClick={() => setZoom((z) => Math.min(1.6, z + 0.2))}><IconPlus /></button>
        <button aria-label="تصغير" onClick={() => setZoom((z) => Math.max(1, z - 0.2))}><IconMinus /></button>
      </div>
      <a className="map__open" href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer">
        افتح في الخرائط <IconNavigate width={16} height={16} />
      </a>
    </div>
  )
}

export default function Visit() {
  return (
    <>
      <section className="menu-hero visit-hero" aria-labelledby="visit-title">
        <div className="container menu-hero__inner">
          <SidrMark size={260} className="menu-hero__mark" />
          <p className="eyebrow" lang="en"><SidrMark size={16} /> Location & Contact</p>
          <h1 className="menu-hero__title" id="visit-title">تعال واجلس قليلًا.</h1>
          <p className="menu-hero__sub">نحن في قلب الرياض، وبابنا مفتوح من الصباح حتى منتصف الليل.</p>
        </div>
      </section>

      <section className="section section--tight visit">
        <div className="container visit__grid">
          <div className="visit__map" data-reveal>
            <StyledMap />
          </div>

          <div className="visit__info">
            <div className="info-card" data-reveal>
              <span className="info-card__icon"><IconPin /></span>
              <div>
                <h2 className="info-card__title">الموقع <span lang="en">Location</span></h2>
                <address>{site.address.line1}<br />{site.address.line2}</address>
              </div>
            </div>

            <div className="info-card" data-reveal>
              <span className="info-card__icon"><IconClock /></span>
              <div className="info-card__grow">
                <h2 className="info-card__title">أوقات العمل <span lang="en">Opening Hours</span></h2>
                <dl className="hours">
                  {site.hours.map((h) => (
                    <div key={h.days} className="hours__row">
                      <dt>{h.days}<span lang="en">{h.daysEn}</span></dt>
                      <dd lang="en" dir="ltr">{h.timeEn}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="info-card" data-reveal>
              <span className="info-card__icon"><IconPhone /></span>
              <div>
                <h2 className="info-card__title">الهاتف <span lang="en">Phone</span></h2>
                <a href={site.phone.href} dir="ltr" className="info-card__link">{site.phone.display}</a>
                <a href={`mailto:${site.email}`} className="info-card__link info-card__link--sub" lang="en">{site.email}</a>
              </div>
            </div>

            <div className="info-card" data-reveal>
              <span className="info-card__icon"><IconSocial /></span>
              <div>
                <h2 className="info-card__title">تابعنا <span lang="en">Social Media</span></h2>
                <p className="info-card__handle" lang="en" dir="ltr">@sidra.cafe</p>
                <SocialLinks className="social--dark" />
              </div>
            </div>

            <div className="btn-row" data-reveal>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <IconNavigate width={18} height={18} /> احصل على الاتجاهات
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                <IconChat width={18} height={18} /> تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
