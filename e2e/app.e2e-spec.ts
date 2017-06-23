import { WMPage } from './app.po';

describe('wm App', () => {
  let page: WMPage;

  beforeEach(() => {
    page = new WMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
