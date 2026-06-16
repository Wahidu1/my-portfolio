function getHeaderOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--header-offset").trim();
  if (raw.endsWith("rem")) {
    return parseFloat(raw) * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
  return parseFloat(raw) || 80;
}

function withInstantScroll(fn) {
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  fn();
  requestAnimationFrame(() => {
    html.style.scrollBehavior = prev;
  });
}

export function scrollToElement(el, behavior = "smooth") {
  if (!el) return 0;
  const offset = getHeaderOffset();
  const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset);

  if (behavior === "auto") {
    withInstantScroll(() => window.scrollTo({ top, left: 0, behavior: "auto" }));
  } else {
    window.scrollTo({ top, left: 0, behavior: "smooth" });
  }
  return top;
}

export function scrollToTop(behavior = "smooth") {
  if (behavior === "auto") {
    withInstantScroll(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
}

export function scrollToSection(id, behavior = "smooth") {
  if (id === "hero" || id === "top") {
    scrollToTop(behavior);
    return 0;
  }
  const el = document.getElementById(id);
  if (!el) {
    scrollToTop(behavior);
    return 0;
  }
  return scrollToElement(el, behavior);
}

export function scrollToHashWhenReady(id) {
  let attempts = 0;
  let rafId;
  let cancelled = false;

  const tryScroll = () => {
    if (cancelled) return;
    const el = document.getElementById(id);
    if (!el || (id !== "hero" && id !== "top" && el.offsetTop <= 50)) {
      attempts += 1;
      if (attempts <= 60) rafId = requestAnimationFrame(tryScroll);
      return;
    }

    const targetTop = scrollToSection(id, "auto");
    requestAnimationFrame(() => {
      if (cancelled) return;
      const scrollY = window.scrollY;
      const ok = id === "hero" || id === "top"
        ? scrollY <= 10
        : Math.abs(scrollY - targetTop) < 80;
      if (!ok && attempts < 5) {
        attempts += 1;
        rafId = requestAnimationFrame(tryScroll);
      }
    });
  };

  rafId = requestAnimationFrame(tryScroll);
  return () => {
    cancelled = true;
    cancelAnimationFrame(rafId);
  };
}

export function handleBrandClick(e, isHome) {
  if (isHome) {
    e.preventDefault();
    scrollToTop();
  }
}
