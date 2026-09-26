import { useMemo, useRef, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { SidrMark } from '../components/Brand'
import { categories, menu, type CategoryId } from '../data/menu'

type Filter = CategoryId | 'all'

export default function Menu() {
  const [active, setActive] = useState<Filter>('all')
  // مفتاح يتغير مع كل تبديل ليعيد تشغيل حركة الظهور
  const [round, setRound] = useState(0)
  const tabsRef = useRef<HTMLDivElement>(null)

  const items = useMemo(() => (active === 'all' ? menu : menu.filter((m) => m.category === active)), [active])

  const select = (id: Filter) => {
    if (id === active) return
    setActive(id)
    setRound((r) => r + 1)
    const top = tabsRef.current?.getBoundingClientRect().top ?? 0
    if (top < 60) tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const dir = e.key === 'ArrowLeft' ? 1 : e.key === 'ArrowRight' ? -1 : 0 // RTL
    if (!dir) return
    e.preventDefault()
    const next = (index + dir + categories.length) % categories.length
    select(categories[next].id)
    const btn = tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]
    btn?.focus()
  }

  return (
    <>
      <section className="menu-hero" aria-labelledby="menu-title">
        <div className="container menu-hero__inner">
          <SidrMark size={260} className="menu-hero__mark" />
          <p className="eyebrow" lang="en"><SidrMark size={16} /> The Menu</p>
          <h1 className="menu-hero__title" id="menu-title">المنيو</h1>
          <p className="menu-hero__sub">اختر ما يناسب لحظتك.</p>
        </div>
      </section>

      <section className="section section--tight menu" aria-label="قائمة المشروبات والحلويات">
        <div className="tabs-wrap" ref={tabsRef}>
          <div className="container">
            <div className="tabs" role="tablist" aria-label="تصنيفات المنيو">
              {categories.map((c, i) => (
                <button
                  key={c.id}
                  role="tab"
                  id={`tab-${c.id}`}
                  aria-selected={active === c.id}
                  aria-controls="menu-panel"
                  tabIndex={active === c.id ? 0 : -1}
                  className="tab"
                  onClick={() => select(c.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  {c.label}
                  <span className="tab__count" lang="en">
                    {c.id === 'all' ? menu.length : menu.filter((m) => m.category === c.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="menu__grid" key={round}>
            {items.map((item, i) => (
              <ProductCard
                key={item.id}
                item={item}
                className="card--enter"
                style={{ animationDelay: `${Math.min(i, 10) * 45}ms` }}
              />
            ))}
          </div>
          <p className="menu__note">
            الأسعار بالريال السعودي وشاملة ضريبة القيمة المضافة. خيارات الحليب النباتي متوفرة لجميع المشروبات.
          </p>
        </div>
      </section>
    </>
  )
}
