export type CategoryId = 'hot' | 'cold' | 'drinks' | 'desserts' | 'addons'

export const categories: { id: CategoryId | 'all'; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'hot', label: 'قهوة ساخنة' },
  { id: 'cold', label: 'قهوة باردة' },
  { id: 'drinks', label: 'مشروبات' },
  { id: 'desserts', label: 'حلويات' },
  { id: 'addons', label: 'إضافات' },
]

export interface MenuItem {
  id: string
  category: CategoryId
  nameAr: string
  nameEn: string
  description: string
  price: number
  photo: string
  popular?: boolean
  featured?: boolean
}

export const menu: MenuItem[] = [
  // قهوة ساخنة
  { id: 'espresso', category: 'hot', nameAr: 'إسبريسو', nameEn: 'Espresso', description: 'جرعة مركّزة من محصول الموسم، بقوام كثيف ونهاية شوكولاتية.', price: 12, photo: '1510591509098-f4fdc6d0ff04' },
  { id: 'americano', category: 'hot', nameAr: 'أمريكانو', nameEn: 'Americano', description: 'إسبريسو مزدوج مع ماء ساخن، واضح وخفيف.', price: 14, photo: '1611162458324-aae1eb4129a4' },
  { id: 'latte', category: 'hot', nameAr: 'لاتيه', nameEn: 'Latte', description: 'إسبريسو وحليب مُبخّر برغوة ناعمة.', price: 18, photo: '1570968915860-54d5c301fa9f' },
  { id: 'cappuccino', category: 'hot', nameAr: 'كابتشينو', nameEn: 'Cappuccino', description: 'توازن كلاسيكي بين الإسبريسو والحليب والرغوة.', price: 17, photo: '1572442388796-11668a67e53d' },
  { id: 'signature-latte', category: 'hot', nameAr: 'لاتيه سِدرة', nameEn: 'Signature Latte', description: 'لاتيه بلمسة هيل وزعفران، وصفتنا الخاصة.', price: 22, photo: '1534778101976-62847782c213', popular: true, featured: true },
  { id: 'spanish-latte', category: 'hot', nameAr: 'سبانش لاتيه', nameEn: 'Spanish Latte', description: 'إسبريسو مع حليب مكثّف محلّى، دافئ وغني.', price: 20, photo: '1559496417-e7f25cb247f3' },
  // قهوة باردة
  { id: 'iced-americano', category: 'cold', nameAr: 'آيس أمريكانو', nameEn: 'Iced Americano', description: 'إسبريسو مزدوج على ثلج وماء بارد، مع شريحة ليمون عند الطلب.', price: 15, photo: '1556679343-c7306c1976bc' },
  { id: 'iced-latte', category: 'cold', nameAr: 'آيس لاتيه', nameEn: 'Iced Latte', description: 'إسبريسو وحليب بارد على الثلج.', price: 19, photo: '1592663527359-cf6642f54cff' },
  { id: 'iced-spanish-latte', category: 'cold', nameAr: 'آيس سبانش لاتيه', nameEn: 'Iced Spanish Latte', description: 'طبقات من الحليب المكثّف والإسبريسو على الثلج.', price: 21, photo: '1461023058943-07fcbe16d735', popular: true, featured: true },
  { id: 'cold-brew', category: 'cold', nameAr: 'كولد برو', nameEn: 'Cold Brew', description: 'منقوع ببطء لمدة 18 ساعة، ناعم وقليل الحموضة.', price: 19, photo: '1517959105821-eaf2591984ca', featured: true },
  // مشروبات
  { id: 'matcha', category: 'drinks', nameAr: 'ماتشا', nameEn: 'Matcha', description: 'ماتشا ياباني فاخر مخفوق يدويًا مع حليب حسب اختيارك.', price: 22, photo: '1515823064-d6e0c04616a7', popular: true, featured: true },
  { id: 'tea', category: 'drinks', nameAr: 'شاي', nameEn: 'Tea', description: 'شاي أحمر بالنعناع أو الحبق، يُقدّم في إبريق.', price: 12, photo: '1571934811356-5cc061b6821f' },
  { id: 'mojito', category: 'drinks', nameAr: 'موهيتو', nameEn: 'Mojito', description: 'ليمون ونعناع طازج مع صودا باردة.', price: 18, photo: '1513558161293-cdaf765ed2fd' },
  { id: 'sidra-lemonade', category: 'drinks', nameAr: 'ليمونادة سِدرة', nameEn: 'Sidra Lemonade', description: 'مشروب سِدرة الخاص: ليمون وعسل سدر ونعناع.', price: 17, photo: '1556881286-fc6915169721' },
  { id: 'hibiscus', category: 'drinks', nameAr: 'كركديه بارد', nameEn: 'Hibiscus Cooler', description: 'كركديه منقوع مع برتقال وقليل من ماء الورد.', price: 19, photo: '1551024709-8f23befc6f87' },
  // حلويات
  { id: 'cheesecake', category: 'desserts', nameAr: 'تشيز كيك', nameEn: 'Cheesecake', description: 'تشيز كيك مخبوز بقوام كريمي وصوص توت.', price: 26, photo: '1524351199678-941a58a3df50', popular: true },
  { id: 'brownie', category: 'desserts', nameAr: 'براوني', nameEn: 'Brownie', description: 'براوني شوكولاتة داكنة بقلب طري.', price: 16, photo: '1606313564200-e75d5e30476c' },
  { id: 'cookies', category: 'desserts', nameAr: 'كوكيز', nameEn: 'Cookies', description: 'كوكيز بالشوكولاتة يُخبز يوميًا.', price: 12, photo: '1499636136210-6f4ee915583e' },
  { id: 'croissant', category: 'desserts', nameAr: 'كرواسون', nameEn: 'Croissant', description: 'كرواسون بالزبدة، هشّ وطازج كل صباح.', price: 14, photo: '1555507036-ab1f4038808a' },
  // إضافات
  { id: 'extra-shot', category: 'addons', nameAr: 'شوت إضافي', nameEn: 'Extra Shot', description: 'جرعة إسبريسو إضافية لأي مشروب.', price: 4, photo: '1511920170033-f8396924c348' },
  { id: 'oat-milk', category: 'addons', nameAr: 'حليب الشوفان', nameEn: 'Oat Milk', description: 'بديل نباتي بقوام كريمي.', price: 4, photo: '1600788907416-456578634209' },
  { id: 'vanilla', category: 'addons', nameAr: 'فانيلا', nameEn: 'Vanilla', description: 'شراب فانيلا طبيعي.', price: 3, photo: '1558642452-9d2a7deb7f62' },
  { id: 'caramel', category: 'addons', nameAr: 'كراميل', nameEn: 'Caramel', description: 'كراميل محضّر في سِدرة.', price: 3, photo: '1582176604856-e824b4736522' },
]

export const featuredIds = ['signature-latte', 'iced-spanish-latte', 'cold-brew', 'matcha']
