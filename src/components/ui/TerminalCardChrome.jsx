export default function TerminalCardChrome({ filePath, tabLabel }) {
  return (
    <div className="terminal-card-chrome flex items-center gap-2 px-3 py-2.5 border-b border-[var(--color-border-strong)] bg-gradient-to-r from-[var(--color-bg-muted)] to-white">
      <span className="terminal-dot terminal-dot-red" />
      <span className="terminal-dot terminal-dot-yellow" />
      <span className="terminal-dot terminal-dot-green" />
      <span className="ml-1.5 font-mono text-xs text-gray-500 truncate flex-1">
        {filePath}
      </span>
      {tabLabel && (
        <span className="font-mono text-xs text-[var(--color-accent)] hidden sm:inline shrink-0">
          {tabLabel}
        </span>
      )}
    </div>
  );
}
