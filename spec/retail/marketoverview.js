import { wait } from '../common/wait';
import { Disclaimer } from './disclaimer';

export class MarketOverview {
  async to() {
    let disclaimer = new Disclaimer();
    await disclaimer.disableDisclaimer();
    await browser.url('https://www.zertifikate.commerzbank.de/marktuebersicht');
    let client = await browser.waitForExist('iframe[name="webformsIframe"]');
    await wait(10000);
    return client;
  }

  async doScreenshot(suffix) {
    let suffixFileName = suffix || '';
    return await browser.saveScreenshot(`./screenshots/marketoverview_${suffix}.png`);
  }

  async focusIframe() {
    let frameElement = await browser.element('iframe[name="webformsIframe"]');
    return await browser.frame(frameElement.value);
  }

  async clickOnMostTradedAssetsTab() {
    await browser
      .element('#__tab_ctl01_content_MarketOverviewTopProducts_tabContainer_tabPanelMostTradedUnderlyings')
      .click();
  }

  async isDax30FirstPlaceOnMostTradedAssets() {
    let getAssetNameTableDataOnFirstPlace = browser
      .element('#marketoverview_underlyingassets_table')
      .element('#UnderlyingAsset_1')
      .element('td.name');
    return await getAssetNameTableDataOnFirstPlace.getText();
  }
}
