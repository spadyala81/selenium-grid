const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver;
let chromeOptions;
let chromeServiceBuilder;
let driverPath;

let hostname = "selenium-hub"
let browserName = "chrome";
let platform = "linux";

// let gridUrl = `http://${hostname}:4444/wd/hub`;

driverPath = "/usr/bin/chromedriver";
chromeServiceBuilder = new chrome.ServiceBuilder(driverPath);
chromeOptions = new chrome.Options();
chromeOptions.addArguments("incognito");
chromeOptions.addArguments("allow-insecure-localhost");
chromeOptions.excludeSwitches(["enable-automation"]);

driver = new webdriver.Builder()
    .forBrowser(browserName)
    // .usingServer(gridUrl)
    .setChromeOptions(chromeOptions)
    .setChromeService(chromeServiceBuilder)
    .build();

module.exports = driver;

