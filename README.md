# Webdriver Showcase
Showcase of how webdriver can be used on Angular applications without Protractor

# In General
This repositories consists of a blueprint of basic a basic WebdriverIO application with Selenium setup and a lot of preconfiguration. This project was originally created to check if Protractor can run as a library/enhancement with WebdriverIO. This was sadly not possible in a good and maintainable way. That is why this repostory shows that protractor is not needed in order to test applications including also Angular.

WebdriverIO tests are written with the Testingframework **Jasmine**. A WebdriverIO unit test with Jasmine looks like this:

```javascript
describe(`Home Page`, () => {
  it(`when navigating to webdriver.io then the title must contain WebdriverIO`, async () => {
      await browser.url(`http://webdriver.io`);
      var title = await browser.getTitle();
      expect(title).toBe('WebdriverIO - WebDriver bindings for Node.js');
  });
});
```

The unit tests are located in the **/spec** folder. By file naming convention each file ending with **.spec.js** will be executed in WebdriverIO test runner.

[Jasmine Documentation](https://jasmine.github.io/2.0/introduction.html)\
[WebdriverIO Documentation](http://webdriver.io/api.html)

# Prerequisites
* Install Node.js 10+
* Windows 7 with Powershell 2+
* Locale administration permissions
* Java JRE 1.8+
* Firefox 62+, Chrome 69+ or Internet Explorer 11

# Get Started
**Install all dependencies using local administration privileges**

1. npm install

**Run the Selenium Server via Java JRE**

2. npm run selenium

**Run the WebdriverIO E2E-Tests**

3. npm start

**Generate Allure reports in beautiful HTML**

4. npm run report

**Use browser file access to open allure-reports/index.html**

**(optional) If you want file access for chrome use the chrome-file-access Powershell**

5. ./chrome-file-access.ps1

# Configuration

## Drivers
If you want to test older or newer browsers you need to change the driver version used in the Selenium-Server. The driver paths are located in the **package.json** file in the **selenium** script.
Drivers for older browsers are currently located in the /bin folder.
* Firefox 52 - geckodriver-v0.16.0
* Firefox 62 - geckodriver-v0.22.0
* Chrome 66 - chromedriver-v2.40.0
* Chrome 69 - chromedriver-v2.42.0

[SeleniumHQ Server & Drivers](https://www.seleniumhq.org/download/)

## WebdriverIO config
WebdriverIO configuration can be located in **/src/wdio.conf.js**. If you want to enable/disable browsers just un/-comment the desired browser in **capabilities**.

# Additional commands

**Debugging in Chrome**
* npm run debug

**Debugging in VSCode**
* Use the "Run Webdriver"-Launcher

**REPL**
* npm run repl

**Incremental compiling and running the tests**
* npm run watch

# Troubleshooting

## Internet Explorer 11

**In order to be able to run IE11 tests you must to do the following:**
* Set the zoom level to 100%
* Set **Protected Mode** in System Control > Internet options > Security for **all zones**

## Slow browsers
Slow browsers like Internet Explorer 11 and Firefox 52 version and also prior versions are slow. This causes delays in rendering. When using **wait** in E2E-Tests for slow browsers execution of the WebdriverIO tests can be unreliable. There are two possible solutions for this:
1. Increase the waiting time but this makes the tests slower and still unreliable
2. Use more reliable waiting functions like
    1. waitForEnabled
    2. waitForExist
    3. waitForSelected
    4. waitForText
    5. waitForValue
    6. waitForVisible
    7. waitUntil

## browser.execute and browser.executeAsync
WebdriverIO provides **browser.execute** and **browser.executeAsync** as methods to inject scripts into the host browser. Beware these do not return a promise and cannot be awaited. You need to use a delay function instead after the execute call!
