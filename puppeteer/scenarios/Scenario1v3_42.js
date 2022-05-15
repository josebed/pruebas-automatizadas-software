const puppeteer = require("puppeteer");
const PageObjects = require("../page_objectsv3_42/PageObjects");
const Properties = require("../properties.json");

const SCENARIO = "./artifacts/scenario1/RVT";

module.exports = async () => {
  // Given a Browser with an account created
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
    args: [`--window-size=1920,1080`],
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:2368/ghost");
  await new Promise((r) => setTimeout(r, 500));

  // When I Log In and create a new Post
  await PageObjects.LogIn(page, SCENARIO);
  await PageObjects.CreatePost(page, SCENARIO, Properties.PostTitle1);
  await page.goto("http://localhost:2368/ghost/#/posts");
  await new Promise((r) => setTimeout(r, 500));

  // Then, I should see the post listed
  await page.screenshot({ path: `${SCENARIO}/ListPosts.jpg` });

  await browser.close();
};
