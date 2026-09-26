import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Brand'
import { IconClose, IconMenu } from './Icons'
import { site } from '../data/site'

export const navItems = [
  { to: '/', label: 'الرئيسية', en: 'Home' },
  { to: '/about', label: 'عن سِدرة', en: 'About' },
  { to: '/menu', label: 'المنيو', en: 'Menu' },
  { to: '/visit', label: 'الموقع والتواصل', en: 'Visit' },
]

// الصفحات التي تبدأ بصورة كاملة؛ الشريط فيها شفاف حتى يبدأ التمرير
const overlayRoutes = ['/', '/about']

export default function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const overlay = overlayRoutes.includes(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = !overlay || scrolled || open
  return (
    <header className={`nav ${solid ? 'nav--solid' : 'nav--overlay'} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <Logo />
        <nav className="nav__links" aria-label="التنقل الرئيسي">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} end className="nav__link">
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav__actions">
          <Link to="/menu" className="btn btn--sm btn--primary nav__cta">
            استعرض المنيو
          </Link>
          <button
            className="nav__toggle"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconClose width={24} height={24} /> : <IconMenu width={24} height={24} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="drawer" hidden={!open}>
        <nav className="drawer__links container" aria-label="قائمة الجوال">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} end className="drawer__link">
              <span>{n.label}</span>
              <span className="drawer__en" lang="en">{n.en}</span>
            </NavLink>
          ))}
        </nav>
        <div className="drawer__foot container">
          <Link to="/menu" className="btn btn--primary btn--block">استعرض المنيو</Link>
          <p className="drawer__meta">
            {site.hours[0].days} · <span lang="en" dir="ltr">{site.hours[0].timeEn}</span>
          </p>
        </div>
      </div>
    </header>
  )
}
