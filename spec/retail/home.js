import { wait } from '../common/wait';

export class Home {
  async to() {
    let client = await browser.url('https://www.zertifikate.commerzbank.de/');
    await wait(5000);
    return client;
  }

  async doScreenshot(suffix) {
    let suffixFileName = suffix || '';
    return await browser.saveScreenshot(`./screenshots/retail_home_${suffix}.png`);
  }

  async getTitle() {
    return await browser.getTitle();
  }
}

export class QuickSearchBox {
  async clickAssetDropDown() {
    await wait(1000);
    return await browser.click('asset-drop-down-list kendo-drop-down-list-ng > span');
  }

  async scrollToAssetBmw() {
    await browser.waitForVisible('div.assetDropDownListAutoWidth');
    return await browser.executeAsync(() => {
      $('.assetDropDownListAutoWidth .k-virtual-content')[0].scrollTop = 2600;
    });
  }

  async clickAssetBmw() {
    // return await browser.click(`asset-drop-down-list li*=${name}`)
    // return await browser.click(`asset-drop-down-list li=${name}`)
    await browser.waitForVisible('div.assetDropDownListAutoWidth');
    return await browser.element('div.assetDropDownListAutoWidth').element('li*=BMW').click()
    // return await browser.click(`//div[contains(@class, 'assetDropDownListAutoWidth')]//li[.='BMW']`);
  }
}
