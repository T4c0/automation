const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
require("chromedriver");
let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("can search Google for 'automation'", async () => {
  // TODO Navigate to google.com
  await driver.get("https://google.com");

  // TODO Uncomment the line below and replace SEARCH_BAR_NAME with the name of the search bar element
  const SEARCH_BAR_NAME = "automation";
  await driver
    .findElement(By.name(SEARCH_BAR_NAME))
    .sendKeys("automation", Key.RETURN);

  // Wait for the results page to load
  await driver.wait(until.titleContains("automation - Google Search"), 3000);
});

test("can search Google twice", async () => {
  // Fix the TODOs below to finish the test
  await driver.get("https://www.google.com");
  const SEARCH_BAR_NAME = "q";
  await driver
    .findElement(By.name(SEARCH_BAR_NAME))
    .sendKeys("first search", Key.RETURN);
  await driver.wait(until.titleContains("first search"), 1000);
  // TODO Call .clear() on the search bar element to clear the old search term
  await driver.findElement(By.name(SEARCH_BAR_NAME)).clear();
  // TODO Call .sendKeys() on the search bar element to search for a new term
  await driver
    .findElement(By.name(SEARCH_BAR_NAME))
    .sendKeys("second search", Key.RETURN);
  // TODO Wait for the results page to load
  await driver.wait(until.titleContains("second search"), 1000);
});
