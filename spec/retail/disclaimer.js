export class Disclaimer {
  async disableDisclaimer() {
    let client = await browser.url('https://www.zertifikate.commerzbank.de/');
    browser.cookie('post', {
      name: 'GeneralDisclaimer',
      value: 'true'
    });
    return client;
  }
}
