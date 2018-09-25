import { Google } from './google';

describe('Google', () => {
  it('when getting title return Google', async () => {
    let google = new Google();
    await google.to();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let title = await google.getTitle();
    await google.doScreenshot();

    expect(title).toBe('Google');
  });
});
