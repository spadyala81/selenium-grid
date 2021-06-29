const { By, Key, until } = require('selenium-webdriver');
const driver = require("./Driver");

async function example() {
    try {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        return true;
    } finally {
        await driver.quit();
    }
};

module.exports = example;