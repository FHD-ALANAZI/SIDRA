import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const base = (p: P): P => ({
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  ...p,
})

export const IconPin = (p: P) => (
  <svg {...base(p)}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
)
export const IconClock = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
)
export const IconPhone = (p: P) => (
  <svg {...base(p)}><path d="M5 4h3.5l1.6 4-2.2 1.4a11 11 0 0 0 6.7 6.7l1.4-2.2 4 1.6V19a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" /></svg>
)
export const IconChat = (p: P) => (
  <svg {...base(p)}><path d="M4.5 18.5 5.6 15A7.5 7.5 0 1 1 9 18.4Z" /></svg>
)
export const IconArrow = (p: P) => (
  // سهم يشير لليسار — اتجاه التقدّم في الواجهة العربية
  <svg {...base(p)}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
)
export const IconNavigate = (p: P) => (
  <svg {...base(p)}><path d="m3.5 11 17-7.5-7.5 17-2-7.5Z" /></svg>
)
export const IconMenu = (p: P) => (
  <svg {...base(p)}><path d="M4 8h16M4 16h16" /></svg>
)
export const IconClose = (p: P) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const IconPlus = (p: P) => (
  <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>
)
export const IconMinus = (p: P) => (
  <svg {...base(p)}><path d="M5 12h14" /></svg>
)
export const IconSocial = (p: P) => (
  <svg {...base(p)}><rect x="6.5" y="3" width="11" height="18" rx="2.5" /><path d="M11 18h2" /></svg>
)

export const IconInstagram = (p: P) => (
  <svg {...base(p)}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></svg>
)
export const IconX = (p: P) => (
  <svg {...base(p)}><path d="M4.5 4h4L19.5 20h-4Z" /><path d="M19 4l-6 6.8M5 20l6-6.8" /></svg>
)
export const IconTiktok = (p: P) => (
  <svg {...base(p)}><path d="M14 3.5v11.3a3.7 3.7 0 1 1-3.7-3.7" /><path d="M14 3.5c.4 2.6 2.2 4.4 5 4.6" /></svg>
)
export const IconSnapchat = (p: P) => (
  <svg {...base(p)}><path d="M12 3.5c-3 0-5 2.2-5 5.2v2l-1.8.7c.4 1 1.3 1.3 2 1.4-.6 1.6-1.8 2.9-3.4 3.5.5.8 1.6.9 2.6 1 .2.8.3 1.3.8 1.3.8 0 1.6-.5 2.8-.1 1 .4 1.3 1 2 1s1-.6 2-1c1.2-.4 2 .1 2.8.1.5 0 .6-.5.8-1.3 1-.1 2.1-.2 2.6-1-1.6-.6-2.8-1.9-3.4-3.5.7-.1 1.6-.4 2-1.4L17 10.7v-2c0-3-2-5.2-5-5.2Z" /></svg>
)

export const socialIcons = {
  instagram: IconInstagram,
  x: IconX,
  tiktok: IconTiktok,
  snapchat: IconSnapchat,
}
