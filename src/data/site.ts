// بيانات المقهى — استبدل القيم المؤقتة هنا فقط وستتحدث في كل الصفحات.
export const site = {
  nameAr: 'سِدرة',
  nameEn: 'SIDRA',
  tagline: 'قهوة تُحكى.',
  address: {
    line1: 'طريق أنس بن مالك، حي الملقا',
    line2: 'الرياض، المملكة العربية السعودية',
    // رابط الاتجاهات في خرائط Google — استبدله بموقع المقهى الفعلي
    mapsUrl: 'https://maps.google.com/?q=24.8065,46.6182',
  },
  phone: { display: '+966 50 000 0000', href: 'tel:+966500000000' },
  whatsapp: 'https://wa.me/966500000000',
  email: 'hello@sidra.cafe',
  hours: [
    { days: 'السبت – الخميس', daysEn: 'Saturday – Thursday', time: '7:00 ص – 12:00 م', timeEn: '7:00 AM – 12:00 AM' },
    { days: 'الجمعة', daysEn: 'Friday', time: '4:00 م – 12:00 م', timeEn: '4:00 PM – 12:00 AM' },
  ],
  social: [
    { id: 'instagram', label: 'Instagram', handle: '@sidra.cafe', href: 'https://instagram.com/' },
    { id: 'x', label: 'X', handle: '@sidracafe', href: 'https://x.com/' },
    { id: 'tiktok', label: 'TikTok', handle: '@sidra.cafe', href: 'https://tiktok.com/' },
    { id: 'snapchat', label: 'Snapchat', handle: 'sidra.cafe', href: 'https://snapchat.com/' },
  ],
} as const

export type SocialId = (typeof site.social)[number]['id']

// صور Unsplash بأحجام متعددة لتحميل أسرع
export function img(id: string, w: number, h?: number) {
  const size = h ? `&w=${w}&h=${h}` : `&w=${w}`
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=72${size}`
}

export function srcSet(id: string, widths: number[], ratio?: number) {
  return widths.map((w) => `${img(id, w, ratio ? Math.round(w * ratio) : undefined)} ${w}w`).join(', ')
}

export const photos = {
  heroHome: '1521017432531-fbd92d768814',
  heroAbout: '1445116572660-236099ec97a0',
  introPour: '1541167760496-1628856ab772',
  introBeans: '1497935586351-b67a49e012bf',
  story: '1442512595331-e89e73853f31',
  philosophy: '1611854779393-1b2da9d400fe',
  visit: '1453614512568-c4024d13c247',
  gallery: {
    exterior: '1600093463592-8e36ae95ef56',
    seating: '1554118811-1e0d58224f24',
    preparation: '1504627298434-2119d6928e93',
    machine: '1461988091159-192b6df7054f',
    cup: '1497515114629-f71d768fd07c',
    desserts: '1533134242443-d4fd215305ad',
    details: '1587734195503-904fca47e0e9',
    guests: '1495474472287-4d71bcdd2085',
    tea: '1564890369478-c89ca6d9cde9',
  },
}
