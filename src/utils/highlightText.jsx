import React from "react";

export function highlightText(text, words) {
  if (!text) return "";
  if (!words) return text;

  let wordsArray = Array.isArray(words) ? words : words;
  if (typeof wordsArray === "string") {
    wordsArray = wordsArray
      .replace(/^\[|\]$/g, "")
      .split(",")
      .map((w) => w.replace(/['"]/g, "").trim());
  }

  if (!wordsArray.length) return text;

  const regex = new RegExp(`(${wordsArray.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="font-mono font-semibold text-[var(--color-syntax)]">
        {part}
      </span>
    ) : (
      part
    )
  );
}
