import React from "react";

/**
 * Highlight specific words in a given text.
 * @param {string} text - Full text to display
 * @param {string[]|string} words - Array of words to highlight (can be a string from API)
 * @returns JSX
 */
export function highlightText(text, words) {
  if (!text) return "";
  if (!words) return text;

  // Ensure words is an array
  let wordsArray = Array.isArray(words) ? words : words;
  if (typeof wordsArray === "string") {
    // Convert string like "['Django','DRF']" into array
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
      <span key={i} className="font-semibold text-black font-libertinus">
        {part}
      </span>
    ) : (
      part
    )
  );
}
