export class Google {
  constructor(browser) {
    this.browser = browser;
  }

  async to() {
    return await this.browser.url('http://www.google.com');
  }

  async getTitle() {
    return await this.browser.getTitle();
  }
}
