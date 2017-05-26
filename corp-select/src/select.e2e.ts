import { browser } from 'protractor';
describe('App', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular2 Component Scaffold';
    expect(subject).toEqual(result);
  });
});
