import { chromium } from "playwright";

const BASE = process.env.BASE_URL || "http://localhost:4173";

async function waitForHome(page) {
  await page.waitForTimeout(2500);
  await page.waitForSelector("#about", { timeout: 10000 });
}

async function getSectionTop(page, id) {
  return page.evaluate((sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return null;
    const headerOffset = parseFloat(getComputedStyle(document.documentElement).fontSize) * 5;
    return { scrollY: window.scrollY, rectTop: el.getBoundingClientRect().top, headerOffset };
  }, id);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

const results = [];

try {
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await waitForHome(page);

  await page.click('a[href="#about"]');
  await page.waitForTimeout(800);
  const about = await getSectionTop(page, "about");
  results.push({ test: "nav-about", ok: about && about.rectTop >= 60 && about.rectTop <= 120, about });

  await page.click('header a[aria-label="Scroll to top"]');
  await page.waitForTimeout(800);
  const top = await page.evaluate(() => window.scrollY);
  results.push({ test: "logo-top", ok: top <= 10, top });

  await page.goto(`${BASE}/#contact`, { waitUntil: "networkidle" });
  await waitForHome(page);
  const contact = await getSectionTop(page, "contact");
  results.push({ test: "hash-contact", ok: contact && contact.rectTop >= 60 && contact.rectTop <= 120, contact });

  console.log(JSON.stringify(results, null, 2));
  const allOk = results.every((r) => r.ok);
  process.exit(allOk ? 0 : 1);
} catch (err) {
  console.error(err);
  process.exit(1);
} finally {
  await browser.close();
}
