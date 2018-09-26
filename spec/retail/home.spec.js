import { Home, QuickSearchBox } from './home';
import numeral from 'numeral';
import 'numeral/locales/de';

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
    
    numeral.locale('de')
    let bmwScoreAsText = await quickSearchBox.getAssetScore();
    let bmwScore = numeral(bmwScoreAsText).value();
    expect(bmwScore).toBeGreaterThan(60, `The current BMW score is actually ${bmwScoreAsText} ${bmwScore}`);
    expect(bmwScore).toBeLessThan(100, `The current BMW score is actually ${bmwScoreAsText} ${bmwScore}`);
  });
});
