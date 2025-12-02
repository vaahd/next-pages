'use client'

export default function Skeleton({
  height = 200,
  width = '100%',
  className = ''
}: {
  height?: number
  width?: string
  className?: string
}) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 8,
        background: '#e2e2e2'
      }}
    >
      <div className="shimmer"></div>

      <style jsx>{`
        .shimmer {
          position: absolute;
          top: 0;
          left: -150%;
          height: 100%;
          width: 150%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(150%);
          }
        }
      `}</style>
    </div>
  )
}