import { VdocPage } from './app.po';

describe('vdoc App', function() {
  let page: VdocPage;

  beforeEach(() => {
    page = new VdocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
