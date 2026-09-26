import type { ReactNode } from 'react'

interface Props {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: 'start' | 'center'
  id?: string
}

export default function SectionHead({ eyebrow, title, lead, align = 'start', id }: Props) {
  return (
    <header className={`shead shead--${align}`} data-reveal>
      {eyebrow && <p className="eyebrow" lang="en">{eyebrow}</p>}
      <h2 className="shead__title" id={id}>{title}</h2>
      {lead && <p className="shead__lead">{lead}</p>}
    </header>
  )
}
