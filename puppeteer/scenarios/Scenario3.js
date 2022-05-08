const puppeteer = require("puppeteer");
const PageObjects = require("../page_objects/PageObjects");
const Properties = require("../properties.json");

const SCENARIO = "./artifacts/scenario3";

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
  await PageObjects.CreatePost(page, SCENARIO, Properties.PostTitle4);

  // Then, I should see the post listed
  await page.goto("http://localhost:2368/ghost/#/posts");
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${SCENARIO}/ListPosts1.jpg` });

  //When I Delete such post
  await PageObjects.DeletePost(page, SCENARIO, Properties.PostTitle4);

  // Then, I shouldn't see the deleted post listed
  await page.goto("http://localhost:2368/ghost/#/posts");
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${SCENARIO}/ListPosts2.jpg` });

  await browser.close();
};
