import { MarketOverview } from './marketoverview';

describe('Retail Marketoverview', () => {
  it('when selecting most traded assets then display DAX 30 as first place', async () => {
    let marketOverview = new MarketOverview();
    await marketOverview.to();
    await marketOverview.doScreenshot('initial');
    await marketOverview.focusIframe();
    await marketOverview.clickOnMostTradedAssetsTab();
    await marketOverview.doScreenshot('most_traded_assets');
    let assetNameOnFirstPlace = await marketOverview.isDax30FirstPlaceOnMostTradedAssets();
    expect(assetNameOnFirstPlace).toBe('DAX 30', `The current asset name on first place is ${assetNameOnFirstPlace}`);
  });
});
