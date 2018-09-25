import { Google } from './google';

describe('Google', () => {
  it('when getting title return Google', async () => {
      let google = new Google(browser);
      await google.to();
      let title = await google.getTitle();

      expect(title).toBe('Google');
  });
});
