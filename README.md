# سِدرة | SIDRA

موقع مقهى سِدرة — قهوة تُحكى. (React + Vite + TypeScript، بدون مكتبات تصميم خارجية)

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # ينتج مجلد dist
```

## أين أعدّل؟
- **العنوان، الهاتف، أوقات العمل، حسابات التواصل، رابط الخرائط:** `src/data/site.ts`
- **المنيو والأسعار والصور وشارة «الأكثر طلبًا»:** `src/data/menu.ts`
- **الصور:** معرّفات Unsplash في `src/data/site.ts` و`src/data/menu.ts` — استبدلها بصور المقهى الفعلية.
- **الألوان والخطوط:** المتغيرات أعلى `src/index.css`.

الصفحات: `/` الرئيسية · `/about` عن سِدرة · `/menu` المنيو · `/visit` الموقع والتواصل.
جاهز للنشر على Vercel (`vercel.json` يعيد توجيه كل المسارات إلى `index.html`).

## الترخيص
ملكية خاصة — جميع الحقوق محفوظة لفهد العنزي (Fahad Alanazi). راجع [LICENSE](LICENSE).
