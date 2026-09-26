import type { CSSProperties } from 'react'
import type { MenuItem } from '../data/menu'
import Photo from './Photo'

export function Price({ value }: { value: number }) {
  return (
    <span className="price">
      <span className="price__num" lang="en">{value}</span>
      <span className="price__cur">ر.س</span>
    </span>
  )
}

interface Props {
  item: MenuItem
  size?: 'lg' | 'md'
  style?: CSSProperties
  className?: string
}

export default function ProductCard({ item, size = 'md', style, className = '' }: Props) {
  return (
    <article className={`card card--${size} ${className}`} style={style}>
      <div className="card__media">
        <Photo
          id={item.photo}
          alt={`${item.nameAr} — ${item.nameEn}`}
          ratio={size === 'lg' ? 1.25 : 1}
          widths={[360, 560, 760]}
          sizes="(min-width: 1100px) 25vw, (min-width: 640px) 45vw, 90vw"
        />
        {item.popular && <span className="badge">الأكثر طلبًا</span>}
      </div>
      <div className="card__body">
        <div className="card__head">
          <div>
            <h3 className="card__title">{item.nameAr}</h3>
            <p className="card__en" lang="en">{item.nameEn}</p>
          </div>
          <Price value={item.price} />
        </div>
        <p className="card__desc">{item.description}</p>
      </div>
    </article>
  )
}
