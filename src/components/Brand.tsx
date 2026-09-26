import { Link } from 'react-router-dom'

// غصن سدر مبسّط: ساق وأوراق بيضاوية متقابلة
export function SidrMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" fill="currentColor">
      <path d="M20 36V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <ellipse cx="20" cy="7.5" rx="2.8" ry="4.6" />
      <ellipse cx="14" cy="15" rx="2.6" ry="4.3" transform="rotate(-50 14 15)" />
      <ellipse cx="26" cy="15" rx="2.6" ry="4.3" transform="rotate(50 26 15)" />
      <ellipse cx="14" cy="23" rx="2.6" ry="4.3" transform="rotate(-54 14 23)" />
      <ellipse cx="26" cy="23" rx="2.6" ry="4.3" transform="rotate(54 26 23)" />
      <ellipse cx="15" cy="31" rx="2.3" ry="3.8" transform="rotate(-58 15 31)" opacity=".7" />
    </svg>
  )
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" className="logo" aria-label="سِدرة — الصفحة الرئيسية" onClick={onClick}>
      <SidrMark size={26} className="logo__mark" />
      <span className="logo__ar">سِدرة</span>
      <span className="logo__sep" aria-hidden="true" />
      <span className="logo__en" lang="en">SIDRA</span>
    </Link>
  )
}

// شريط هندسي مستلهم من نقش السدو
export function SaduBand({ className = '' }: { className?: string }) {
  return (
    <div className={`sadu ${className}`} aria-hidden="true">
      <svg width="100%" height="14" preserveAspectRatio="none">
        <defs>
          <pattern id="sadu-p" width="28" height="14" patternUnits="userSpaceOnUse">
            <path d="M0 14 7 0l7 14Z" fill="currentColor" opacity=".9" />
            <path d="M14 0h14L21 14Z" fill="currentColor" opacity=".35" />
            <rect x="12.4" y="6" width="3.2" height="3.2" transform="rotate(45 14 7.6)" fill="currentColor" opacity=".6" />
          </pattern>
        </defs>
        <rect width="100%" height="14" fill="url(#sadu-p)" />
      </svg>
    </div>
  )
}
