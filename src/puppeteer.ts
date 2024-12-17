import puppeteer from "puppeteer";

const puppeteer_controls = async (url: string) => {
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });

    // Set screen size.
    await page.setViewport({ width: 1080, height: 1024 });

    const file_name = Date.now();

    await page.screenshot({
      path: `./src/assets/${file_name}.png`,
    });

    await browser.close();

  } catch (error) {
    console.error("Error occured:", error);
    throw error;
  }
};

export default puppeteer_controls;
