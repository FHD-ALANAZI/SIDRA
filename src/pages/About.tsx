import Photo from '../components/Photo'
import SectionHead from '../components/SectionHead'
import { SaduBand, SidrMark } from '../components/Brand'
import { photos, site } from '../data/site'

const principles = [
  { n: '01', title: 'الجودة', en: 'Quality', text: 'قهوة مختارة بعناية.' },
  { n: '02', title: 'البساطة', en: 'Simplicity', text: 'تجربة واضحة ومريحة.' },
  { n: '03', title: 'الضيافة', en: 'Hospitality', text: 'روح سعودية في كل التفاصيل.' },
]

// ترتيب تحريري غير متماثل؛ كل صورة لها مساحتها في الشبكة
const gallery = [
  { id: photos.gallery.exterior, alt: 'واجهة سِدرة الخارجية بين النباتات', cap: 'الواجهة', cls: 'g-a' },
  { id: photos.gallery.seating, alt: 'جلسات داخلية بإضاءة طبيعية', cap: 'الجلسات', cls: 'g-b' },
  { id: photos.gallery.preparation, alt: 'تحضير قهوة مقطّرة', cap: 'التحضير', cls: 'g-c' },
  { id: photos.gallery.machine, alt: 'آلة الإسبريسو', cap: 'آلة الإسبريسو', cls: 'g-d' },
  { id: photos.gallery.cup, alt: 'فنجان قهوة يتصاعد منه البخار', cap: 'الفنجان', cls: 'g-e' },
  { id: photos.gallery.desserts, alt: 'تشيز كيك بالتوت', cap: 'الحلويات', cls: 'g-f' },
  { id: photos.gallery.details, alt: 'حبوب قهوة عن قرب', cap: 'التفاصيل', cls: 'g-g' },
  { id: photos.gallery.guests, alt: 'ضيوف يتشاركون القهوة', cap: 'اللقاءات', cls: 'g-h' },
  { id: photos.gallery.tea, alt: 'إبريق شاي وأكواب على صينية خشبية', cap: 'الضيافة', cls: 'g-i' },
]

export default function About() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-title">
        <Photo id={photos.heroAbout} alt="" eager widths={[800, 1400, 2000]} className="page-hero__img" />
        <div className="page-hero__content container">
          <p className="hero__eyebrow" lang="en"><SidrMark size={18} /> About Sidra</p>
          <h1 className="page-hero__title" id="about-title">عن سِدرة</h1>
          <p className="page-hero__sub">{site.tagline}</p>
        </div>
      </section>

      {/* STORY */}
      <section className="section story" id="story" aria-labelledby="story-title">
        <div className="container story__grid">
          <figure className="story__media" data-reveal>
            <Photo id={photos.story} alt="باريستا يحضّر القهوة المقطّرة" ratio={1.3} widths={[480, 800, 1100]} sizes="(min-width: 900px) 46vw, 92vw" />
            <figcaption lang="en">Hand-poured, slowly.</figcaption>
          </figure>
          <div className="story__text">
            <SectionHead eyebrow="Our Story" title={<span id="story-title">قصتنا</span>} />
            <div className="prose" data-reveal>
              <p>
                بدأت سِدرة من فكرة بسيطة: أن تكون القهوة أكثر من مجرد مشروب؛ أن تكون لحظة تتوقف فيها قليلًا عن سرعة
                اليوم، وتستمتع بتفاصيل صغيرة صُنعت بعناية.
              </p>
              <p>
                اخترنا اسم سِدرة ارتباطًا بجذورنا وبيئتنا المحلية، وصممنا المكان ليجمع بين روح الضيافة السعودية
                والتصميم المعاصر.
              </p>
            </div>
            <SaduBand className="story__sadu" />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section section--sand philosophy" aria-labelledby="philo-title">
        <div className="container">
          <div className="philosophy__top">
            <div>
              <SectionHead eyebrow="Philosophy" title={<span id="philo-title">فلسفة المكان</span>} />
              <p className="philosophy__highlight" data-reveal>التفاصيل الصغيرة تصنع التجربة.</p>
              <p className="prose" data-reveal>
                من اختيار حبوب القهوة، إلى طريقة تحضيرها، إلى الإضاءة والموسيقى والمكان الذي تجلس فيه؛ كل تفصيل في
                سِدرة له هدف واحد: أن يمنحك لحظة تستحق أن تتذكرها.
              </p>
            </div>
            <figure className="philosophy__media" data-reveal>
              <Photo id={photos.philosophy} alt="كيس حبوب قهوة ومطحنة وكوب" ratio={0.8} widths={[480, 800, 1000]} sizes="(min-width: 900px) 44vw, 92vw" />
            </figure>
          </div>
          <ol className="principles">
            {principles.map((p, i) => (
              <li key={p.n} className="principle" data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="principle__n" lang="en">{p.n}</span>
                <h3 className="principle__title">{p.title}</h3>
                <p className="principle__en" lang="en">{p.en}</p>
                <p className="principle__text">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section gallery" aria-labelledby="gallery-title">
        <div className="container">
          <SectionHead eyebrow="Moments" title={<span id="gallery-title">لحظات من سِدرة</span>} align="center" />
          <div className="gallery__grid">
            {gallery.map((g, i) => (
              <figure key={g.id} className={`gallery__item ${g.cls}`} data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <Photo id={g.id} alt={g.alt} widths={[400, 700, 1000]} sizes="(min-width: 900px) 40vw, 90vw" />
                <figcaption>{g.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
