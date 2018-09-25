describe('some test', () => {
  it('my test title', async () => {
      let title = await browser
        .url('http://www.google.com')
        .getTitle();

      expect(title).toBe('Google');
  });
});
