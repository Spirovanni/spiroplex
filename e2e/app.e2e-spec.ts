import { SpiroplexPage } from './app.po';

describe('spiroplex App', () => {
  let page: SpiroplexPage;

  beforeEach(() => {
    page = new SpiroplexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
