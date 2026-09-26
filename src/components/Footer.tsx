import { Link } from 'react-router-dom'
import { SaduBand, SidrMark } from './Brand'
import { socialIcons } from './Icons'
import { navItems } from './Header'
import { site } from '../data/site'

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`social ${className}`}>
      {site.social.map((s) => {
        const Icon = socialIcons[s.id]
        return (
          <li key={s.id}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} ${s.handle}`}>
              <Icon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <SaduBand className="footer__sadu" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <SidrMark size={40} className="footer__mark" />
          <p className="footer__name">
            سِدرة <span aria-hidden="true">|</span> <span lang="en">SIDRA</span>
          </p>
          <p className="footer__tag">{site.tagline}</p>
          <SocialLinks />
        </div>

        <nav className="footer__col" aria-label="روابط التذييل">
          <h2 className="footer__h">تصفّح</h2>
          <ul>
            {navItems.map((n) => (
              <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__h">الموقع</h2>
          <address>
            {site.address.line1}
            <br />
            {site.address.line2}
          </address>
          <a className="footer__link" href={site.phone.href} dir="ltr">{site.phone.display}</a>
        </div>

        <div className="footer__col">
          <h2 className="footer__h">أوقات العمل</h2>
          <dl className="footer__hours">
            {site.hours.map((h) => (
              <div key={h.days}>
                <dt>{h.days}</dt>
                <dd lang="en" dir="ltr">{h.timeEn}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="container footer__bottom">
        <p lang="en" dir="ltr">© 2026 SIDRA Café. All Rights Reserved.</p>
        <p>صُنع بعناية في الرياض</p>
      </div>
    </footer>
  )
}
