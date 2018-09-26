import { Home, QuickSearchBox } from './home';

describe('Retail Home', () => {
  it('when choosing asset BMW on quick search box reload box', async () => {
    let home = new Home();
    await home.to();
    await home.doScreenshot('initial');
    let quickSearchBox = new QuickSearchBox();
    await quickSearchBox.clickAssetDropDown();
    await home.doScreenshot('quicksearchbox_clicked');
    await quickSearchBox.scrollToAssetBmw();
    await home.doScreenshot('quicksearchbox_scrolled');
    await quickSearchBox.clickAssetBmw();
    await home.doScreenshot('quicksearchbox_asset_BMW_clicked');
    expect(title).toBe('Home - Derivate');
  });
});
