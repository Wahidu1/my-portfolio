export default function BlinkCursor({ className = '' }) {
  return (
    <span
      className={`inline-block w-[0.55em] h-[1em] bg-[var(--color-accent)] align-middle ml-0.5 animate-blink-cursor ${className}`}
      aria-hidden="true"
    />
  );
}
