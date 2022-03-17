const puppeteer = require("puppeteer");

const URL = process.argv[2]; // node index.js <url>
const EXT = process.argv[3]; // node index.js <url> <ext:png/jpg/pdf>

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(URL);
  page.viewport = {
    width: page.width,
    height: page.height,
  };
  if (EXT === "pdf") {
    await page.pdf({
      path: `screenshot${new Date().getTime()}.${EXT}`,
      fullPage: true,
    });
  } else {
    await page.screenshot({
      path: `screenshot${new Date().getTime()}.${EXT}`,
      fullPage: true,
      printBackground: true,
    });
  }
  await browser.close();
})();
