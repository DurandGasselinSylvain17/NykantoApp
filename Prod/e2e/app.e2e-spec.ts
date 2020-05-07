import { ProdPage } from './app.po';

describe('prod App', function() {
  let page: ProdPage;

  beforeEach(() => {
    page = new ProdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
