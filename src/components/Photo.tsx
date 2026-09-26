import { img, srcSet } from '../data/site'

interface Props {
  id: string
  alt: string
  /** نسبة الارتفاع إلى العرض للقص */
  ratio?: number
  widths?: number[]
  sizes?: string
  eager?: boolean
  className?: string
}

export default function Photo({ id, alt, ratio, widths = [480, 800, 1200], sizes = '100vw', eager, className }: Props) {
  const w = widths[widths.length - 1]
  return (
    <img
      className={className}
      src={img(id, w, ratio ? Math.round(w * ratio) : undefined)}
      srcSet={srcSet(id, widths, ratio)}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      width={w}
      height={ratio ? Math.round(w * ratio) : undefined}
      onLoad={(e) => e.currentTarget.classList.add('is-loaded')}
    />
  )
}
