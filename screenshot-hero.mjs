import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Desktop (1920x1080)
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1920, height: 1080 });
  await desktopPage.goto('http://localhost:3002');
  await desktopPage.waitForTimeout(2000); // Wait for animations
  await desktopPage.screenshot({ path: 'hero-desktop.png', fullPage: false });
  console.log('✓ Desktop screenshot saved: hero-desktop.png');

  // Tablet (768x1024)
  const tabletPage = await context.newPage();
  await tabletPage.setViewportSize({ width: 768, height: 1024 });
  await tabletPage.goto('http://localhost:3002');
  await tabletPage.waitForTimeout(2000);
  await tabletPage.screenshot({ path: 'hero-tablet.png', fullPage: false });
  console.log('✓ Tablet screenshot saved: hero-tablet.png');

  // Mobile (375x667 - iPhone SE)
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 667 });
  await mobilePage.goto('http://localhost:3002');
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: 'hero-mobile.png', fullPage: false });
  console.log('✓ Mobile screenshot saved: hero-mobile.png');

  await browser.close();
})();
