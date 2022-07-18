import puppeteer from 'puppeteer';
import fs from 'fs/promises';

async function main() {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('http://localhost:5000/#/summary-table');
  await page.waitForSelector('#table');
  const table = await page.$('#table');
  if (table) {
    await table.screenshot({path: 'generated-table.png'});
  }
  await browser.close();
}

main();
