export class Google {
  async to() {
    return await browser.url('http://www.google.com');
  }

  async getTitle() {
    return await browser.getTitle();
  }

  async doScreenshot() {
    return await browser.saveScreenshot('./screenshots/Google_Title.png');
  }
}
