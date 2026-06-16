import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import BlinkCursor from './BlinkCursor';

export default function TerminalTyping({
  text = '',
  speed = 35,
  delay = 0,
  className = '',
  showCursor = true,
  onComplete,
}) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(text);
      setDone(true);
      onComplete?.();
      return;
    }

    setDisplayed('');
    setDone(false);

    let index = 0;
    let intervalId;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(intervalId);
          setDone(true);
          onComplete?.();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, delay, prefersReducedMotion, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && !done && <BlinkCursor />}
      {showCursor && done && <BlinkCursor />}
    </span>
  );
}
