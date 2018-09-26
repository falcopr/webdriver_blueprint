import { Google } from './google';

describe('Google', () => {
  it('when getting title return Google', async () => {
    let google = new Google();
    await google.to();
    let title = await google.getTitle();
    await google.doScreenshot();

    expect(title).toBe('Google');
  });
});
